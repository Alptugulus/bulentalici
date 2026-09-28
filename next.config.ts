import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(import.meta.dirname),
  },
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
