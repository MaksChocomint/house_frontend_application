import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "@/utils/useWindowSize";

const menuItems = [
  {
    title: "О компании",
    link: "/",
    subItems: [
      { name: "ГринЛаундж", link: "/about/green-lounge" },
      { name: "Москва", link: "/about/moscow" },
    ],
  },
  {
    title: "Проживание",
    link: "/accommodation",
    subItems: [
      { name: "Дома", link: "/accommodation/houses" },
      { name: "Квартиры", link: "/accommodation/apartments" },
    ],
  },
  {
    title: "Управляющая компания",
    subItems: [
      { name: "Услуги", link: "/management-company/services" },
      { name: "Объекты", link: "/management-company/objects" },
      { name: "Команда", link: "/management-company/team" },
      { name: "Вакансии", link: "/management-company/vacancies" },
      { name: "Контакты", link: "/management-company/contacts" },
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

  return (
    <nav className="flex flex-col tablet:flex-wrap tablet:flex-row gap-6 tablet:gap-x-8 tablet:gap-y-0 items-center justify-center text-lg tablet:text-base font-medium">
      {menuItems.map((item) => (
        <motion.div
          key={item.title}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={
              !item.link || (isMobile && !(activeMenu === item.title))
                ? "#"
                : item.link
            }
          >
            <button
              className="flex items-center gap-2 hover:text-yellow-500 transition-colors uppercase"
              onClick={() => handleMobileClick(item)}
            >
              <span>{item.title}</span>
            </button>
          </Link>

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
                item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.link}
                    className="inline-block whitespace-nowrap font-medium tablet:text-[15px] text-center p-2 hover:text-yellow-500"
                  >
                    {subItem.name}
                  </Link>
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
                    <Link
                      key={subItem.name}
                      href={subItem.link}
                      className="inline-block whitespace-nowrap font-medium tablet:text-[15px] text-center p-2 hover:text-yellow-500"
                    >
                      {subItem.name}
                    </Link>
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
