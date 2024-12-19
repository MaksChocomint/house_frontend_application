"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

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

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container styles="mt-32 flex flex-col tablet:flex-row gap-12 items-start">
      {/* Левая колонка */}
      <div className="flex flex-col gap-8">
        <Title
          upperText="Вопросы"
          lowerText="Остались<br>Вопросы?"
          styles="tablet:w-96"
        />
        <div className="text-pretty w-[300px]">
          Возможно, вы найдете ответы в этом списке. Если вашего вопроса здесь
          нет, задайте его нам ниже.
        </div>
      </div>

      {/* Правая колонка */}
      <div className="flex-1 w-full select-none">
        {faqItems.map((item, index) => (
          <div key={item.id} className="border-b border-home-coziness">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-xl">{item.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoIosArrowDown size={48} />
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-black mb-4">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Questions;
