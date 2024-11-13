"use client";

import { useRouter } from "next/navigation"; // Импортируем useRouter
import { useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "@/utils/useWindowSize";

const menuItems = [
  {
    title: "О компании",
    link: "/",
    subItems: [],
  },
  {
    title: "Проживание",
    link: "",
    subItems: [
      { name: "Квартиры и апартаменты", link: "/accommodation/moscow" },
      { name: "Гостевые дома", link: "/accommodation/green-lounge" },
    ],
  },
  {
    title: "Управляющая компания",
    subItems: [
      { name: "Услуги", link: "/management/services" },
      // { name: "Объекты", link: "/management/objects" },
      // { name: "Команда", link: "/management/team" },
      { name: "Вакансии", link: "/management/vacancies" },
    ],
  },
  {
    title: "Отзывы",
    link: "/feedback",
    subItems: [],
  },
];

const Navbar = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 860;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter(); // Используем роутер

  const handleMouseEnter = (menu: string) => {
    if (!isMobile) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveMenu(null);
    }
  };

  const handleMobileClick = (item: { title: string }) => {
    if (isMobile) {
      if (activeMenu === item.title) {
        setActiveMenu(null);
      } else {
        setActiveMenu(item.title);
      }
    }
  };

  const handleLinkClick = (link: string) => {
    if (link !== "") {
      router.push(link); // Переходим по нужному пути
    }
  };

  return (
    <nav className="flex flex-col tablet:flex-wrap tablet:flex-row gap-6 tablet:gap-x-8 tablet:gap-y-0 items-center justify-center text-lg tablet:text-base font-medium">
      {menuItems.map((item) => (
        <motion.div
          key={item.title}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="flex items-center text-center mx-auto gap-2 tablet:hover:text-yellow-500 transition-colors uppercase"
            onClick={() => {
              handleLinkClick(item.link || "");
              handleMobileClick(item);
            }}
          >
            <span>{item.title}</span>
          </button>

          {/* Анимация для десктопа */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{
                opacity: activeMenu === item.title ? 1 : 0,
                translateY: activeMenu === item.title ? 0 : -10,
              }}
              transition={{ duration: 0.2 }}
              className={
                item.subItems.length > 0
                  ? `w-full flex flex-col tablet:block rounded-lg pt-3 z-50 text-center bg-white absolute shadow-md`
                  : ""
              }
            >
              {item.subItems.length > 0 &&
                item.subItems.map((subItem, index) => (
                  <div key={subItem.name} className="relative">
                    <button
                      onClick={() => handleLinkClick(subItem.link)}
                      className="inline-block font-medium tablet:text-[15px] text-center p-2 tablet:hover:text-yellow-500"
                    >
                      {subItem.name}
                    </button>
                    {index < item.subItems.length - 1 && (
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                    )}
                  </div>
                ))}
            </motion.div>
          )}

          {/* Анимация для мобильных устройств */}
          {isMobile && (
            <div
              className={`w-full flex flex-col tablet:block rounded-lg pt-3 z-50 text-center ${
                !isMobile && "bg-white absolute shadow-md"
              }`}
            >
              {item.subItems.length > 0 && activeMenu === item.title && (
                <motion.div
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex flex-col items-center"
                >
                  {item.subItems.map((subItem) => (
                    <div key={subItem.name} className="relative">
                      <button
                        onClick={() => handleLinkClick(subItem.link)}
                        className="inline-block font-medium tablet:text-[15px] text-center p-2 tablet:hover:text-yellow-500"
                      >
                        {subItem.name}
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar;
