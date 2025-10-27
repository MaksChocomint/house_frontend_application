import { ReactNode } from "react";

interface BackgroundProps {
  imageUrl: string;
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ imageUrl, children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt="background"
        className="z-0 object-cover w-full h-full absolute top-0 left-0"
      />

      {/* Контент */}
      <div className="relative z-20 text-black flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  );
};

export default Background;
