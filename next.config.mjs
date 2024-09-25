/** @type {import('next').NextConfig} */
const { version } = require("./package.json");

const nextConfig = {
  publicRuntimeConfig: {
    version,
  },
};

export default nextConfig;
