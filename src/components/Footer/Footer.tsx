import Link from "next/link";
import Container from "../Container";
import Logo from "../Header/Logo";
import Socials from "../Socials";
import YandexMap from "./Map";

const Footer = () => {
  return (
    <Container styles="flex w-full bg-human-detail py-24 h-[380px] font-medium">
      <div className="h-full w-full flex flex-col gap-16 smallTablet:flex-row justify-between">
        <div className="flex flex-col justify-between gap-4">
          <Logo />
          <div className="font-medium">
            2024. Все права защищены
            <br />
            <span className="underline">Политика конфидициальности</span>
          </div>
        </div>
        <div className="flex-col h-full justify-between font-medium uppercase tablet:mr-32 hidden tablet:flex">
          <Link href="/about">О нас</Link>
          <Link href="/accommodation/green-lounge">Гостевые дома</Link>
          <Link href="/accommodation/moscow">Апартаменты</Link>
          <Link href="/contacts">Контакты</Link>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div>+7 (495) 125 25 27</div>
          <Socials />
          <div className="flex gap-4">
            <button className="underline underline-offset-4">RU</button>
            <button className="">ENG</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
