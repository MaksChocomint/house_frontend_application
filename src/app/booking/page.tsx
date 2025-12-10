import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link"; // 🛑 Импортируем компонент Link для навигации
import BookingEngine from "@/components/BookingEngine";

export default function BookingPage() {
  return (
    <div
      style={{ backgroundColor: "#e2dbc9", minHeight: "100vh" }}
      className="pt-10 pb-20"
    >
      <Container styles="flex flex-col gap-8">
        {/* 🛑 НОВЫЙ БЛОК: Кнопка "Вернуться на главную" */}
        <div className="w-full">
          <Link
            href="/" // Ссылка на главную страницу
            className="inline-flex items-center text-sm font-medium text-[#9b7a4e] hover:text-[#856a43] transition-colors group"
          >
            {/* Иконка стрелки для визуального акцента */}
            <svg
              className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Вернуться на главную
          </Link>
        </div>

        {/* 1. Блок с изображением, которое служит шапкой страницы */}
        <div className="relative w-full h-[200px] smallLaptop:h-[300px] shadow-lg overflow-hidden rounded-xl">
          <Image
            src="/contact.jpg"
            alt="Интерьер апартаментов"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "50% 70%" }}
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
          {/* Полупрозрачный оверлей */}
          {/* Заголовок, расположенный поверх изображения */}
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl tablet:text-6xl font-medium uppercase text-white tracking-widest z-10">
            Онлайн Бронирование
          </h1>
        </div>

        {/* 2. Пояснительный текст или призыв к действию */}
        <div className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-4">
          Выберите даты заезда и выезда, чтобы увидеть актуальные предложения и
          лучшие цены на наши дома.
        </div>

        {/* 3. Блок с модулем Bnovo. */}
        <div className="bg-white p-4 smallTablet:p-8 rounded-xl shadow-2xl border border-gray-100">
          <BookingEngine />
        </div>

        {/* Дополнительный блок для информации (опционально) */}
        <div className="text-center text-sm text-gray-500 mt-4">
          Процесс бронирования полностью безопасен и занимает всего несколько
          минут.
        </div>
      </Container>
    </div>
  );
}
