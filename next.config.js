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
  swcMinify: true,
  compress: true,
};

module.exports = nextConfig; 