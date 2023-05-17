import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineClockCircle } from "react-icons/ai";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import Rating from "./Rating";

interface RecipeCardProps extends HTMLAttributes<HTMLDivElement> {

    name:string ; 
    description:string;
    time:number;
    rating?:number;
    imageSrc:string ;

}

const RecipeCard: FC<RecipeCardProps> = ({ className , name , description ,time , imageSrc }) => {
    return (
        <div className={clsx("w-60 h-72 hover:-translate-y-1 transition-all overflow-hidden m-4 bg-scondary rounded-xl flex flex-col items-stretch relative", className)}>
            <AiFillHeart color="FF7E5A" size={20} className=" absolute top-2 right-2 "/>

            <div className="h-2/3 ">
                <img src={imageSrc} className="object-cover w-full h-full" alt="" />
            </div>
            <div className="h-full  px-4 pt-2 pb-5 flex flex-col items-start justify-between ">
                <div className="font-semibold mb-2 ">{name}</div>
                <div className="mb-2">{description}</div>
                <div className="flex justify-between items-center w-full"><Rating rating={2.5} color="FF7E5A" size={20} /> <div className="flex justify-center items-center text-sm font-medium"> {time} min <AiOutlineClockCircle className="ml-1" /></div></div>

            </div>
        </div>
    );
}

export default RecipeCard;