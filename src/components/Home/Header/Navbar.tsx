import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "О компании",
    link: "/", // Link added here
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

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

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
          whileHover={"hover"}
          initial={"initial"}
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

          {/* Custom dropdown menu */}
          <motion.div
            variants={{
              hover: { opacity: 1, translateY: 0 }, // Контент появляется и поднимается при наведении
              initial: { opacity: 0, translateY: -10 }, // Изначально скрыт и немного сдвинут вниз
            }}
            transition={{ duration: 0.2 }}
          >
            {item.subItems.length > 0 && activeMenu === item.title && (
              <div
                className={`w-full flex flex-col tablet:block rounded-lg pt-3 z-50 text-center ${
                  !isMobile && "bg-white absolute shadow-md"
                }`}
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
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar;
