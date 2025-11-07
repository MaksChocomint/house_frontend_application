import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Main from "@/components/Home/Main/Main";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";
import MapContainer from "@/components/Footer/MapContainer";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Header />
          <Intro
            imageUrl="/main/background.jpeg"
            infoTitle="Раскрась момент"
            infoDescription="В эстетичном доме в Подмосковье"
            hasFilmtape={true}
            hasButton={true}
          />
        </div>
      </div>
      <Main />
      <MapContainer />
      <Footer />
      <ContactButton />
    </div>
  );
};

export default Home;
