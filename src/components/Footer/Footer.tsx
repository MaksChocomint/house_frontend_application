import Link from "next/link";
import Container from "../Container";
import Logo from "../Header/Logo";
import Socials from "../Socials";
import YandexMap from "./Map";

const Footer = () => {
  return (
    <div className="w-full smallTablet:mt-0 mt-48">
      <div className="w-full h-[60vh] relative justify-center items-center">
        <YandexMap />
        <div className="py-8 p-8 tablet:p-10 bg-clean-space border-t-2 w-full smallTablet:w-auto justify-center border-home-coziness smallTablet:border-t-0 flex flex-col items-center smallTablet:items-start smallTablet:flex-nowrap smallTablet:justify-between flex-wrap gap-4 absolute top-0 smallTablet:top-1/2 -translate-y-1/2 tablet:left-56">
          <h1 className="text-3xl uppercase font-medium">Flatpoint</h1>
          <div className="tablet:text-xl">
            +7 (980) 697 73 81
            <br />
            info@flatpoint.ru
          </div>
          <div className="w-[255px] text-base text-center smallTablet:text-start">
            46 км от МКАД <br /> городской округ Истра, <br /> деревня Якунино,
            <br />
            центральная улица, 377
          </div>
          <Socials />
        </div>
      </div>

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
    </div>
  );
};

export default Footer;
