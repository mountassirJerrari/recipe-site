import Link from "next/link";
import { FC, HTMLAttributes } from "react";

interface CatgeorieCardProps extends HTMLAttributes<HTMLDivElement>  {
    name :string ;
    imageSrc : string ;
    
}
 
const CatgeorieCard: FC<CatgeorieCardProps> = ({name,imageSrc}) => {
    return ( 
        <Link href={""} className=" flex flex-col justify-center items-center">
            <div className="rounded-full transition-transform duration-300 hover:shadow transform-gpu hover:scale-110 overflow-hidden h-20 w-20 ">
                <img className=" object-cover  w-full h-full " src={imageSrc} alt="" />
            </div>
             <div className="font-medium ">{name}</div>
        </Link>
     );
}
 
export default CatgeorieCard;