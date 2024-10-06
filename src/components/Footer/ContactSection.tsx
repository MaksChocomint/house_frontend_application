import React, { useState } from "react";
import Background from "@/components/Background";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
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
          message: formData.message,
        },
        "KHUXT0O9xljwixgMC" // Замените на ваш Public Key
      );

      // Проверяем статус ответа
      if (result.status === 200) {
        setSuccessMessage("Сообщение успешно отправлено!");
        setFormData({ name: "", phone: "", message: "" });
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
    <div className="mt-32 w-full h-screen text-white">
      <Background imageUrl="/contact-section.jpg">
        <div className="flex flex-col items-center justify-center gap-8 tablet:gap-10 w-full">
          <h1 className="font-semibold tracking-wide text-3xl tablet:text-4xl drop-shadow-lg">
            Остались вопросы?
          </h1>
          <p className="font-light drop-shadow-lg">
            Мы с удовольствием на них ответим!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 px-16 w-full tablet:min-w-[500px] tablet:max-w-[40%] text-sm font-medium text-black"
            noValidate
          >
            <input
              className="p-4 w-full rounded-lg placeholder:font-light shadow-lg shadow-black/40"
              placeholder="Ваше имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="p-4 w-full rounded-lg placeholder:font-light shadow-lg shadow-black/40"
              placeholder="Телефон"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="p-4 w-full rounded-lg min-h-24 resize-none overflow-x-hidden placeholder:font-light shadow-lg shadow-black/40"
              placeholder="Напишите Ваш вопрос"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="p-4 w-full rounded-xl bg-yellow-500 font-medium text-white mt-2"
              disabled={isSending}
            >
              {isSending ? "Отправка..." : "Перезвоните мне"}
            </button>
          </form>
          {successMessage && (
            <div className="text-gray-200 font-light text-sm mt-4">
              {successMessage}
            </div>
          )}
          <div className="text-gray-200 font-light text-xs text-center px-10">{`Нажимая на кнопку "Перезвоните мне", Вы соглашаетесь с обработкой персональных данных`}</div>
        </div>
      </Background>
    </div>
  );
};

export default ContactSection;
