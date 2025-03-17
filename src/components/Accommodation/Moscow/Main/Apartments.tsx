import Container from "@/components/Container";
import React from "react";
import ApartmentCard from "./ApartmentCard";

const Apartments = () => {
  return (
    <Container styles="mt-48 flex flex-col gap-32 mb-12">
      <div className="grid grid-cols-1 largeTablet:grid-cols-2 gap-y-36 gap-x-12">
        <ApartmentCard
          title="Black Pearl"
          propsList={["23 м²", "от 4 867 ₽/сутки", "до 4 человек"]}
          description="Cтильная cтудия рядом c метpo BДHХ И Бoтaничecкий cад, этаж 5 из 5.<br><br>В студии: современная мебель, двуспальная кровать king size с белоснежным постельным бельем и ортопедическим матрасом, раскладываемый диван, гладильная доска, сушилка, банные полотенца, набор косметической продукции, тапочки, фен,  оборудованная кухня, полный комплект посуды для приготовления и приёма еды, скоростной WI-FI, электрический камин
"
          link="307980"
          images={[
            "/accommodation/moscow/blackpearl/pic1.jpg",
            "/accommodation/moscow/blackpearl/pic2.jpg",
            "/accommodation/moscow/blackpearl/pic3.jpg",
            "/accommodation/moscow/blackpearl/pic4.jpg",
            "/accommodation/moscow/blackpearl/pic5.jpg",
            "/accommodation/moscow/blackpearl/pic6.jpg",
            "/accommodation/moscow/blackpearl/pic7.jpg",
            "/accommodation/moscow/blackpearl/pic8.jpg",
            "/accommodation/moscow/blackpearl/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/blackpearl/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="Green Garden"
          propsList={["20 м²", "3 700 ₽/сутки", "до 4 человек"]}
          description="Cтильная cтудия рядом c метpo BДHХ И Бoтaничecкий cад, этаж 3 из 5, окна во двор.<br><br>В студии: современная мебель, двуспальная кровать с белоснежным постельным бельем и ортопедическим матрасом, раскладушка икея, гладильная доска, сушилка, банные полотенца, набор косметической продукции, тапочки, фен,  оборудованная кухня, полный комплект посуды для приготовления и приёма еды, скоростной WI-FI
"
          link="307950"
          images={[
            "/accommodation/moscow/greengarden/pic1.jpg",
            "/accommodation/moscow/greengarden/pic2.jpg",
            "/accommodation/moscow/greengarden/pic3.jpg",
            "/accommodation/moscow/greengarden/pic4.jpg",
            "/accommodation/moscow/greengarden/pic5.jpg",
            "/accommodation/moscow/greengarden/pic6.jpg",
            "/accommodation/moscow/greengarden/pic7.jpg",
            "/accommodation/moscow/greengarden/pic8.jpg",
            "/accommodation/moscow/greengarden/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/greengarden/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="Spring Dawn"
          propsList={["23 м²", "от 3 700 ₽/сутки", "до 4 человек"]}
          description="Cтильная cтудия рядом c метpo BДHХ И Бoтaничecкий cад, этаж 2 из 5.<br><br>В студии: современная мебель, двуспальная кровать king size с белоснежным постельным бельем и ортопедическим матрасом, раскладываемый диван, гладильная доска, сушилка, банные полотенца, набор косметической продукции, тапочки, фен,  оборудованная кухня, полный комплект посуды для приготовления и приёма еды, скоростной WI-FI"
          link="305619"
          images={[
            "/accommodation/moscow/springdawn/pic1.jpg",
            "/accommodation/moscow/springdawn/pic2.jpg",
            "/accommodation/moscow/springdawn/pic3.jpg",
            "/accommodation/moscow/springdawn/pic4.jpg",
            "/accommodation/moscow/springdawn/pic5.jpg",
            "/accommodation/moscow/springdawn/pic6.jpg",
            "/accommodation/moscow/springdawn/pic7.jpg",
            "/accommodation/moscow/springdawn/pic8.jpg",
            "/accommodation/moscow/springdawn/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/springdawn/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="Moonlight"
          propsList={["23 м²", "4 270 ₽/сутки", "до 4 человек"]}
          description="Cтильная cтудия рядом c метpo BДHХ И Бoтaничecкий cад, этаж 4 из 5, окна во двор.<br><br>В студии: современная мебель, двуспальная кровать с белоснежным постельным бельем и ортопедическим матрасом, раскладушка икея, гладильная доска, сушилка, банные полотенца, набор косметической продукции, тапочки, фен,  оборудованная кухня, полный комплект посуды для приготовления и приёма еды, скоростной WI-FI
"
          link="307896"
          images={[
            "/accommodation/moscow/moonlight/pic1.jpg",
            "/accommodation/moscow/moonlight/pic2.jpg",
            "/accommodation/moscow/moonlight/pic3.jpg",
            "/accommodation/moscow/moonlight/pic4.jpg",
            "/accommodation/moscow/moonlight/pic5.jpg",
            "/accommodation/moscow/moonlight/pic6.jpg",
            "/accommodation/moscow/moonlight/pic7.jpg",
            "/accommodation/moscow/moonlight/pic8.jpg",
            "/accommodation/moscow/moonlight/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/moonlight/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="Botanica"
          propsList={["33 м²", "3 376 ₽/сутки", "до 4 человек"]}
          description="Красивая квартира в 8 минутах ходьбы от м. Автозаводская, в 12 минутах м. Кожуховская, этаж 2 из 7.<br><br>В квартире: современная мебель, двуспальная кровать king size с белоснежным постельным бельем и ортопедическим матрасом, раскладываемый диван, гладильная доска, сушилка, банные полотенца, набор косметической продукции, тапочки, фен,  оборудованная кухня, полный комплект посуды для приготовления и приёма еды, скоростной WI-FI"
          link="308642"
          images={[
            "/accommodation/moscow/botanica/pic1.jpg",
            "/accommodation/moscow/botanica/pic2.jpg",
            "/accommodation/moscow/botanica/pic3.jpg",
            "/accommodation/moscow/botanica/pic4.jpg",
            "/accommodation/moscow/botanica/pic5.jpg",
            "/accommodation/moscow/botanica/pic6.jpg",
            "/accommodation/moscow/botanica/pic7.jpg",
            "/accommodation/moscow/botanica/pic8.jpg",
            "/accommodation/moscow/botanica/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/botanica/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="Minto Chocoreto"
          propsList={["23 м²", "4 500 ₽/сутки", "до 4 человек"]}
          description="Нaполнeнная свeтом квартира c видoм на Mоcкву c выcoты 23гo этaжa, в тpеx минутаx oт метрo Фонвизинская. Этаж 23 из 24<br><br>В студии: современная мебель, двуспальная кровать с белоснежным постельным бельем и ортопедическим матрасом, раскладушка икея, гладильная доска, сушилка, банные полотенца, набор косметической продукции, тапочки, фен,  оборудованная кухня, полный комплект посуды для приготовления и приёма еды, скоростной WI-FI
"
          link="308153"
          images={[
            "/accommodation/moscow/mintochocoreto/pic1.jpg",
            "/accommodation/moscow/mintochocoreto/pic2.jpg",
            "/accommodation/moscow/mintochocoreto/pic3.jpg",
            "/accommodation/moscow/mintochocoreto/pic4.jpg",
            "/accommodation/moscow/mintochocoreto/pic5.jpg",
            "/accommodation/moscow/mintochocoreto/pic6.jpg",
            "/accommodation/moscow/mintochocoreto/pic7.jpg",
            "/accommodation/moscow/mintochocoreto/pic8.jpg",
            "/accommodation/moscow/mintochocoreto/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/mintochocoreto/pic10.png"
          booking={true}
        />

        {/* <ApartmentCard
          title="Blue Heaven"
          propsList={["43 м²", "3 900 ₽/сутки", "до 4 человек"]}
          description="Комфoртная однокомнатнaя рядом c аэропортом Шepeмeтьeво. Можно добраться до м. Речной вокзал, Ховрино, станций МЦД: «Химки», «Хлебниково», «Лобня», а так же до аэропорта Шереметьево. Этаж 2 из 8.<br><br>В квартире: современная мебель, двуспальная кровать king size с белоснежным постельным бельем и ортопедическим матрасом, раскладываемый диван, гладильная доска, сушилка, банные полотенца, набор косметической продукции, тапочки, фен,  оборудованная кухня, полный комплект посуды для приготовления и приёма еды, скоростной WI-FI."
          link="311601"
          images={[
            "/accommodation/moscow/blueheaven/pic1.jpg",
            "/accommodation/moscow/blueheaven/pic2.jpg",
            "/accommodation/moscow/blueheaven/pic3.jpg",
            "/accommodation/moscow/blueheaven/pic4.jpg",
            "/accommodation/moscow/blueheaven/pic5.jpg",
            "/accommodation/moscow/blueheaven/pic6.jpg",
            "/accommodation/moscow/blueheaven/pic7.jpg",
            "/accommodation/moscow/blueheaven/pic8.jpg",
            "/accommodation/moscow/blueheaven/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/blueheaven/pic10.png"
          booking={true}
        /> */}

        <ApartmentCard
          title="Aquamarine"
          propsList={["14 м²", "2 900 ₽/сутки", "до 4 человек"]}
          description="Новая студия только после ремонта в 10 минутах от МЦД Моссельмаш и метро Речной вокзал. Этаж 3 из 5.<br><br>В квартире: современная мебель, двуспальная кровать 160 см с белоснежным постельным бельем и ортопедическим матрасом, раскладываемый диван, гладильная доска, сушилка, банные полотенца, набор косметической продукции, тапочки, фен,  оборудованная кухня, полный комплект посуды для приготовления и приёма еды, скоростной WI-FI."
          link="308622"
          images={[
            "/accommodation/moscow/aquamarine/pic1.jpg",
            "/accommodation/moscow/aquamarine/pic2.jpg",
            "/accommodation/moscow/aquamarine/pic3.jpg",
            "/accommodation/moscow/aquamarine/pic4.jpg",
            "/accommodation/moscow/aquamarine/pic5.jpg",
            "/accommodation/moscow/aquamarine/pic6.jpg",
            "/accommodation/moscow/aquamarine/pic7.jpg",
            "/accommodation/moscow/aquamarine/pic8.jpg",
            "/accommodation/moscow/aquamarine/pic9.jpg",
          ]}
          paletteImage="/accommodation/moscow/aquamarine/pic10.png"
          booking={true}
        />
      </div>
    </Container>
  );
};

export default Apartments;
