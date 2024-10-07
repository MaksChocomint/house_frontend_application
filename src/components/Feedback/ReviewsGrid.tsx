"use client";

import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewsData";

const ReviewsGrid: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState(8); // Изначально показываем 12 отзывов

  const handleShowMore = () => {
    setVisibleReviews((prev) => prev + 6); // Увеличиваем количество отображаемых отзывов на 6
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 tablet:grid-cols-2 smallLaptop:grid-cols-4 gap-10">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            location={review.location}
            text={review.text}
          />
        ))}
      </div>
      {visibleReviews < reviews.length && ( // Проверяем, нужно ли показывать кнопку
        <div className="flex justify-center">
          <button
            onClick={handleShowMore}
            className="mt-6 px-8 py-2 bg-yellow-500 text-white rounded-full text-sm font-bold"
          >
            Показать еще
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsGrid;
