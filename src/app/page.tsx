import Header from "@/components/Home/Header/Header";
import Intro from "@/components/Intro/Intro";
import Main from "@/components/Home/Main/Main";
import ContactButton from "@/components/ContactButton";

const Home = () => {
  return (
    <div className="w-full">
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <Header />
          <Intro
            imageUrl="/home-background.jpg"
            infoTitle="Добро пожаловать в FlatPoint"
            infoDescription="Мы создаем атмосферу спокойствия и незабываемых впечатлений!"
          />
        </div>
      </div>
      <Main />
      <div className="h-screen"></div>
      <ContactButton />
    </div>
  );
};

export default Home;
