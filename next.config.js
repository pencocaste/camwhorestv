/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    isrMemoryCacheSize: 0
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;