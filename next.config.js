/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Disable ESLint during build 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimizations for Vercel
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  // Disable telemetry and tracing to fix permission errors
  telemetry: { 
    disabled: true 
  },
  experimental: {
    serverComponentsExternalPackages: [],
    outputFileTracingIgnores: ['.next/**', './**/*'],
    outputFileTracingRoot: process.cwd(),
  },
};

module.exports = nextConfig; 