"use client";
import { useState, useEffect } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";

const Booking = () => {
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState("1");

  useEffect(() => {
    if (checkIn) {
      const tomorrow = new Date(checkIn);
      tomorrow.setDate(checkIn.getDate() + 1);
      setCheckOut(tomorrow);
    }
  }, [checkIn]);

  const handleBooking = () => {
    alert(
      `Бронирование: заезд ${checkIn?.toLocaleDateString()}, выезд ${checkOut?.toLocaleDateString()}, количество гостей: ${guests}`
    );
  };

  registerLocale("ru", ru);

  return (
    <div className="bg-black font-semibold bg-opacity-60 text-white text-sm w-full py-6 px-4 tablet:px-16 shadow-lg flex flex-col tablet:flex-row gap-6 items-center justify-center absolute bottom-0">
      <div className="flex flex-col gap-1 text-center tablet:text-left">
        <h3 className="text-xl font-semibold">Бронирование номеров</h3>
        <p className="text-xs text-gray-300 font-semibold">
          Гарантированное заселение
        </p>
      </div>

      {/* Заезд */}
      <div className="relative w-full tablet:w-48">
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          dateFormat="yyyy-MM-dd"
          className="w-full border rounded-xl pr-10 pl-3 pt-4 text-black cursor-pointer"
          minDate={new Date()} // Disable past dates
          locale="ru"
        />
        <label
          htmlFor="check-in"
          className="absolute left-4 top-0.5 text-xs text-gray-400"
        >
          Заезд
        </label>
        <FaCalendarAlt
          size={16}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 pointer-events-none"
        />
      </div>

      {/* Выезд */}
      <div className="relative w-full tablet:w-48">
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          dateFormat="yyyy-MM-dd"
          className="w-full border rounded-xl pr-10 pl-3 pt-4 text-black cursor-pointer"
          minDate={checkIn} // Disable dates before check-in
          locale="ru"
        />
        <label
          htmlFor="check-out"
          className="absolute left-4 top-0.5 text-xs text-gray-400"
        >
          Выезд
        </label>
        <FaCalendarAlt
          size={16}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 pointer-events-none"
        />
      </div>

      {/* Количество гостей */}
      <div className="relative w-full tablet:w-48">
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full border rounded-xl pr-10 pl-3 pt-4 text-black cursor-pointer appearance-none"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9+">Более 9</option>
        </select>
        <label
          htmlFor="guests"
          className="absolute left-4 top-0.5 text-xs text-gray-400"
        >
          Гости
        </label>
        <FaUser
          size={16}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 pointer-events-none"
        />
      </div>

      {/* Кнопка забронировать */}
      <button
        onClick={handleBooking}
        className="bg-yellow-500 text-white p-2 rounded-3xl px-8 font-semibold"
      >
        Забронировать
      </button>
    </div>
  );
};

export default Booking;
