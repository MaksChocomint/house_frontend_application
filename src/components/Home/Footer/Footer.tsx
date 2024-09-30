const Footer = () => {
  return (
    <div className="mt-32 w-full flex justify-center items-center h-screen">
      <div className="w-full h-full"></div>
      <div className="w-full h-full py-64 px-20 bg-black bg-opacity-80 text-white flex flex-col gap-10 items-start">
        <h1 className="text-2xl tracking-wide font-semibold">Наши контакты</h1>
        <div className="text-xl font-light">
          <div>+7 (925) 143-79-52</div>
          <div>flatpoint@club-moscow.ru</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
