import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // Will be empty for custom domain
  trailingSlash: true,
};

export default nextConfig;
