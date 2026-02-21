import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { LoginRequest, AuthResponse } from '../../types';
import { errorResponse, successResponse } from '@/lib/auth-middleware';

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();

    // Validation
    if (!body.email || !body.password) {
      return errorResponse('Missing required fields: email, password', 400);
    }

    const supabase = await createClient();

    // Sign in user
    const { data, error } = await supabase.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    });

    if (error || !data.user || !data.session) {
      return errorResponse('Invalid email or password', 401);
    }

    const response: AuthResponse = {
      user: {
        id: data.user.id,
        email: data.user.email || '',
        name: data.user.user_metadata?.name,
        created_at: data.user.created_at,
      },
      session: {
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_at: data.session.expires_at || Date.now() + 3600000,
        expires_in: data.session.expires_in || 3600,
      },
    };

    return successResponse(response, 200);
  } catch (error) {
    console.error('Login error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return errorResponse(message, 500);
  }
}
