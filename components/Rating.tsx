import { BsStarHalf } from "react-icons/bs";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import React from "react";

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  size: number;
  color: string;
  rating: number;
}

const Rating: FC<RatingProps> = ({ size, color, className, rating }) => {
  const roundedRating = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const renderStar = (index: number): JSX.Element => {
    if (index < roundedRating) {
      return <AiFillStar color={color} size={size} />;
    } else if (index === roundedRating && hasHalfStar) {
      return <BsStarHalf color={color} size={size} />;
    } else {
      return <AiOutlineStar color={color} size={size} />;
    }
  };

  return (
    <div className={clsx("flex justify-center items-center", className)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <React.Fragment key={index}>{renderStar(index)}</React.Fragment>
      ))}
    </div>
  );
};

export default Rating;
