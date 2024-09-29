import Background from "./Background";
import Booking from "./Booking";
import Info from "./Info";

interface IntroProps {
  imageUrl: string;
  infoTitle: string;
  infoDescription: string;
}

const Intro: React.FC<IntroProps> = ({
  imageUrl,
  infoTitle,
  infoDescription,
}) => {
  return (
    <Background imageUrl={imageUrl}>
      <div className="flex flex-col items-center h-full">
        <Info title={infoTitle} description={infoDescription} />
        <Booking />
      </div>
    </Background>
  );
};

export default Intro;
