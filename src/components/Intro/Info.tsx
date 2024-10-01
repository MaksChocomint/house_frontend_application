interface InfoProps {
  title: string;
  description: string;
}

const Info: React.FC<InfoProps> = ({ title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mt-28 tablet:mt-40 laptop:mt-52 px-4">
      <h2 className="text-4xl tablet:text-5xl laptop:text-6xl tracking-wider font-semibold mb-2 phone:mb-4">
        {title}
      </h2>
      <p className="text-lg tablet:text-2xl text-gray-200 hidden smallTablet:block">
        {description}
      </p>
    </div>
  );
};

export default Info;
