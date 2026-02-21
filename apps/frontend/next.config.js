/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  experimental: {
    optimizePackageImports: ['@supabase/supabase-js'],
  },
};

module.exports = nextConfig;
