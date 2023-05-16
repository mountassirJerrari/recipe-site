import clsx from "clsx";
import { FC ,HTMLAttributes } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

interface RatingeuProps extends HTMLAttributes<HTMLDivElement> {
    size: number;
    color: string;
}

const Ratingeu: FC<RatingeuProps> = ({numstars, size, color , className }) => {
    return (
        <div className={clsx(" flex  justify-center items-center  ",className)}>
            {[...Array(numStars)].map((_, index) => (
               <AiFillStar key={index} color={color}  size={size} />
            ))}

            <AiOutlineStar color={color} size={size} />
        </div>
    );
}
  
export default Ratingeu;
