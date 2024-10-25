import React from "react";

interface InfoProps {
  title: string;
  description: string;
}

const Info: React.FC<InfoProps> = ({ title, description }) => {
  // List of Russian prepositions (you can expand this list as needed)
  const prepositions = [
    "в",
    "во",
    "на",
    "с",
    "за",
    "к",
    "по",
    "о",
    "об",
    "из",
    "под",
    "у",
    "при",
    "от",
  ];

  // Function to split the title based on prepositions and insert line breaks
  const formatTitle = (title: string) => {
    const words = title.split(" ");
    return words.map((word, index) => {
      if (prepositions.includes(word.toLowerCase()) && index !== 0) {
        return (
          <React.Fragment key={index}>
            <br />
            {word}
          </React.Fragment>
        );
      }
      return ` ${word}`;
    });
  };

  return (
    <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mt-48 tablet:mt-40 laptop:mt-52 px-4">
      <h2 className="text-4xl tablet:text-5xl laptop:text-6xl tracking-wider font-semibold mb-2 phone:mb-4">
        {formatTitle(title)}
      </h2>
      <p className="text-lg tablet:text-2xl text-gray-200 hidden smallTablet:block">
        {description}
      </p>
    </div>
  );
};

export default Info;
