import { type NextRequest } from 'next/server';
import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';

// Public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/login', '/registro', '/esqueci-senha', '/redefinir-senha', '/convite', '/suspenso'];

// Routes that require authentication
const PROTECTED_ROUTES = ['/app', '/api'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if route is protected
  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
  const isPublicRoute = PUBLIC_ROUTES.some(route => pathname === route || pathname.startsWith(route + '/'));

  // If it's a public route, allow it through
  if (isPublicRoute && !isProtectedRoute) {
    return null;
  }

  // For protected routes, check authentication
  if (isProtectedRoute) {
    try {
      // Create Supabase client to check session
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            getAll() {
              return parseCookieHeader(request.headers.get('cookie') || '');
            },
            setAll(cookiesToSet) {
              // We don't modify response in middleware, just check
            },
          },
        },
      );

      // Get current session
      const { data: { user } } = await supabase.auth.getUser();

      // If user exists, allow access
      if (user) {
        return null;
      }

      // If API route, return 401
      if (pathname.startsWith('/api')) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }),
          {
            status: 401,
            headers: { 'content-type': 'application/json' },
          },
        );
      }

      // If app route, redirect to login
      if (pathname.startsWith('/app')) {
        return Response.redirect(new URL('/login', request.url));
      }
    } catch (error) {
      console.error('Middleware auth error:', error);

      // On error, for API routes return 401
      if (pathname.startsWith('/api')) {
        return new Response(
          JSON.stringify({ error: 'Authentication check failed' }),
          {
            status: 401,
            headers: { 'content-type': 'application/json' },
          },
        );
      }

      // For app routes, redirect to login
      if (pathname.startsWith('/app')) {
        return Response.redirect(new URL('/login', request.url));
      }
    }
  }

  return null;
}

export const config = {
  matcher: [
    // Protected routes
    '/app/:path*',
    '/api/:path*',
    // Public routes (needed for redirect logic)
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
