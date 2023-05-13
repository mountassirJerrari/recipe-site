import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

interface CollectionProps extends HTMLAttributes<HTMLDivElement> {
    title:string ; 
    iamgeSrc:string;

}

const Collection: FC<CollectionProps> = ({className ,title ,iamgeSrc}) => {
    return (
        <div className={clsx("w-full  h-72 overflow-hidden m-3 bg-scondary rounded-xl flex flex-col items-stretch",className)}>
            <div className="h-3/4 overflow-hidden ">
                <img className="object-cover transition-transform duration-300 transform-gpu hover:scale-110  w-full h-full" src={iamgeSrc} alt="" />
            </div>
            <div className="h-1/4  p-5  flex items-center justify-between ">
                <div className=" font-bold text-xl ">{title}</div>
                <div className=" text-sm self-end  bg-scondary-200 whitespace-nowrap button-primary  ml-3"> 165 Recipes</div>
            </div>
        </div>
    );
}

export default Collection;