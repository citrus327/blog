/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "development" ? "" : "/blog",
};

module.exports = nextConfig;
