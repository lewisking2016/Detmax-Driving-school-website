/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'detmaxinstitute.co.ke',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
