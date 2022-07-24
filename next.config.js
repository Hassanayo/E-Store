/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: "/" },
      '/store': { page: "/store" },
    };
  },
  trailingSlash: true,
};



module.exports = nextConfig;
