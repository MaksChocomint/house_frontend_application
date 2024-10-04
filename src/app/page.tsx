import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Main from "@/components/Home/Main/Main";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <Header />
          <Intro
            imageUrl="/main/background.jpg"
            infoTitle="Добро пожаловать в FlatPoint"
            infoDescription="Мы создаем атмосферу спокойствия и незабываемых впечатлений!"
            darker={false}
          />
        </div>
      </div>
      <Main />
      <Footer />
      <ContactButton />
    </div>
  );
};

export default Home;
