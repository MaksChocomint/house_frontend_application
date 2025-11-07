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
          link="/accommodation/green-lounge"
          images={[
            "/accommodation/green-lounge/honey/pic1.jpg",
            "/accommodation/green-lounge/honey/pic2.jpg",
            "/accommodation/green-lounge/honey/pic3.jpg",
            "/accommodation/green-lounge/honey/pic4.jpg",
            "/accommodation/green-lounge/honey/pic5.jpg",
            "/accommodation/green-lounge/honey/pic6.jpg",
            "/accommodation/green-lounge/honey/pic7.jpg",
            "/accommodation/green-lounge/honey/pic8.jpg",
            "/accommodation/green-lounge/honey/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/honey/pic10.png"
          isMirrored={false}
          booking={false}
        />
      </div>
      <div className="flex flex-col gap-16">
        {/* <div className="flex smallLaptop:gap-16 desktop:gap-24">
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
          link="/accommodation/moscow"
          images={[
            "/accommodation/moscow/blacknwhite/pic1.jpg",
            "/accommodation/moscow/blacknwhite/pic2.jpg",
            "/accommodation/moscow/blacknwhite/pic3.jpg",
            "/accommodation/moscow/blacknwhite/pic4.jpg",
            "/accommodation/moscow/blacknwhite/pic5.jpg",
            "/accommodation/moscow/blacknwhite/pic6.jpg",
            "/accommodation/moscow/blacknwhite/pic7.jpg",
            "/accommodation/moscow/blacknwhite/pic8.jpg",
            "/accommodation/moscow/blacknwhite/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/blacknwhite/pic10.png"
          isMirrored={true}
          booking={false}
        /> */}
      </div>
    </Container>
  );
};

export default Apartments;
