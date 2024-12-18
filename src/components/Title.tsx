import React from "react";

type Props = {
  upperText: string;
  lowerText: string;
  styles?: string;
};

const Title = ({ upperText, lowerText, styles }: Props) => {
  return (
    <div className={`flex flex-col gap-4 text-nowrap " + ${styles}`}>
      <div className="text-home-coziness uppercase text-lg desktop:text-xl">
        {upperText}
      </div>
      <div
        className="text-3xl desktop:text-4xl text-black uppercase font-medium"
        dangerouslySetInnerHTML={{ __html: lowerText }} // Безопасное использование для разметки
      ></div>
    </div>
  );
};

export default Title;
