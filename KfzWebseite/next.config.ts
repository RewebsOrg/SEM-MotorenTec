import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Alle im Code verwendeten quality-Werte müssen hier freigegeben sein
    qualities: [60, 75, 85, 90],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
