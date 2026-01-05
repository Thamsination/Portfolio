/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // Will be empty for custom domain
  trailingSlash: true,
};

module.exports = nextConfig;
