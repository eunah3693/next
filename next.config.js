/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:8080',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ];
  },
  images: {
    domains: ['localhost', 'blackcircles-data.s3.ap-northeast-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blackcircles-data.s3.ap-northeast-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     reactStrictMode: false,
//     crossOrigin: 'anonymous',
//     images: {
//         domains: ['blackcircles-data.s3.ap-northeast-2.amazonaws.com'],
//     },
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/,
//             use: ["@svgr/webpack"]
//         });
//         return config;
//     }
// };

// export default nextConfig;


module.exports = nextConfig 