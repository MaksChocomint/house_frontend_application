import React from "react";

import Container from "@/components/Container";
import Title from "@/components/Title";

const Info = () => {
  return (
    <Container styles="flex items-start gap-10 justify-between flex-col smallLaptop:flex-row desktop:mr-40">
      <Title upperText="Проживание" lowerText="Апаратаменты" />
      <div className="flex flex-col gap-8 tablet:w-[740px] text-lg">
        <div className="text-justify">
          Каждые апартаменты FLATPOINT оформлены с вниманием к деталям, оснащены
          всем необходимым для вашего отдыха и позволят насладиться всеми
          прелестями столичной жизни. Ваш отдых в Москве станет максимально
          комфортным, а местоположение позволит быстро добраться до любой
          ключевой точки города.
        </div>
        <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-16 items-start justify-between text-justify">
          <div className="tablet:w-1/2 text-base">
            Мы обеспечиваем удобный и беспроблемный процесс бронирования, чтобы
            вы могли сосредоточиться на своих планах и впечатлениях.
          </div>
          <div className="flex tablet:w-1/2 flex-col gap-4 text-justify">
            <div className=""></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
