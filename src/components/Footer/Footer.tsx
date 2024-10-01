import Contacts from "./Contacts";
import YandexMap from "./Map";

const Footer = () => {
  return (
    <div className="w-full mt-32">
      <div className="w-full flex flex-col smallLaptop:flex-row justify-center items-center h-screen">
        <YandexMap />
        <Contacts />
      </div>

      <div className="flex justify-center items-center w-full h-16 text-xs text-center text-gray-200 bg-black">
        <div className="p-1 border-yellow-500 border-b">
          © 2024 FlatPoint. Все права защищены.
        </div>
      </div>
    </div>
  );
};

export default Footer;
