
import clsx from "clsx";
import { FC ,HTMLAttributes } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

interface RatingProps extends HTMLAttributes<HTMLDivElement> {

    size: number;
    color: string;
    
}

const Rating: FC<RatingProps> = ({ size, color , className }) => {
    return (
        <div className={clsx(" flex  justify-center items-center  ",className)}>
            <AiFillStar color={color}  size={size} />
            <AiFillStar color={color} size={size} />
            <AiFillStar size={size} color={color} />
            <AiOutlineStar color={color} size={size} />
        </div>

    );
}

export default Rating;