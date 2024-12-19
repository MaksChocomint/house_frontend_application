import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Main from "@/components/About/Main";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <div className="w-full bg-clean-space">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Header />
          <Intro
            imageUrl="/about/background.jpg"
            infoTitle="О нас"
            infoDescription=""
            hasFilmtape={false}
            hasButton={false}
          />
        </div>
      </div>
      <Main />

      <Footer />
      <ContactButton />
    </div>
  );
};

export default About;
