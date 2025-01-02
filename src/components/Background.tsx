import Image from "next/image";
import { ReactNode } from "react";

interface BackgroundProps {
  imageUrl: string;
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ imageUrl, children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Overlay */}

      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="background"
        fill
        quality={100}
        className="z-0 object-cover"
        priority // Оптимизация: устанавливаем приоритет загрузки
      />
      {/* Контент */}
      <div className="relative z-20 text-black flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
};

export default Background;
