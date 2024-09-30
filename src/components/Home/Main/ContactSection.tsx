import Background from "@/components/Background";
import React from "react";

const ContactSection = () => {
  return (
    <div className="mt-32 w-full h-screen text-white">
      <Background imageUrl="/contact-section.jpg">
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <h1 className="font-semibold tracking-wide text-4xl drop-shadow-lg">
            Остались вопросы?
          </h1>
          <p className="font-light drop-shadow-lg">
            Мы с удовольствием на них ответим!
          </p>
          <form
            action=""
            className="flex flex-col gap-4 px-16 w-full tablet:min-w-[500px] tablet:max-w-[40%] text-sm font-medium text-black"
          >
            <input
              className="p-4 w-full rounded-lg placeholder:font-light shadow-lg shadow-black/40"
              placeholder="Ваше имя"
            />
            <input
              className="p-4 w-full rounded-lg placeholder:font-light shadow-lg shadow-black/40"
              placeholder="Телефон"
            />
            <textarea
              className="p-4 w-full rounded-lg min-h-24 resize-none overflow-x-hidden placeholder:font-light shadow-lg shadow-black/40"
              placeholder="Напишите Ваш вопрос"
            />

            <button className="p-4 w-full rounded-xl bg-yellow-500 font-medium text-white mt-2">
              Перезвоните мне
            </button>
          </form>
          <div className="text-gray-200 font-light text-xs text-center px-10">{`Нажимая на кнопку "Перезвоните мне", Вы соглашаетесь с обработкой персональных данных`}</div>
        </div>
      </Background>
    </div>
  );
};

export default ContactSection;
