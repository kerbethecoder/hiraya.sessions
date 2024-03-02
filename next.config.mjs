/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/hiraya.sessions',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
