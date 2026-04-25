import React from "react";

type Props = {
  color: string;
};

type ColorMeta = {
  title: string;
  subtitle: string;
  paletteColor: string;
};

const defaultColorMeta: ColorMeta = {
  title: "Unknown Color",
  subtitle: "Неизвестный",
  paletteColor: "bg-gray-300",
};

const colorMetaByName: Partial<Record<string, ColorMeta>> = {
  emerald: {
    title: "POINT 371",
    subtitle: "Изумрудный",
    paletteColor: "bg-emerald",
  },
  mint: {
    title: "POINT 242",
    subtitle: "Мятный",
    paletteColor: "bg-mint",
  },
  softwood: {
    title: "POINT 483",
    subtitle: "Хвойный",
    paletteColor: "bg-softwood",
  },
  olive: {
    title: "POINT 382",
    subtitle: "Оливковый",
    paletteColor: "bg-olive",
  },
  sand: {
    title: "POINT 187",
    subtitle: "Песочный",
    paletteColor: "bg-sand",
  },
  wheat: {
    title: "POINT 485",
    subtitle: "Пшеничный",
    paletteColor: "bg-wheat",
  },
  rowan: {
    title: "POINT 484",
    subtitle: "Рябиновый",
    paletteColor: "bg-rowan",
  },
  blueberry: {
    title: "POINT 177",
    subtitle: "Черничный",
    paletteColor: "bg-blueberry",
  },
  "soft-black": {
    title: "SOFT BLACK",
    subtitle: "Нежный черный",
    paletteColor: "bg-soft-black",
  },
  honey: {
    title: "HONEY",
    subtitle: "Медовый",
    paletteColor: "bg-honey",
  },
};

const ColorCard = ({ color }: Props) => {
  const { title, subtitle, paletteColor } =
    colorMetaByName[color] ?? defaultColorMeta;

  return (
    <div className="flex w-[136px] flex-col gap-2 p-1 pb-3 rounded-xl bg-white font-montserrat">
      <div className={`w-32 h-28 rounded-xl ${paletteColor}`}></div>
      <div className="flex flex-col gap-0 text-start mx-0.5">
        <div className="uppercase font-bold leading-4">{title}</div>

        <div className="text-zinc-500 text-sm font-bold">{subtitle}</div>
      </div>
    </div>
  );
};

export default ColorCard;
