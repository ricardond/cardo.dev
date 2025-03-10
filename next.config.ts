import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://onepedia.netlify.app/img/background.jpg",
      "https://img.itch.zone/aW1nLzE4NjYwODUzLnBuZw==/original/BVOvET.png",
      "https://fsspe.petrolina.ifsertaope.edu.br/rocketsoftware/img/Rocket%20Software.png",
      "https://github.com/ricardond/zororun/assets/96152954/56bf2ad8-e56e-4f3e-a9ee-c582f317b9bb",
    ], // Add domains that host your images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
};

export default nextConfig;
