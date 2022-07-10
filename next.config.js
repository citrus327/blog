/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "development" ? "" : "/blog",
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
