import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'transito.serttel.com.br',
        pathname: '/cttupe/index.php/portal/getImg/**',
      }
    ],
    minimumCacheTTL: 60,
  }
}

export default nextConfig