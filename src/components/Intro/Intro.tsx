import Background from "../Background";
import Booking from "./Booking";
import Info from "./Info";

interface IntroProps {
  imageUrl: string;
  infoTitle: string;
  infoDescription: string;
  darker: boolean;
}

const Intro: React.FC<IntroProps> = ({
  imageUrl,
  infoTitle,
  infoDescription,
  darker,
}) => {
  return (
    <div>
      {darker && <div className="absolute inset-0 bg-black opacity-25 z-10" />}
      <Background imageUrl={imageUrl}>
        <div className="flex flex-col items-center w-full h-full justify-between phone:gap-6 tablet:gap-8 laptop:gap-10">
          <Info title={infoTitle} description={infoDescription} />
          <Booking />
        </div>
      </Background>
    </div>
  );
};

export default Intro;
