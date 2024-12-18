import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { IoLogoVk } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-2">
      <Link
        href="https://api.whatsapp.com/send/?phone=79251437952"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-[6px] bg-black text-human-detail"
      >
        <FaWhatsapp className="text-[32px] tablet:text-[20px]" />
      </Link>
      <Link
        href="https://www.instagram.com/invites/contact/?i=1fc31qwirhj3u&utm_content=sxjyxvl"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-[6px] bg-black text-human-detail"
      >
        <SiInstagram className="text-[32px] tablet:text-[20px]" />
      </Link>
      <Link
        href="https://vk.com/posytochnodom1"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-[6px] bg-black text-human-detail"
      >
        <IoLogoVk className="text-[32px] tablet:text-[20px]" />
      </Link>
    </div>
  );
};

export default Socials;
