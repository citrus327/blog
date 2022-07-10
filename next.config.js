/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "development" ? "" : "/blog",
  images: {
    loader: "custom",
    domains: ["githubusercontent.com"],
  },
};

module.exports = nextConfig;
