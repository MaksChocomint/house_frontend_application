"use client";
import { useState } from "react";
import Contacts from "./Contacts";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center px-4 tablet:px-16 py-2 bg-white w-full fixed top-0 z-[200]">
      {/* Логотип */}
      <Logo />

      {/* Кнопка для открытия/закрытия меню на мобильных устройствах */}
      <button
        className={`tablet:hidden text-2xl z-50 focus:outline-none ${
          menuOpen ? "text-white" : "text-black"
        }`}
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Навигация и контакты для больших экранов */}
      <div className="hidden tablet:flex items-center gap-16">
        <Navbar />
        <Contacts />
      </div>

      {/* Мобильное меню */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-90 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 tablet:hidden z-40`}
      >
        {/* Меню и контакты */}
        <div className="flex flex-col h-full justify-center items-center text-white text-xl gap-8">
          <Navbar />
          <Contacts />
        </div>
      </div>
    </header>
  );
};

export default Header;
