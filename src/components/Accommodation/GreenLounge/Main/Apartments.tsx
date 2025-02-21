import Container from "@/components/Container";
import React from "react";
import ApartmentCard from "./ApartmentCard";

const Apartments = () => {
  return (
    <Container styles="mt-48 flex flex-col gap-32 mb-12">
      <div className="grid grid-cols-1 largeTablet:grid-cols-2 gap-y-36 gap-x-12">
        <ApartmentCard
          title="POINT 485 Пшеничный"
          propsList={["90 м²", "от 9 900 ₽/сутки", "до 6 человек"]}
          description="Уютный дом с открытой верандой с панорамными окнами, столом, 2 стульями, собственной баней (оплачивается отдельно) и подогреваемой купелью (оплачивается отдельно).<br><br>В доме: две двуспальные кровати с белоснежным постельным бельем, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="308319"
          images={[
            "/accommodation/green-lounge/wheat/pic1.jpg",
            "/accommodation/green-lounge/wheat/pic2.jpg",
            "/accommodation/green-lounge/wheat/pic3.jpg",
            "/accommodation/green-lounge/wheat/pic4.jpg",
            "/accommodation/green-lounge/wheat/pic5.jpg",
            "/accommodation/green-lounge/wheat/pic6.jpg",
            "/accommodation/green-lounge/wheat/pic7.jpg",
            "/accommodation/green-lounge/wheat/pic8.jpg",
            "/accommodation/green-lounge/wheat/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/wheat/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 484 Рябиновый"
          propsList={["70 м²", "8 850 ₽/сутки", "до 6 человек"]}
          description="Уютный дом с открытой верандой с панорамными окнами, столом, 6 стульев, собственной баней (оплачивается отдельно) и подогреваемой купелью (оплачивается отдельно).<br><br>В доме: две двуспальные кровати с белоснежным постельным бельем, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="308316"
          images={[
            "/accommodation/green-lounge/rowan/pic1.jpg",
            "/accommodation/green-lounge/rowan/pic2.jpg",
            "/accommodation/green-lounge/rowan/pic3.jpg",
            "/accommodation/green-lounge/rowan/pic4.jpg",
            "/accommodation/green-lounge/rowan/pic5.jpg",
            "/accommodation/green-lounge/rowan/pic6.jpg",
            "/accommodation/green-lounge/rowan/pic7.jpg",
            "/accommodation/green-lounge/rowan/pic8.jpg",
            "/accommodation/green-lounge/rowan/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/rowan/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 483 Хвойный"
          propsList={["90 м²", "от 10 030 ₽/сутки", "до 8 человек"]}
          description="Уютный дом с открытой верандой с панорамными окнами, столом, 6 стульев, собственной баней (оплачивается отдельно) и подогреваемой купелью (оплачивается отдельно).<br><br>В доме: две двуспальные кровати с белоснежным постельным бельем, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="308311"
          images={[
            "/accommodation/green-lounge/softwood/pic1.jpg",
            "/accommodation/green-lounge/softwood/pic2.jpg",
            "/accommodation/green-lounge/softwood/pic3.jpg",
            "/accommodation/green-lounge/softwood/pic4.jpg",
            "/accommodation/green-lounge/softwood/pic5.jpg",
            "/accommodation/green-lounge/softwood/pic6.jpg",
            "/accommodation/green-lounge/softwood/pic7.jpg",
            "/accommodation/green-lounge/softwood/pic8.jpg",
            "/accommodation/green-lounge/softwood/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/softwood/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 400 Кедровый"
          propsList={["115 м²", "8 990 ₽/сутки", "до 8 человек"]}
          description="В доме: одна двуспальная кровать, две односпальные кровати с белоснежным постельным бельем и ортопедическими матрасами, два раскладываемых дивана, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, стиральная машинка, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 3 машины, телевизор и Wi-Fi, веранда"
          link="308309"
          images={[
            "/accommodation/green-lounge/cedar/pic1.jpg",
            "/accommodation/green-lounge/cedar/pic2.jpg",
            "/accommodation/green-lounge/cedar/pic3.jpg",
            "/accommodation/green-lounge/cedar/pic4.jpg",
            "/accommodation/green-lounge/cedar/pic5.jpg",
            "/accommodation/green-lounge/cedar/pic6.jpg",
            "/accommodation/green-lounge/cedar/pic7.jpg",
            "/accommodation/green-lounge/cedar/pic8.jpg",
            "/accommodation/green-lounge/cedar/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/cedar/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 392 Соломенный"
          propsList={["90 м²", "7 490 ₽/сутки", "до 8 человек"]}
          description="Дом с тремя спальнями и ванной возле Истринского водохранилища.<br><br>В доме: две двуспальные кровати и два раскладываемых дивана с белоснежным постельным бельем, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, терраса с обустроенной зоной отдыха, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="309469"
          images={[
            "/accommodation/green-lounge/straw/pic1.jpg",
            "/accommodation/green-lounge/straw/pic2.jpg",
            "/accommodation/green-lounge/straw/pic3.jpg",
            "/accommodation/green-lounge/straw/pic4.jpg",
            "/accommodation/green-lounge/straw/pic5.jpg",
            "/accommodation/green-lounge/straw/pic6.jpg",
            "/accommodation/green-lounge/straw/pic7.jpg",
            "/accommodation/green-lounge/straw/pic8.jpg",
            "/accommodation/green-lounge/straw/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/straw/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 383 Березовый"
          propsList={["90 м²", "8 100 ₽/сутки", "до 8 человек"]}
          description="Уютный, светлый дoм c соврeменнoй мебелью и тeхникoй ждёт вас oтдoхнуть oт гoрoдской суеты.<br><br>В доме: одна двуспальная кровать, две односпальные кровати и два раскладываемых дивана с белоснежным постельным бельем, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="308307"
          images={[
            "/accommodation/green-lounge/birch/pic1.jpg",
            "/accommodation/green-lounge/birch/pic2.jpg",
            "/accommodation/green-lounge/birch/pic3.jpg",
            "/accommodation/green-lounge/birch/pic4.jpg",
            "/accommodation/green-lounge/birch/pic5.jpg",
            "/accommodation/green-lounge/birch/pic6.jpg",
            "/accommodation/green-lounge/birch/pic7.jpg",
            "/accommodation/green-lounge/birch/pic8.jpg",
            "/accommodation/green-lounge/birch/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/birch/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 382 Оливковый"
          propsList={["90 м²", "7 990 ₽/сутки", "до 8 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, два раскладных дивана, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 3 машины, телевизор и Wi-Fi"
          link="308305"
          images={[
            "/accommodation/green-lounge/olive/pic1.jpg",
            "/accommodation/green-lounge/olive/pic2.jpg",
            "/accommodation/green-lounge/olive/pic3.jpg",
            "/accommodation/green-lounge/olive/pic4.jpg",
            "/accommodation/green-lounge/olive/pic5.jpg",
            "/accommodation/green-lounge/olive/pic6.jpg",
            "/accommodation/green-lounge/olive/pic7.jpg",
            "/accommodation/green-lounge/olive/pic8.jpg",
            "/accommodation/green-lounge/olive/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/olive/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 377 Черемуховый"
          propsList={["65 м²", "6 962 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, два раскладных дивана, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 3 машины, телевизор и Wi-Fi"
          link="308299"
          images={[
            "/accommodation/green-lounge/cherem/pic1.jpg",
            "/accommodation/green-lounge/cherem/pic2.jpg",
            "/accommodation/green-lounge/cherem/pic3.jpg",
            "/accommodation/green-lounge/cherem/pic4.jpg",
            "/accommodation/green-lounge/cherem/pic5.jpg",
            "/accommodation/green-lounge/cherem/pic6.jpg",
            "/accommodation/green-lounge/cherem/pic7.jpg",
            "/accommodation/green-lounge/cherem/pic8.jpg",
            "/accommodation/green-lounge/cherem/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/cherem/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 374 Озерный"
          propsList={["65 м²", "6 982 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="308292"
          images={[
            "/accommodation/green-lounge/lake/pic1.jpg",
            "/accommodation/green-lounge/lake/pic2.jpg",
            "/accommodation/green-lounge/lake/pic3.jpg",
            "/accommodation/green-lounge/lake/pic4.jpg",
            "/accommodation/green-lounge/lake/pic5.jpg",
            "/accommodation/green-lounge/lake/pic6.jpg",
            "/accommodation/green-lounge/lake/pic7.jpg",
            "/accommodation/green-lounge/lake/pic8.jpg",
            "/accommodation/green-lounge/lake/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/lake/pic10.png"
          booking={true}
        />

        {/* <ApartmentCard
          title="POINT 373 Таежный"
          propsList={["65 м²", "8 850 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="308290"
          images={[
            "/accommodation/green-lounge/taiga/pic1.jpg",
            "/accommodation/green-lounge/taiga/pic2.jpg",
            "/accommodation/green-lounge/taiga/pic3.jpg",
            "/accommodation/green-lounge/taiga/pic4.jpg",
            "/accommodation/green-lounge/taiga/pic5.jpg",
            "/accommodation/green-lounge/taiga/pic6.jpg",
            "/accommodation/green-lounge/taiga/pic7.jpg",
            "/accommodation/green-lounge/taiga/pic8.jpg",
            "/accommodation/green-lounge/taiga/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/taiga/pic10.png"
          booking={true}
        /> */}

        <ApartmentCard
          title="POINT 371 Изумрудный"
          propsList={["65 м²", "6 970 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладываемый диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi, настольные игры"
          link="307977"
          images={[
            "/accommodation/green-lounge/emerald/pic1.jpg",
            "/accommodation/green-lounge/emerald/pic2.jpg",
            "/accommodation/green-lounge/emerald/pic3.jpg",
            "/accommodation/green-lounge/emerald/pic4.jpg",
            "/accommodation/green-lounge/emerald/pic5.jpg",
            "/accommodation/green-lounge/emerald/pic6.jpg",
            "/accommodation/green-lounge/emerald/pic7.jpg",
            "/accommodation/green-lounge/emerald/pic8.jpg",
            "/accommodation/green-lounge/emerald/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/emerald/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 369 Восточный"
          propsList={["65 м²", "5 990 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="315162"
          images={[
            "/accommodation/green-lounge/east/pic1.jpg",
            "/accommodation/green-lounge/east/pic2.jpg",
            "/accommodation/green-lounge/east/pic3.jpg",
            "/accommodation/green-lounge/east/pic4.jpg",
            "/accommodation/green-lounge/east/pic5.jpg",
            "/accommodation/green-lounge/east/pic6.jpg",
            "/accommodation/green-lounge/east/pic7.jpg",
            "/accommodation/green-lounge/east/pic8.jpg",
            "/accommodation/green-lounge/east/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/east/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 367 Лавандовый"
          propsList={["60 м²", "5 900 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="307976"
          images={[
            "/accommodation/green-lounge/lavanda/pic1.jpg",
            "/accommodation/green-lounge/lavanda/pic2.jpg",
            "/accommodation/green-lounge/lavanda/pic3.jpg",
            "/accommodation/green-lounge/lavanda/pic4.jpg",
            "/accommodation/green-lounge/lavanda/pic5.jpg",
            "/accommodation/green-lounge/lavanda/pic6.jpg",
            "/accommodation/green-lounge/lavanda/pic7.jpg",
            "/accommodation/green-lounge/lavanda/pic8.jpg",
            "/accommodation/green-lounge/lavanda/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/lavanda/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 359 Солнечный"
          propsList={["65 м²", "6 700 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладываемый диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi, настольные игры"
          link="307973"
          images={[
            "/accommodation/green-lounge/sunny/pic1.jpg",
            "/accommodation/green-lounge/sunny/pic2.jpg",
            "/accommodation/green-lounge/sunny/pic3.jpg",
            "/accommodation/green-lounge/sunny/pic4.jpg",
            "/accommodation/green-lounge/sunny/pic5.jpg",
            "/accommodation/green-lounge/sunny/pic6.jpg",
            "/accommodation/green-lounge/sunny/pic7.jpg",
            "/accommodation/green-lounge/sunny/pic8.jpg",
            "/accommodation/green-lounge/sunny/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/sunny/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 358 Ореховый"
          propsList={["115 м²", "8 142 ₽/сутки", "до 8 человек"]}
          description="Уютный дом с открытой верандой с панорамными окнами, столом, 2 стульями, собственной сауной в доме (оплачивается отдельно)<br><br>В доме: две двуспальные кровати с белоснежным постельным бельем, два раскладных дивана, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 3 машины, телевизор и Wi-Fi, Sоny РlаyStаtiоn 3."
          link="307971"
          images={[
            "/accommodation/green-lounge/nuts/pic1.jpg",
            "/accommodation/green-lounge/nuts/pic2.jpg",
            "/accommodation/green-lounge/nuts/pic3.jpg",
            "/accommodation/green-lounge/nuts/pic4.jpg",
            "/accommodation/green-lounge/nuts/pic5.jpg",
            "/accommodation/green-lounge/nuts/pic6.jpg",
            "/accommodation/green-lounge/nuts/pic7.jpg",
            "/accommodation/green-lounge/nuts/pic8.jpg",
            "/accommodation/green-lounge/nuts/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/nuts/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 242 Мятный"
          propsList={["65 м²", "8 090 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="307960"
          images={[
            "/accommodation/green-lounge/mint/pic1.jpg",
            "/accommodation/green-lounge/mint/pic2.jpg",
            "/accommodation/green-lounge/mint/pic3.jpg",
            "/accommodation/green-lounge/mint/pic4.jpg",
            "/accommodation/green-lounge/mint/pic5.jpg",
            "/accommodation/green-lounge/mint/pic6.jpg",
            "/accommodation/green-lounge/mint/pic7.jpg",
            "/accommodation/green-lounge/mint/pic8.jpg",
            "/accommodation/green-lounge/mint/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/mint/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 230 Лимонный"
          propsList={["65 м²", "6 990 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="315409"
          images={[
            "/accommodation/green-lounge/lemon/pic1.jpg",
            "/accommodation/green-lounge/lemon/pic2.jpg",
            "/accommodation/green-lounge/lemon/pic3.jpg",
            "/accommodation/green-lounge/lemon/pic4.jpg",
            "/accommodation/green-lounge/lemon/pic5.jpg",
            "/accommodation/green-lounge/lemon/pic6.jpg",
            "/accommodation/green-lounge/lemon/pic7.jpg",
            "/accommodation/green-lounge/lemon/pic8.jpg",
            "/accommodation/green-lounge/lemon/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/lemon/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 226 Альпийский"
          propsList={["65 м²", "6 990 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="326087"
          images={[
            "/accommodation/green-lounge/alpic/pic1.jpg",
            "/accommodation/green-lounge/alpic/pic2.jpg",
            "/accommodation/green-lounge/alpic/pic3.jpg",
            "/accommodation/green-lounge/alpic/pic4.jpg",
            "/accommodation/green-lounge/alpic/pic5.jpg",
            "/accommodation/green-lounge/alpic/pic6.jpg",
            "/accommodation/green-lounge/alpic/pic7.jpg",
            "/accommodation/green-lounge/alpic/pic8.jpg",
            "/accommodation/green-lounge/alpic/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/alpic/pic10.png"
          booking={true}
        />
        <ApartmentCard
          title="POINT 221 Алтайский"
          propsList={["65 м²", "6 990 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладываемый диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi, настольные игры"
          link="326080"
          images={[
            "/accommodation/green-lounge/altai/pic1.jpg",
            "/accommodation/green-lounge/altai/pic2.jpg",
            "/accommodation/green-lounge/altai/pic3.jpg",
            "/accommodation/green-lounge/altai/pic4.jpg",
            "/accommodation/green-lounge/altai/pic5.jpg",
            "/accommodation/green-lounge/altai/pic6.jpg",
            "/accommodation/green-lounge/altai/pic7.jpg",
            "/accommodation/green-lounge/altai/pic8.jpg",
            "/accommodation/green-lounge/altai/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/altai/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 194 Карамельный"
          propsList={["65 м²", "8 249 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-FiВ доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="316934"
          images={[
            "/accommodation/green-lounge/caramel/pic1.jpg",
            "/accommodation/green-lounge/caramel/pic2.jpg",
            "/accommodation/green-lounge/caramel/pic3.jpg",
            "/accommodation/green-lounge/caramel/pic4.jpg",
            "/accommodation/green-lounge/caramel/pic5.jpg",
            "/accommodation/green-lounge/caramel/pic6.jpg",
            "/accommodation/green-lounge/caramel/pic7.jpg",
            "/accommodation/green-lounge/caramel/pic8.jpg",
            "/accommodation/green-lounge/caramel/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/caramel/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 187 Песочный"
          propsList={["65 м²", "6 962 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладываемый диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi, настольные игры"
          link="307957"
          images={[
            "/accommodation/green-lounge/sand/pic1.jpg",
            "/accommodation/green-lounge/sand/pic2.jpg",
            "/accommodation/green-lounge/sand/pic3.jpg",
            "/accommodation/green-lounge/sand/pic4.jpg",
            "/accommodation/green-lounge/sand/pic5.jpg",
            "/accommodation/green-lounge/sand/pic6.jpg",
            "/accommodation/green-lounge/sand/pic7.jpg",
            "/accommodation/green-lounge/sand/pic8.jpg",
            "/accommodation/green-lounge/sand/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/sand/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 178 Бирюзовый"
          propsList={["65 м²", "6 962 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладной диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="307945"
          images={[
            "/accommodation/green-lounge/aqua/pic1.jpg",
            "/accommodation/green-lounge/aqua/pic2.jpg",
            "/accommodation/green-lounge/aqua/pic3.jpg",
            "/accommodation/green-lounge/aqua/pic4.jpg",
            "/accommodation/green-lounge/aqua/pic5.jpg",
            "/accommodation/green-lounge/aqua/pic6.jpg",
            "/accommodation/green-lounge/aqua/pic7.jpg",
            "/accommodation/green-lounge/aqua/pic8.jpg",
            "/accommodation/green-lounge/aqua/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/aqua/pic10.png"
          booking={true}
        />

        <ApartmentCard
          title="POINT 177 Черничный"
          propsList={["65 м²", "6 361 ₽/сутки", "до 6 человек"]}
          description="В доме: одна двуспальная кровать и две односпальные кровати  с белоснежным постельным бельем и ортопедическими матрасами, раскладываемый диван, кондиционер, банные полотенца, набор косметической продукции, тапочки, фен, холодильник с морозильной камерой, кофемашина, чайник и чайные принадлежности, посудомоечная машина, зона барбекю с мангалом и шампура, парковочное место на 2 машины, телевизор и Wi-Fi"
          link="306853"
          images={[
            "/accommodation/green-lounge/blueberry/pic1.jpg",
            "/accommodation/green-lounge/blueberry/pic2.jpg",
            "/accommodation/green-lounge/blueberry/pic3.jpg",
            "/accommodation/green-lounge/blueberry/pic4.jpg",
            "/accommodation/green-lounge/blueberry/pic5.jpg",
            "/accommodation/green-lounge/blueberry/pic6.jpg",
            "/accommodation/green-lounge/blueberry/pic7.jpg",
            "/accommodation/green-lounge/blueberry/pic8.jpg",
            "/accommodation/green-lounge/blueberry/pic9.jpg",
          ]}
          paletteImage="/accommodation/green-lounge/blueberry/pic10.png"
          booking={true}
        />
      </div>
    </Container>
  );
};

export default Apartments;
