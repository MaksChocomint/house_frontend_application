import React from "react";
import Image from "next/image";

type ImageCollageProps = {
  images: string[];
};

const ImageCollage: React.FC<ImageCollageProps> = ({ images }) => {
  return (
    <div className="relative w-[300px] smallTablet:w-[589px]  h-[540px]">
      {/* Первое изображение — основное (слева в коллаже) */}
      <div className="absolute top-0 left-0 w-72 smallTablet:w-80 h-[420px]">
        <Image
          src={images[0]}
          alt="Image 1"
          fill
          sizes="50vw"
          className="rounded-sm object-cover shadow-xl shadow-black/20"
        />
      </div>

      {/* Второе изображение — в правом верхнем углу */}
      <div className="absolute top-16 smallTablet:top-8 left-40 smallTablet:left-[21.5rem] w-36 smallTablet:w-56 h-56 smallTablet:h-64">
        <Image
          src={images[1]}
          alt="Image 2"
          fill
          sizes="33vw"
          className="rounded-sm object-cover shadow-xl shadow-black/20"
        />
      </div>

      {/* Третье изображение — в правом нижнем углу */}
      <div className="absolute bottom-10 left-40 smallTablet:left-80 smallLaptop:left-1/2 -translate-x-1/2 w-56 smallTablet:w-80 h-48">
        <Image
          src={images[2]}
          alt="Image 3"
          fill
          sizes="25vw"
          className="rounded-sm object-cover shadow-xl shadow-black/20"
        />
      </div>
    </div>
  );
};

export default ImageCollage;
