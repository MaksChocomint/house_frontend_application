import Socials from "@/components/Socials";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="flex flex-col tablet:flex-row items-center tablet:mt-0 gap-4">
      <Socials />
      <div className="flex flex-col smallLaptop:flex-row mt-2 tablet:mt-0 gap-4 tablet:gap-2 tablet:hidden laptop:flex">
        <Link
          href="tel:+74951252527"
          className="w-full font-medium text-center py-2 px-4 text-base"
        >
          +7 (495) 125-25-27
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
