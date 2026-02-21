import { NextRequest } from 'next/server';
import { createClient } from './supabase/server';

export async function getAuthSession(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Auth middleware error:', error);
    return null;
  }
}

export function unauthorizedResponse() {
  return new Response(
    JSON.stringify({
      error: 'Unauthorized',
      message: 'Authentication required',
      success: false,
    }),
    {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

export function errorResponse(message: string, statusCode: number = 500) {
  return new Response(
    JSON.stringify({
      error: 'Error',
      message,
      success: false,
    }),
    {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

export function successResponse<T>(data: T, statusCode: number = 200) {
  return new Response(JSON.stringify(data), {
    status: statusCode,
    headers: { 'Content-Type': 'application/json' },
  });
}
