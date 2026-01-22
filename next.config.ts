import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Temporarily disable ESLint during builds due to flatCache compatibility issue
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export for GitHub Pages
  // If deploying to a project repository (e.g., username.github.io/Portfolio)
  // uncomment and set the basePath to your repository name:
  // basePath: '/Portfolio',
  // If deploying to user/organization page (e.g., username.github.io), leave basePath commented
  trailingSlash: true, // GitHub Pages works better with trailing slashes
};

export default nextConfig;
