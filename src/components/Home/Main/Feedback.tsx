import Container from "@/components/Container";
import React from "react";
import ReviewsCarousel from "./ReviewsCarousel";
import Title from "@/components/Title";

const Feedback = () => {
  return (
    <Container styles="mt-32">
      <div className="flex flex-col tablet:flex-row gap-8 tablet:items-center">
        <Title
          upperText="Отзывы"
          lowerText="Что о нас<br>говорят<br>гости"
          styles="tablet:w-96"
        />
        <div className="flex flex-col gap-4">
          <p>
            Здесь собрано несколько отзывов наших гостей, которые рады
            арендовать наши домики снова.
          </p>
          <p>
            Приезжайте и вы к нам наполнить момент красочными эмоциями! <br />{" "}
            Мы будем вам рады!
          </p>
        </div>
      </div>
      <ReviewsCarousel />
    </Container>
  );
};

export default Feedback;
