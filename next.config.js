/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'flagsapi.com',
          },
          {
            hostname: 'flagcdn.com',
          }
        ],
    },
}

module.exports = nextConfig
