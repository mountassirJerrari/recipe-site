import {TbChevronRight} from "react-icons/tb"
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import Rating from "./Rating";
import {AiOutlineShareAlt} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

//<AiFillHeart color="FF7E5A" size={20} className=" absolute top-2 right-2 "/>
interface RecipeHeaderCardProps extends HTMLAttributes<HTMLDivElement> {
    name:string ; 
}

const RecipeHeaderCard: FC<RecipeHeaderCardProps> = ({ className , name }) => {
    return (
        <div className={clsx("overflow-hidden my-4 flex flex-col", className)}>
            <div className="py-2 flex flex-row font-medium items-stretch">
                <p> Recipe </p>
                <p className="self-center"><TbChevronRight color="000000" size={17}/></p> 
                <p> Meat </p>
                <p className="self-center"><TbChevronRight color="000000" size={17}/></p> 
                <p> Chicken </p>
            </div>
            <div className="py-2 flex flex-col items-start">
                <div className="font-bold text-5xl py-2">{name}</div>
                <Rating className="py-2" rating={5} color="FF7E5A" size={20} /> 
            </div>
            <div className="flex flex-row font-medium py-2">
                <button className="flex flex-row bg-save items-center mr-3"><p className="mr-1.5">Save</p><AiOutlineHeart size={17}/></button> 
                <button className="flex flex-row bg-other items-center mr-3"><p className="mr-1.5">Rate</p><AiOutlineStar size={17}/></button>
                <button className="flex flex-row bg-other items-center mr-3"><p className="mr-1.5">Share</p><AiOutlineShareAlt size={17}/></button>
            </div>
        </div>
    );
}

export default RecipeHeaderCard;