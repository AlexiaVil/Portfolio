const basePath = process.env.BASEPATH ?? undefined;

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
