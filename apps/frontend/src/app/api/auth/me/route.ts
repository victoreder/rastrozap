import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { AuthResponse } from '../../types';
import { errorResponse, successResponse, unauthorizedResponse } from '@/lib/auth-middleware';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Get current user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return unauthorizedResponse();
    }

    // Get session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return unauthorizedResponse();
    }

    const response: AuthResponse = {
      user: {
        id: user.id,
        email: user.email || '',
        name: user.user_metadata?.name,
        created_at: user.created_at,
      },
      session: {
        access_token: session.access_token,
        refresh_token: session.refresh_token,
        expires_at: session.expires_at || Date.now() + 3600000,
        expires_in: session.expires_in || 3600,
      },
    };

    return successResponse(response, 200);
  } catch (error) {
    console.error('Get user error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return errorResponse(message, 500);
  }
}
