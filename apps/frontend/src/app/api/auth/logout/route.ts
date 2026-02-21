import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { errorResponse, successResponse, unauthorizedResponse } from '@/lib/auth-middleware';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Get current user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return unauthorizedResponse();
    }

    // Sign out
    const { error } = await supabase.auth.signOut();

    if (error) {
      return errorResponse(error.message, 500);
    }

    return successResponse({ success: true }, 200);
  } catch (error) {
    console.error('Logout error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return errorResponse(message, 500);
  }
}
