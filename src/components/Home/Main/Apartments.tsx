import Container from "@/components/Container";
import React from "react";
import ApartmentCard from "./ApartmentCard";
import Title from "@/components/Title";

const Apartments = () => {
  return (
    <Container styles="mt-48 flex flex-col gap-32">
      <div className="flex flex-col gap-16">
        <Title upperText="Проживание" lowerText="Гостевые дома" />
        <ApartmentCard
          title="POINT 486<br>Медовый"
          propsList={[
            "70 м²",
            "от 7 850 ₽/сутки",
            "просторная веранда",
            "баня",
            "чан",
            "ортопедические матрасы",
            "до 6 человек",
          ]}
          description="Это уголок, где природа и уют тесно переплетаются, создавая идеальные условия для спокойного отдыха. Этот стильный дом, вдохновлённый золотыми полями пшеницы, предлагает Вам насладиться атмосферой уюта, тепла и щедрости природы."
          link="308326"
          images={[
            "/accommodation/honey/pic1.jpg",
            "/accommodation/honey/pic2.jpg",
            "/accommodation/honey/pic3.jpg",
            "/accommodation/honey/pic4.jpg",
            "/accommodation/honey/pic5.jpg",
            "/accommodation/honey/pic6.jpg",
            "/accommodation/honey/pic7.jpg",
            "/accommodation/honey/pic8.jpg",
            "/accommodation/honey/pic9.jpg",
          ]}
          paletteImage="/accommodation/honey/pic10.png"
          isMirrored={false}
        />
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex smallLaptop:gap-16 desktop:gap-24">
          <div className="w-0 smallLaptop:w-[60%]"></div>
          <Title upperText="Проживание" lowerText="Апартаменты" />
        </div>
        <ApartmentCard
          title="BLACK&WHITE"
          propsList={[
            "18 м²",
            "3 700 ₽/сутки",
            "6 минут до метро",
            "ортопедические матрасы",
            "до 3 человек",
          ]}
          description="Это пространство, где простота и стиль встречаются в гармонии. Студия создана для тех, кто ценит минимализм и безупречный дизайн, который отражает утончённый вкус и современные тенденции. Оформлена в классическом черно-белом цвете, создающем атмосферу строгости и одновременно уюта. Чистые линии, геометрические формы и стильные акценты придают пространству уникальный характер."
          link="308648"
          images={[
            "/accommodation/blacknwhite/pic1.jpg",
            "/accommodation/blacknwhite/pic2.jpg",
            "/accommodation/blacknwhite/pic3.jpg",
            "/accommodation/blacknwhite/pic4.jpg",
            "/accommodation/blacknwhite/pic5.jpg",
            "/accommodation/blacknwhite/pic6.jpg",
            "/accommodation/blacknwhite/pic7.jpg",
            "/accommodation/blacknwhite/pic8.jpg",
            "/accommodation/blacknwhite/pic9.jpg",
          ]}
          paletteImage="/accommodation/blacknwhite/pic10.png"
          isMirrored={true}
        />
      </div>
    </Container>
  );
};

export default Apartments;
