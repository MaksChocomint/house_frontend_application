import Background from "../Background";
import Booking from "./Booking";
import Info from "./Info";

interface IntroProps {
  imageUrl: string;
  infoTitle: string;
  infoDescription: string;
  hasFilmtape?: boolean;
  isAboutPage?: boolean;
  hasButton: boolean;
}

const Intro: React.FC<IntroProps> = ({
  imageUrl,
  infoTitle,
  infoDescription,
  hasButton,
  hasFilmtape,
  isAboutPage,
}) => {
  return (
    <div>
      <Background imageUrl={imageUrl}>
        <div className="flex flex-col items-center w-full h-full justify-between gap-4 tablet:gap-8 laptop:gap-10 relative z-[100]">
          <Info
            hasButton={hasButton}
            title={infoTitle}
            description={infoDescription}
          />
        </div>
        {hasFilmtape && (
          <img
            src="/main/filmtape.png"
            alt="Кинопленка"
            className="absolute hidden largeTablet:block top-[15%] smallLaptop:top-[12%] right-4 smallLaptop:right-36 tablet:w-[300px] laptop:w-[350px] desktop:w-[400px]"
          />
        )}
        {isAboutPage && (
          <img
            src="/about/background.png"
            alt="Flatpoint"
            className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 desktop:w-[800px]"
          />
        )}
      </Background>
      <Booking />
    </div>
  );
};

export default Intro;
