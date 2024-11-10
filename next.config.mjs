/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
};

export default nextConfig;
