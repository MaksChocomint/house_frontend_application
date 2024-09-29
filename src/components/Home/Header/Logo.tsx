import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center mb-2 tablet:mb-0">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="tablet:w-[120px] "
      />
    </div>
  );
};

export default Logo;
