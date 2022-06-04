/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cms.aaiga.com.au", "secure.gravatar.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
