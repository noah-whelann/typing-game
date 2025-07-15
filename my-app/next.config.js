/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/api/auth/[...nextauth]",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
