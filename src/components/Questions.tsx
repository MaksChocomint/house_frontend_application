"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FaqItem[];
};

const Questions = ({ faqItems }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container styles="mt-32 flex flex-col tablet:flex-row gap-6 items-start">
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
                  <p
                    className="text-black mb-4 text-sm text-justify"
                    dangerouslySetInnerHTML={{
                      __html: item.answer
                        .replace(/<ul>/g, '<ul class="faq-ul-list">')
                        .replace(/<ol>/g, '<ol class="faq-ol-list">'),
                    }}
                  ></p>
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
