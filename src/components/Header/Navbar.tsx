"use client";

import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "О нас",
    link: "/about",
  },
  {
    title: "Гостевые дома",
    link: "/accommodation/green-lounge",
  },
  {
    title: "Контакты",
    link: "/contacts",
  },
];

const Navbar = () => {
  const router = useRouter();

  const handleLinkClick = (link: string) => {
    if (link !== "") {
      router.push(link);
    }
  };

  return (
    <nav className="flex flex-col tablet:flex-wrap tablet:flex-row gap-6 tablet:gap-x-8 tablet:gap-y-0 items-center justify-center text-base w-full">
      {menuItems.map((item) => (
        <div
          key={item.title}
          className="relative w-full tablet:w-auto flex justify-center"
        >
          <button
            className="flex items-center justify-center text-center gap-2 tablet:hover:text-home-coziness transition-colors uppercase w-full tablet:w-auto py-2 tablet:py-0"
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
