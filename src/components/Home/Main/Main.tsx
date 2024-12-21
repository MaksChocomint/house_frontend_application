import React from "react";
import Info from "./Info";
import Gallery from "./Gallery";
import Palette from "./Palette";
import Apartments from "./Apartments";
import Entertainment from "./Entertainment";
import Feedback from "./Feedback";
import Questions from "../../Questions";
import ContactSection from "@/components/ContactSection";

const Main = () => {
  const faqItems = [
    {
      id: 1,
      question: "ЕСТЬ ЛИ СКИДКИ И АКЦИИ?",
      answer:
        "Да, у нас предусмотрена скидка в 10% на аренду как дома, так и апартаментов, вам и вашим гостям в течение двух недель до и после вашего дня рождения. Также, при бронировании дома с воскресенья по четверг от двух суток третьи идут в подарок!",
    },
    {
      id: 2,
      question: "МОЖНО ЛИ ВЗЯТЬ С СОБОЙ СОБАКУ?",
      answer:
        "Да, у нас разрешено размещение с животными, но уточните условия перед бронированием.",
    },
    {
      id: 3,
      question: "ВОЗМОЖНА ЛИ ОРГАНИЗАЦИЯ МЕРОПРИЯТИЯ?",
      answer:
        "Да, мы предоставляем возможность организовать мероприятия с предварительным согласованием.",
    },
    {
      id: 4,
      question: "КАК ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ПО АРЕНДЕ НЕДВИЖИМОСТИ?",
      answer:
        "Для консультации свяжитесь с нашим менеджером через контактную форму или по телефону.",
    },
    {
      id: 5,
      question: "ЧТО ВХОДИТ В СТОИМОСТЬ ПРОЖИВАНИЯ?",
      answer:
        "В стоимость проживания включены основные удобства: жилье, постельное белье, полотенца, Wi-Fi, и уборка.",
    },
  ];
  return (
    <div className="mt-32 w-full flex flex-col">
      <Info />
      <Gallery />
      <Palette />
      <Apartments />
      <Entertainment />
      <Feedback />
      <Questions faqItems={faqItems} />
      <ContactSection imageUrl="/contact.jpg" />
    </div>
  );
};

export default Main;
