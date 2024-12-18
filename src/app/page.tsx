import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Main from "@/components/Home/Main/Main";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <div className="w-full bg-clean-space">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Header />
          <Intro
            imageUrl="/main/background.jpg"
            infoTitle="Раскрась момент"
            infoDescription="В эстетичном доме в Подмосковье<br>или в комфортабельных апартаментах в Москве"
            hasFilmtape={true}
            hasButton={true}
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
