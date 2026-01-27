/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    // Keep defaults; App Router enabled by default in Next 13+.
  },
};

export default nextConfig;
