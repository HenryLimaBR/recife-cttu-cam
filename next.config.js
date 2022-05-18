/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'transito.gtrans.com.br'
    ],
    minimumCacheTTL: 0
  }
}

module.exports = nextConfig
