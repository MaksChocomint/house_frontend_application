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
      {darker && <div className="absolute inset-0 bg-black opacity-15 z-10" />}
      <Background imageUrl={imageUrl}>
        <div className="flex flex-col items-center w-full h-full justify-between gap-4tablet:gap-8 laptop:gap-10 overflow-y-auto">
          <Info title={infoTitle} description={infoDescription} />
          <Booking />
        </div>
      </Background>
    </div>
  );
};

export default Intro;
