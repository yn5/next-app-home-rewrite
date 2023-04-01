/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/:slug/home',
      },
    ]
  },
}

module.exports = nextConfig
