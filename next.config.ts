import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: false,
    crossOrigin: 'anonymous',
    images: {
        domains: ['blackcircles-data.s3.ap-northeast-2.amazonaws.com'],
    },
    async rewrites() { //CORS 문제 해결을 위한 설정(proxy 설정)
        return [
            {
                source: '/',
                destination: `https://nomad-movies.nomadcoders.workers.dev/:path*`, //컨플루언스의 API주소
            },
        ];
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
