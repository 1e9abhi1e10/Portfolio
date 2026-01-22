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
    // On Vercel, image optimization is enabled by default
    // Set unoptimized: true only if deploying to static hosting (GitHub Pages)
    unoptimized: process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true',
  },
  // Remove 'output: export' for Vercel deployment to enable full Next.js features
  // Uncomment the line below only if deploying to GitHub Pages or other static hosting
  // output: 'export',
  trailingSlash: true,
};

export default nextConfig;
