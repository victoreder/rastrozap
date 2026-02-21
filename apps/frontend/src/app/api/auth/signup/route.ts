import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { SignupRequest, AuthResponse } from '../../types';
import { errorResponse, successResponse } from '@/lib/auth-middleware';

export async function POST(request: NextRequest) {
  try {
    const body: SignupRequest = await request.json();

    // Validation
    if (!body.email || !body.password || !body.name) {
      return errorResponse('Missing required fields: email, password, name', 400);
    }

    if (body.password.length < 6) {
      return errorResponse('Password must be at least 6 characters', 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return errorResponse('Invalid email format', 400);
    }

    const supabase = await createClient();

    // Sign up user
    const { data, error } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
      options: {
        data: {
          name: body.name,
        },
      },
    });

    if (error || !data.user || !data.session) {
      return errorResponse(error?.message || 'Failed to create account', 400);
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

    return successResponse(response, 201);
  } catch (error) {
    console.error('Signup error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return errorResponse(message, 500);
  }
}
