import React from "react";

type Props = {
  upperText: string;
  lowerText: string;
};

const Title = ({ upperText, lowerText }: Props) => {
  return (
    <div className="flex flex-col gap-4 text-nowrap">
      <div className="text-home-coziness uppercase text-lg">{upperText}</div>
      <div
        className="text-4xl text-black uppercase font-medium"
        dangerouslySetInnerHTML={{ __html: lowerText }} // Безопасное использование для разметки
      ></div>
    </div>
  );
};

export default Title;
