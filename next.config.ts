import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://onepedia.netlify.app/img/background.jpg",
      "https://img.itch.zone/aW1nLzE4NjYwODUzLnBuZw==/original/BVOvET.png",
      "https://fsspe.petrolina.ifsertaope.edu.br/rocketsoftware/img/Rocket%20Software.png",
      "https://private-user-images.githubusercontent.com/96152954/285897041-56bf2ad8-e56e-4f3e-a9ee-c582f317b9bb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE1MzUwOTEsIm5iZiI6MTc0MTUzNDc5MSwicGF0aCI6Ii85NjE1Mjk1NC8yODU4OTcwNDEtNTZiZjJhZDgtZTU2ZS00ZjNlLWE5ZWUtYzU4MmYzMTdiOWJiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA5VDE1Mzk1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJlNjZiOWQ5MDI0YjVmNDA5YTk4OThjNjk5YThjNzdiYmIwZDJlZDdkODIyZjY4ZTNmZjc5MzVmOWFiNjYxNjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.7Th8FsA6PXNWzEoDvS-LwjwkomAdW8aUKO7c-hKvR24",
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
