import Socials from "@/components/Socials";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="flex flex-col tablet:flex-row items-center tablet:mt-0 gap-4">
      <Socials />
      <div className="flex flex-col smallLaptop:flex-row mt-2 tablet:mt-0 gap-4 tablet:gap-2 tablet:hidden laptop:flex">
        <Link
          href="tel:+74951252527"
          className="w-full text-center py-2 px-4 font-semibold text-base tablet:text-sm border-[3px] rounded-2xl border-yellow-500 smallLaptop:w-[175px]"
        >
          +7 (495) 125-25-27
        </Link>

        <a
          href="?tl-booking-open=true"
          className="w-full py-2 text-center px-4 font-semibold text-base tablet-text-sm rounded-2xl border-[3px] border-yellow-500 text-white bg-yellow-500 smallLaptop:w-[175px]"
        >
          Забронировать
        </a>
      </div>
    </div>
  );
};

export default Contacts;
