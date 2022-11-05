/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // deviceSizes: [320, 420, 768, 1024, 1200],
  // loader: "default",
  // domains: ["res.cloudinary.com"],
};
module.exports = {
  images: {
    domains: ["localhost"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/shopList",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
