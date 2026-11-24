import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100 % statique : hébergement gratuit possible partout (dossier out/).
  // cacheComponents et partialPrefetching (pré-rendu partiel) sont incompatibles avec l'export statique.
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
