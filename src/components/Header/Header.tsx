"use client";
import { useState } from "react";
import Contacts from "./Contacts";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../Container";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="">
      {/* Логотип слева */}
      <Container styles="flex justify-between items-center py-4 w-full fixed top-0 z-[200] bg-human-detail">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Кнопка для открытия/закрытия меню на мобильных устройствах */}
        <button
          className={`tablet:hidden text-2xl z-50 focus:outline-none ${
            menuOpen ? "text-white" : "text-black"
          }`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Навигация по центру для больших экранов */}
        <div className="hidden tablet:flex flex-grow justify-center">
          <Navbar />
        </div>

        {/* Контакты справа для больших экранов */}
        <div className="hidden tablet:flex items-center">
          <Contacts />
        </div>

        {/* Мобильное меню */}
        <div
          className={`fixed top-0 right-0 h-full overflow-y-auto w-full bg-black flex flex-col items-center bg-opacity-90 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 tablet:hidden z-40`}
        >
          <div className="h-min-screen">
            <div className="flex flex-col h-full py-8 justify-center items-center text-white text-base gap-4">
              <Navbar />
              <Contacts />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
