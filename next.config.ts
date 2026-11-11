import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/blog/", destination: "/family-guide/", permanent: true },
      { source: "/morocco-family-road-trip/", destination: "/blog/morocco-family-road-trip-stops/", permanent: true },
      { source: "/best-time-to-visit-morocco-with-kids/", destination: "/blog/best-season-for-a-morocco-family-trip/", permanent: true },
      { source: "/morocco-family-packing-list/", destination: "/blog/packing-for-morocco-with-kids/", permanent: true },
      { source: "/marrakech-with-kids/", destination: "/blog/marrakech-with-kids/", permanent: true },
      { source: "/fes-with-kids/", destination: "/blog/fes-with-kids/", permanent: true },
      { source: "/chefchaouen-with-kids/", destination: "/blog/chefchaouen-with-kids/", permanent: true },
      { source: "/morocco-family-holiday-cost/", destination: "/blog/morocco-family-trip-budget/", permanent: true },
      { source: "/morocco-family-travel-planner/", destination: "/plan-my-trip/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/df7el8fb4/image/upload/**",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
