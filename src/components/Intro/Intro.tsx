import Background from "../Background";
import Booking from "./Booking";
import Info from "./Info";
import Image from "next/image";

interface IntroProps {
  imageUrl: string;
  infoTitle: string;
  infoDescription: string;
  hasFilmtape?: boolean;
  hasButton: boolean;
}

const Intro: React.FC<IntroProps> = ({
  imageUrl,
  infoTitle,
  infoDescription,
  hasButton,
  hasFilmtape,
}) => {
  return (
    <div>
      <Background imageUrl={imageUrl}>
        <div className="flex flex-col items-center w-full h-full justify-between gap-4 tablet:gap-8 laptop:gap-10">
          <Info
            hasButton={hasButton}
            title={infoTitle}
            description={infoDescription}
          />
        </div>
        {hasFilmtape && (
          <Image
            src="/main/filmtape.png"
            alt="Кинопленка"
            width={400}
            height={800}
            className="absolute hidden largeTablet:block  top-[15%] smallLaptop:top-[12%] right-4 smallLaptop:right-36 tablet:w-[300px] laptop:w-[350px] desktop:w-[400px]"
          />
        )}
      </Background>
      <Booking />
    </div>
  );
};

export default Intro;
