import React from "react";

type Props = {
  color: string;
};

const ColorCard = ({ color }: Props) => {
  let title = "";
  let subtitle = "";
  let paletteColor = "";

  switch (color) {
    case "blue-heaven":
      title = "BLUE HEAVEN";
      subtitle = "Апартаменты";
      paletteColor = "bg-blue-heaven";
      break;
    case "mint":
      title = "POINT 242";
      subtitle = "Мятный";
      paletteColor = "bg-mint";
      break;
    case "softwood":
      title = "POINT 483";
      subtitle = "Хвойный";
      paletteColor = "bg-softwood";
      break;
    case "olive":
      title = "POINT 382";
      subtitle = "Оливковый";
      paletteColor = "bg-olive";
      break;
    case "sand":
      title = "POINT 187";
      subtitle = "Песочный";
      paletteColor = "bg-sand";
      break;
    case "wheat":
      title = "POINT 485";
      subtitle = "Пшеничный";
      paletteColor = "bg-wheat";
      break;
    case "moonlight":
      title = "MOONLIGHT";
      subtitle = "Апартаменты";
      paletteColor = "bg-moonlight";
      break;
    case "rowan":
      title = "POINT 484";
      subtitle = "Рябиновый";
      paletteColor = "bg-rowan";
      break;
    case "soft-black":
      title = "SOFT BLACK";
      subtitle = "Нежный черный";
      paletteColor = "bg-soft-black";
      break;
    case "honey":
      title = "HONEY";
      subtitle = "Медовый";
      paletteColor = "bg-honey";
      break;
    default:
      title = "Unknown Color";
      subtitle = "Неизвестный";
      paletteColor = "bg-gray-300";
      break;
  }

  return (
    <div
      className={`flex flex-col gap-2 p-1 pb-3 rounded-xl bg-white font-montserrat`}
    >
      <div className={`w-32 h-28 rounded-xl ${paletteColor}`}></div>
      <div className="flex flex-col gap-0 text-start mx-0.5">
        <div className="uppercase font-bold leading-4">{title}</div>

        <div className="text-zinc-500 text-sm font-bold">{subtitle}</div>
      </div>
    </div>
  );
};

export default ColorCard;
