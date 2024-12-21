import React from "react";
import Info from "./Info";
import NewApartment from "./NewApartment";
import Apartments from "./Apartments";
import Questions from "@/components/Questions";
import ContactSection from "@/components/ContactSection";
import MapContainer from "@/components/Footer/MapContainer";

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
      question: "МОЖНО ЛИ С ДОМАШНИМИ ЖИВОТНЫМИ?",
      answer:
        "Да, у нас разрешено размещение с животными, но уточните условия перед бронированием.",
    },
    {
      id: 3,
      question: "ПРАВИЛА ОТДЫХА",
      answer:
        "Да, мы предоставляем возможность организовать мероприятия с предварительным согласованием.",
    },
    {
      id: 4,
      question: "ХОРОШИЙ ЛИ ИНТЕРНЕТ?",
      answer:
        "Для консультации свяжитесь с нашим менеджером через контактную форму или по телефону.",
    },
  ];
  return (
    <div className="mt-32 w-full flex flex-col">
      <Info />
      <NewApartment />
      <Apartments />
      <Questions faqItems={faqItems} />
      <ContactSection imageUrl="/accommodation/moscow/contacts.jpg" />
      <MapContainer />
    </div>
  );
};

export default Main;
