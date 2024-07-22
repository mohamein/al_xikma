import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
interface CardProps {
  title: string;
  Icon: IconType;
  length: number;
  link: string;
  className: string;
}
const Card: React.FC<CardProps> = ({
  title,
  Icon,
  length,
  link,
  className,
}) => {
  return (
    <div
      className={`${className} w-[300px] h-[150px] rounded-md shadow-sm border flex items-center px-4 justify-between`}
    >
      {<Icon />}

      <div className="flex flex-col items-start space-y-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <h2 className="text-4xl text-white font-bold">{length.toString()}</h2>
      </div>
    </div>
  );
};

export default Card;
