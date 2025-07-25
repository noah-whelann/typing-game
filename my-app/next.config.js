/** @type {import('next').NextConfig} */
const nextConfig = {
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
