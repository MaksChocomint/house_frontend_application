import React from "react";
import ImageCollage from "../../ImageCollage";
import Container from "@/components/Container";

const Info = () => {
  return (
    <Container styles="flex flex-col smallLaptop:flex-row smallLaptop:gap-16 smallLaptop:items-start items-center justify-center w-full">
      <ImageCollage
        images={[
          "/accommodation/moscow/collage/brown-sofa.jpg",
          "/accommodation/moscow/collage/red-chairs.jpg",
          "/accommodation/moscow/collage/green-sofa.jpg",
        ]}
      />
      <div className="flex flex-col smallLaptop:justify-start gap-6 w-full smallLaptop:w-1/3">
        <h1 className="font-bold tracking-wide text-2xl uppercase text-start">
          Квартиры и студии в Москве
        </h1>
        <div className="flex flex-col gap-4 font-light">
          <p className="text-pretty">
            Добро пожаловать в наши квартиры и студии в Москве — место, где
            идеально сочетаются современный комфорт и уют.
          </p>

          <p className="text-pretty">
            Каждое пространство оформлено с заботой к деталям, оснащено всем
            необходимым для вашего отдыха и позволит насладиться всеми
            прелестями столичной жизни. Ваш отдых в Москве станет максимально
            комфортным, а местоположение позволит быстро добраться до всех
            ключевых точек города.
          </p>

          <p className="text-pretty">
            Мы обеспечиваем удобный и беспроблемный процесс бронирования, чтобы
            вы могли сосредоточиться на своих планах и впечатлениях. Откройте
            для себя Москву с комфортом!
          </p>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default Info;
