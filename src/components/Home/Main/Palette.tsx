import Container from "@/components/Container";
import React from "react";
import ColorCard from "./ColorCard";

const Palette = () => {
  const colors = [
    "blue-heaven",
    "mint",
    "softwood",
    "olive",
    "sand",
    "wheat",
    "moonlight",
    "rowan",
  ];

  return (
    <div className="w-full mt-32 bg-human-detail h-56">
      <Container styles="mt-10">
        <div className="uppercase text-natural-style font-medium text-2xl">
          ВЫБЕРИ ДОМ И/ИЛИ КВАРТИРУ В ПАЛИТРЕ СВОЕГО НАСТРОЕНИЯ!
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-8 overflow-y-hidden h-44">
          {colors.map((color) => (
            <ColorCard key={color} color={color} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Palette;
