const basePath = process.env.NODE_ENV === "development" ? "" : "/blog";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  publicRuntimeConfig: {
    // Will be available on both server and client
    basePath,
  },
};

module.exports = nextConfig;
