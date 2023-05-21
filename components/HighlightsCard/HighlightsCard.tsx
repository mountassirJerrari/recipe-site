import { Title } from "./Title";
import { Badge } from "../Badge";
import { Description } from "./Description";
import React, { Children, FC, HTMLAttributes } from "react";
import Rating from "../Rating";
import Image from "next/image";


type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  imageSrc: string;
  category: string;
  badgeColor: string;
  rating: number;
  description: string;
};

function HighlightsCard({

  title,
  children,
  imageSrc,
  category,
  rating,
  description,
  badgeColor = "blue",
  ...props }: Props) {
  return (
    <div
      {...props}
      className={`hover:-translate-y-1 transition-all overflow-hidden m-4 flex gap-3 justify-stretch items-stretch ${props.className}`}>

      <div className="relative ">

      <div className="w-full h-full rounded-xl overflow-hidden">
                    <img src={imageSrc} className="object-cover w-full h-full" alt="" />
                </div>
        {category && <div className="absolute top-3 z-10 flex justify-between px-3 w-full">
          <Badge color={badgeColor}>{category}</Badge></div>}
      </div>
      <div className=" flex flex-col items-start justify-start">
        <div className="font-bold text-3xl mb-5">{title}</div>
        <div className="text-sm font-light mb-5">{description}</div>
        <Rating rating={rating} color="FF7E5A" size={20} />
      </div>
    </div>
  );
}



export default HighlightsCard;





