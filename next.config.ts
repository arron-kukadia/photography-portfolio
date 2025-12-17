import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
}

export default nextConfig
