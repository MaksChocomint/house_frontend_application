import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex justify-center mb-2 tablet:mb-0 cursor-pointer">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="tablet:w-[120px] "
        />
      </Link>
    </div>
  );
};

export default Logo;
