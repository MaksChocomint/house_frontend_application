"use client";

import React, { useState } from "react";
import Background from "./Background";
import emailjs from "@emailjs/browser";
import Title from "./Title";

type Props = {
  imageUrl: string;
};

const ContactSection = ({ imageUrl }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Обработчик изменения полей ввода
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Предотвращаем обновление страницы
    setIsSending(true); // Ставим статус, что идет отправка

    // Попробуем отправить данные через EmailJS
    try {
      const result = await emailjs.send(
        "service_xt5o30w", // Замените на ваш Service ID
        "template_u0337f7", // Замените на ваш Template ID
        {
          name: formData.name,
          phone: formData.phone,
        },
        "KHUXT0O9xljwixgMC" // Замените на ваш Public Key
      );

      // Проверяем статус ответа
      if (result.status === 200) {
        setSuccessMessage("Сообщение успешно отправлено!");
        setFormData({ name: "", phone: "" });
      } else {
        setSuccessMessage("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      console.error("Ошибка при отправке EmailJS", error);
      setSuccessMessage("Произошла ошибка. Попробуйте снова.");
    } finally {
      setIsSending(false); // Снимаем статус отправки
    }
  };

  return (
    <div className="mt-32 w-full">
      <Background imageUrl={imageUrl}>
        <div className="absolute top-1/2 -translate-y-1/2 smallLaptop:right-56 flex flex-col justify-center gap-5 py-14 px-8 bg-clean-space w-full tablet:w-[580px]">
          <Title
            upperText="Контакты"
            lowerText="Оставьте заявку<br>Мы свяжемся с Вами"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full tablet:min-w-[500px] tablet:max-w-[40%] text-lg text-black mt-4"
            autoComplete="false"
            noValidate
          >
            <input
              className="py-4 w-full border-b border-home-coziness bg-clean-space placeholder:text-black"
              placeholder="Ваше имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="false"
              required
            />
            <input
              className="py-4 w-full border-b border-home-coziness bg-clean-space placeholder:text-black"
              placeholder="Ваш номер телефона"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="false"
              required
            />

            <button
              type="submit"
              className="p-6 rounded-full bg-home-coziness uppercase w-full text-2xl text-white mt-12"
              disabled={isSending}
            >
              {isSending ? "Отправка..." : "Отправить"}
            </button>
          </form>
          {successMessage && (
            <div className="text-home-coziness text-sm mt-4">
              {successMessage}
            </div>
          )}
          <div className="text-black text-start w-full mb-4">
            Нажимая на кнопку, вы соглашаетесь <br />с условиями{" "}
            <span className="text-home-coziness">
              Политики конфидициальности
            </span>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default ContactSection;
