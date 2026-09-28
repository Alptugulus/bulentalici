import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(import.meta.dirname),
  },
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/haberler/ito-oteller-komitesinde-degisim",
        destination: "/haberler/ito-oteller-komitesi",
        permanent: true,
      },
      {
        source: "/haberler/hotel-gazetesi-prim-destegi",
        destination: "/haberler/hotel-gazetesi",
        permanent: true,
      },
      {
        source: "/haberler/turizm-aktuel-roportaji",
        destination: "/haberler/turizm-aktuel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
