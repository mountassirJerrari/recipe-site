import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineClockCircle } from "react-icons/ai";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import Rating from "./Rating";

interface IngredientCardProps extends HTMLAttributes<HTMLDivElement> {
    ingredients: any[];
}

const IngredientCard: FC<IngredientCardProps> = ({ className , ingredients }) => {
    return (
        <div className={clsx("overflow-hidden flex flex-col justify-center items-stretch", className)}>
          <div className="font-bold m-5 text-xl self-start">Ingredients: </div>
            <div className="flex flex-col items-center rounded-md">
                <div className="grid gap-4 grid-cols-4 grid-rows-4 ">
                    {ingredients.map((fact:any) => (
                        <div key={fact.label} className=" w-48 h-72 m-3 bg-scondary rounded-xl flex flex-col items-stretch">
                            <div className="h-full w-full">
                                <img className="object-cover rounded-tl-md rounded-tr-md w-48 h-48" src={fact.img} alt="" />
                            </div>
                        <div className="h-full w-full flex flex-col items-stretch"> 
                            <p className=" font-bold m-5 text-sm self-center">{fact.label}</p>
                        </div>
                       </div>
                    ))}
                </div>
            </div>
      </div>
    );
}

export default IngredientCard;