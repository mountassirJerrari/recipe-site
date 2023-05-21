import Rating from "@/components/Rating";
import React from "react";

export type DescriptionProps = {
  description: {
    desc?: string;
    rating: number;
  };
};

function Description({ description }: DescriptionProps) {
  const { desc, rating } = description;
  return (
    <div className=" flex flex-col items-start justify-start">
        <div className="text-sm font-light mb-5">{desc}</div>
        <Rating rating={rating} color="FF7E5A" size={20} />
   </div>
  );
}

export default Description;