import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import NutritionCard from "./NutritionCard"
 

interface RecipeInfoCardProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc:string ;
    nutritionfacts: any[]; 
    infos: any[];
}

const RecipeInfoCard: FC<RecipeInfoCardProps> = ({ className , imageSrc, nutritionfacts, infos }) => {
    return (
        <div className={clsx("w-full h-full  flex flex-col items-stretch",className)}>
            <div className="flex items-start w-full ">
                <div className="mr-6 ml-2">
                    <div className=" w-full h-96 rounded overflow-hidden">
                    <img className=" flex-1  w-full h-full object-cover " src={imageSrc} width={600} height={700} alt="" />
                    </div>
                    
                </div>
                <div className="ml-2 w-1/2 h-96 mr-5">
                    <div className=" w-full overflow-scroll ">
                        <NutritionCard nutritionFacts={nutritionfacts} />
                    </div>
                </div>
            </div>
            <div className="mt-5 justify-center flex self-start flex-row w-7/8 items-center">
                        {infos.map(e=>{
                        return (
                        <div key={e.label} className="flex flex-col justify-center align-middle items-stretch"> 
                            <p className="font-medium text-sm p-2 mr-3 self-center">{e.label}</p>
                            <p className="font-normal text-xs p-2 mr-3 self-center"> {e.value} </p>
                        </div>
                        )
                        })}
                    </div>
        </div>
    );
}

export default RecipeInfoCard;