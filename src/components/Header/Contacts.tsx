import Socials from "@/components/Socials";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="flex flex-col tablet:flex-row items-center tablet:mt-0 gap-4">
      <Socials />
      <div className="flex flex-col smallLaptop:flex-row mt-2 tablet:mt-0 gap-4 tablet:gap-2 tablet:hidden desktop:flex">
        <Link
          href="tel:+79251437952"
          className="w-full font-medium text-center py-2 px-4 text-base text-nowrap"
        >
          +7 (925) 143-79-52
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
