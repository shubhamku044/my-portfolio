import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'www.sharefable.com',
      },
      {
        hostname: 'testlify.com',
      },
      {
        hostname: 'www.ticollege.ac.in',
      },
    ],
  },
};

export default nextConfig;