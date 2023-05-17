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
        <div className={clsx("flex w-full flex-col justify-center items-center", className)}>
          <div className="font-bold my-5 text-xl self-start">Ingredients: </div>
                <div className="w-full flex justify-start flex-wrap gap-3">
                    {ingredients.map((fact:any) => (
                        <div key={fact.label} className="w-36 h-52 overflow-hidden bg-scondary rounded-xl flex flex-col items-stretch relative">
                            <div className="h-2/3">
                                <img className="object-cover w-36 h-32" src={fact.img} alt="" />
                            </div>
                            <div className="h-full flex flex-col items-start"> 
                                <p className="font-light p-4 text-xs">{fact.label}</p>
                            </div>
                       </div>
                    ))}
                </div>
            </div>
    );
}

export default IngredientCard;

