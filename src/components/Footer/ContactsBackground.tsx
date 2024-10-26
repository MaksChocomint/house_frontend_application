import Image from "next/image";
import { ReactNode } from "react";

interface BackgroundProps {
  imageUrl: string;
  children: ReactNode;
}

const ContactsBackground: React.FC<BackgroundProps> = ({
  imageUrl,
  children,
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="background"
        fill
        quality={100}
        className="z-0 object-cover object-lowCenter"
        priority // Оптимизация: устанавливаем приоритет загрузки
      />
      {/* Контент */}
      <div className="relative z-20 text-white flex justify-center items-center h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default ContactsBackground;
