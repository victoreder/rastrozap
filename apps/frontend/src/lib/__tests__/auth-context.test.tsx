import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '../auth-context';
import { ReactNode } from 'react';

// Mock Supabase client
jest.mock('../supabase/client', () => ({
  supabase: {
    auth: {
      getSession: jest.fn(),
      onAuthStateChange: jest.fn(),
      signOut: jest.fn(),
      refreshSession: jest.fn(),
    },
  },
}));

// Test component that uses useAuth
function TestComponent() {
  const { user, session, isLoading, error } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div data-testid="user">{user ? user.email : 'No user'}</div>
      <div data-testid="session">{session ? 'Session active' : 'No session'}</div>
    </div>
  );
}

describe('AuthProvider & useAuth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should provide auth context to children', async () => {
    const { supabase } = require('../supabase/client');
    supabase.auth.getSession.mockResolvedValue({
      data: { session: null },
    });
    supabase.auth.onAuthStateChange.mockReturnValue({
      data: { subscription: { unsubscribe: jest.fn() } },
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('user')).toHaveTextContent('No user');
    });
  });

  it('should throw error when useAuth is used outside AuthProvider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useAuth must be used within an AuthProvider');

    consoleError.mockRestore();
  });

  it('should display loading state initially', () => {
    const { supabase } = require('../supabase/client');
    supabase.auth.getSession.mockImplementation(
      () => new Promise(() => {}), // Never resolves
    );
    supabase.auth.onAuthStateChange.mockReturnValue({
      data: { subscription: { unsubscribe: jest.fn() } },
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should set user when session exists', async () => {
    const mockUser = {
      id: 'test-user-id',
      email: 'test@example.com',
      user_metadata: { name: 'Test User' },
    };
    const mockSession = {
      user: mockUser,
      access_token: 'mock-token',
      expires_in: 3600,
    };

    const { supabase } = require('../supabase/client');
    supabase.auth.getSession.mockResolvedValue({
      data: { session: mockSession },
    });
    supabase.auth.onAuthStateChange.mockReturnValue({
      data: { subscription: { unsubscribe: jest.fn() } },
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('session')).toHaveTextContent('Session active');
    });
  });
});
