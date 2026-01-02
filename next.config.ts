import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      root: '.' // This tells TurboPack that the root is the current directory
    }
  }
};

export default nextConfig;
