"use client";

import { useRouter } from "next/navigation"; // Импортируем useRouter

const menuItems = [
  {
    title: "О нас",
    link: "/",
  },
  {
    title: "Гостевые дома",
    link: "/accommodation/green-lounge",
  },
  {
    title: "Апартаменты",
    link: "/accommodation/moscow",
  },
  {
    title: "Контакты",
    link: "/contacts",
  },
];

const Navbar = () => {
  const router = useRouter(); // Используем роутер

  const handleLinkClick = (link: string) => {
    if (link !== "") {
      router.push(link); // Переходим по нужному пути
    }
  };

  return (
    <nav className="flex flex-col tablet:flex-wrap tablet:flex-row gap-6 tablet:gap-x-8 tablet:gap-y-0 items-center justify-center text-base">
      {menuItems.map((item) => (
        <div key={item.title} className="relative">
          <button
            className="flex items-center text-center mx-auto gap-2 tablet:hover:text-home-coziness transition-colors uppercase"
            onClick={() => handleLinkClick(item.link)}
          >
            <span>{item.title}</span>
          </button>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
