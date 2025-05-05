import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: false,
    crossOrigin: 'anonymous',
    images: {
        domains: ['blackcircles-data.s3.ap-northeast-2.amazonaws.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
};

export default nextConfig;
