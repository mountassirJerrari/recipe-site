import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineClockCircle } from "react-icons/ai";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import Rating from "./Rating";

interface UtensilCardProps extends HTMLAttributes<HTMLDivElement> {
    utensils: any[];
}

const UtensilCard: FC<UtensilCardProps> = ({ className , utensils }) => {
    return (
        <div className={clsx("overflow-hidden flex flex-col justify-center items-start", className)}>
          <div className="font-bold m-5 text-xl self-start">Utensils: </div>
            <div className="flex flex-col items-center rounded-md">
                <div className="flex flex-wrap gap-4 justify-center">
                    {utensils.map((fact:any) => (
                        <div key={fact.label} className=" w-32 h-48 m-3 bg-scondary rounded-xl flex flex-col items-stretch">
                            <div className="h-full w-full">
                                <img className="object-cover rounded-tl-md rounded-tr-md w-32 h-32" src={fact.img} alt="" />
                            </div>
                        <div className="h-full w-full flex flex-col items-center"> 
                            <p className=" font-medium m-5 text-xs self-center">{fact.label}</p>
                        </div>
                       </div>
                    ))}
                </div>
            </div>
      </div>
    );
}

export default UtensilCard;