import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Импортируем иконку отзыва

interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, location, text }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center font-light flex flex-col items-center gap-4 border border-gray-200 relative">
      {/* Иконка отзыва */}
      <FaQuoteLeft className="text-yellow-500 text-4xl absolute -top-6 bg-white rounded-full p-2 shadow-md" />

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="mt-4 text-base text-gray-700 italic leading-relaxed">
        {text}
      </p>

      {/* Дополнительный декоративный элемент внизу карточки */}
      <div className="w-10 h-1 bg-yellow-500 mt-4 rounded"></div>
    </div>
  );
};

export default ReviewCard;
