'use client';

import { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from './supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: Error | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize auth state on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();

        if (currentSession) {
          setSession(currentSession);
          setUser(currentSession.user);
          startSessionRefresh(currentSession);
        }

        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Auth initialization failed'));
        setIsLoading(false);
      }
    };

    initAuth();

    // Listen to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          setSession(session);
          setUser(session.user);
          startSessionRefresh(session);
        } else {
          setSession(null);
          setUser(null);
          if (refreshIntervalRef.current) {
            clearInterval(refreshIntervalRef.current);
          }
        }
      },
    );

    // Listen to storage changes (sync across tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'supabase.auth.token') {
        // Trigger re-sync when auth changes in another tab
        initAuth();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      subscription?.unsubscribe();
      window.removeEventListener('storage', handleStorageChange);
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, []);

  const startSessionRefresh = (session: Session) => {
    // Clear any existing interval
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current);
    }

    // Calculate time until token expires (with 1 minute buffer)
    const expiresIn = session.expires_in || 3600;
    const expiresAt = (session.expires_at || Math.floor(Date.now() / 1000) + expiresIn) * 1000;
    const now = Date.now();
    const timeUntilExpiry = expiresAt - now - 60000; // 1 minute before expiry

    if (timeUntilExpiry > 0) {
      refreshIntervalRef.current = setTimeout(async () => {
        try {
          const { data: { session: newSession }, error } = await supabase.auth.refreshSession();
          if (error || !newSession) {
            // Session refresh failed, clear auth
            setSession(null);
            setUser(null);
          }
        } catch (err) {
          console.error('Session refresh error:', err);
          setSession(null);
          setUser(null);
        }
      }, timeUntilExpiry);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      setUser(null);
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Sign out failed'));
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, isLoading, error, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
