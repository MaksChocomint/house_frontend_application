import Link from "next/link";
import Container from "../Container";
import Logo from "../Header/Logo";
import Socials from "../Socials";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container styles="flex w-full bg-human-detail py-24 h-[400px] font-medium">
      <div className="h-full w-full flex flex-col gap-16 smallTablet:flex-row justify-between">
        <div className="flex flex-col justify-between gap-4">
          <Logo />

          <Link
            href="https://t.me/maksim_blackholchik"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-black w-full flex items-center gap-2"
          >
            <div>Разработчик сайта</div>
            <FaTelegram className="text-[35px] tablet:text-[25px]" />
          </Link>

          <div className="font-medium">
            2025. Все права защищены
            <br />
            <Link
              href="/privacy-policy"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
        <div className="flex-col h-full justify-between font-medium uppercase tablet:mr-32 hidden tablet:flex">
          <Link href="/about">О нас</Link>
          <Link href="/accommodation/green-lounge">Гостевые дома</Link>
          {/* <Link href="/accommodation/moscow">Апартаменты</Link> */}
          <Link href="/contacts">Контакты</Link>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <Link href="tel:+74951252527">+7 (925) 143-79-52</Link>
          <Socials />
          {/* <div className="flex gap-4">
            <button className="underline underline-offset-4">RU</button>
            <button className="">ENG</button>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
