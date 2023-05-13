import { AiOutlineStar } from "react-icons/ai"; 
import { AiOutlineEye } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { AiOutlineClockCircle } from "react-icons/ai";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

export interface RecipeCardSecondaryProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    title: string;
    author: string;
    pubDate: Date;
    rating: number;
    time: number;


}

const RecipeCardSecondary: FC<RecipeCardSecondaryProps> = ({ className, imageSrc, title, author, pubDate, rating, time }) => {
    return (
        <div className={clsx("w-full hover:-translate-y-1 transition-all h-44 overflow-hidden m-3 bg-scondary rounded flex  items-stretch", className)}>
            <div className="w-1/3">
                <img className="object-cover  w-full h-full" src={imageSrc} alt="" />
            </div>
            <div className="h-full w-full  p-5  flex items-stretch justify-between ">
                <div className=" flex flex-col justify-between items-start ">
                    <div className=" text-2xl font-bold mb-6 w-2/3">{title}</div>
                    <div className="text-sm">published at <span className="font-semibold  ">{pubDate.toDateString()}</span></div>
                    <div className="text-sm">posted By <span className="font-semibold  ">{author}</span></div>
                </div>
                <div className="flex flex-col items-end   h-full justify-between">
                    <div className=" flex flex-col items-end  justify-between ">
                        <div className="flex justify-center items-center text-sm mb-3 font-medium">{rating} <AiOutlineStar className="ml-1" /> </div>
                        <div className="flex justify-center items-center text-sm font-medium"> {time} min <AiOutlineClockCircle className="ml-1" /></div>
                    </div>
                    <div className=" flex  items-end justify-between">
                        <div className=" button-primary  flex justify-center items-center pl-4 pr-4 text-sm self-end text-gray-700   bg-scondary-200 mr-2 whitespace-nowrap   "> <div>Add to favorite</div> <AiOutlineHeart className="ml-2" /> </div>
                        <div className=" button-primary  flex justify-center items-center pl-4 pr-4   text-sm self-end text-gray-700  bg-scondary-200  whitespace-nowrap   "> <div>see</div>  <AiOutlineEye className="ml-2" /> </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default RecipeCardSecondary;