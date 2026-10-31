/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['img02.restaurantguru.com', 'img4.restaurantguru.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
