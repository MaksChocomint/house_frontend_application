/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**", // Для загрузки изображений по любым путям
      },
      {
        protocol: "https",
        hostname: "secure.travelline.ru",
        port: "",
        pathname: "/**", // Для загрузки изображений по любым путям
      },
    ],

    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
