import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="py-8 px-4 rounded-lg shadow-md flex flex-col gap-4 items-center justify-between text-center bg-white">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="mb-4 text-4xl text-yellow-500">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 font-light">{description}</p>
      </div>
      <div className="h-1 w-1/3 bg-yellow-500 mt-10"></div>
    </div>
  );
};

export default ServiceCard;
