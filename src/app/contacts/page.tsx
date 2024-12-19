import Header from "@/components/Header/Header";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";
import MapContainer from "@/components/Footer/MapContainer";
import Booking from "@/components/Intro/Booking";

const Contacts = () => {
  return (
    <div className="w-full bg-clean-space">
      <Header />
      <MapContainer largeMap={true} />
      <Booking />
      <Footer />
      <ContactButton />
    </div>
  );
};

export default Contacts;
