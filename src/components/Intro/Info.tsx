interface InfoProps {
  title: string;
  description: string;
}

const Info: React.FC<InfoProps> = ({ title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto flex flex-col gap-8 mt-52">
      <h2 className="text-6xl tracking-wider font-semibold mb-4">{title}</h2>
      <p className="text-xl text-gray-200">{description}</p>
    </div>
  );
};

export default Info;
