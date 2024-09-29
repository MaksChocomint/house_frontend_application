import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaVk } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex gap-2 justify-center">
      <Link
        href="https://api.whatsapp.com/send/?phone=79251437952"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 transition-colors"
      >
        <RiWhatsappFill className="text-[40px] tablet:text-[28px]" />
      </Link>
      <Link
        href="https://vk.com/posytochnodom1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 transition-colors"
      >
        <FaVk className="text-[40px] tablet:text-[28px]" />
      </Link>
      <Link
        href="https://www.instagram.com/invites/contact/?i=1fc31qwirhj3u&utm_content=sxjyxvl"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 transition-colors"
      >
        <AiFillInstagram className="text-[42px] tablet:text-[30px]" />
      </Link>
    </div>
  );
};

export default Socials;
