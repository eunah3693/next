import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: false,
    crossOrigin: 'anonymous',
    async rewrites() { //CORS 문제 해결을 위한 설정(proxy 설정)
        return [
            {
                source: '/',
                destination: `https://nomad-movies.nomadcoders.workers.dev/:path*`, //컨플루언스의 API주소
            },
        ];
    },
};

export default nextConfig;
