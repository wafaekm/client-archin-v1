/** @type {import('next').NextConfig} */
const path = require("path");

// IMPORTANT: GitHub Pages project site => https://<user>.github.io/<repoName>/
const repoName = "client-archin-v1";

const nextConfig = {
  output: "export",
  reactStrictMode: false,

  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },

  trailingSlash: true,

  devIndicators: {
    buildActivity: false,
  },

  eslint: {
    ignoreDuringBuilds: false,
  },

  // GitHub Pages base path
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: { unoptimized: true },
};

module.exports = nextConfig;
