const basePath = process.env.BASEPATH ?? "/Portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    basePath,
  },
};

export default nextConfig;
