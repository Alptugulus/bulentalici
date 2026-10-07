import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: path.join(import.meta.dirname),
  },
  images: {
    unoptimized: true,
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
      {
        source: "/sozumuz",
        destination: "/vizyonumuz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
