/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add any external image domains here if needed
    remotePatterns: [],
    // Supported formats
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
