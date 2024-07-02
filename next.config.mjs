/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
      },
    ],
  },
  compiler: { styledComponents: true },
}

export default nextConfig
