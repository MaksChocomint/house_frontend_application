import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex mb-2 tablet:mb-0 cursor-pointer">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={160}
          height={160}
          className="tablet:w-[160px] "
        />
      </Link>
    </div>
  );
};

export default Logo;
