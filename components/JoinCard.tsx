import { BsBoxArrowInRight } from "react-icons/bs"; 
import { FC, HTMLAttributes } from "react";
import { clsx } from 'clsx';


interface JoinCardProps extends HTMLAttributes<HTMLDivElement> {
    
}
 
const JoinCard: FC<JoinCardProps> = ({className}) => {
    return ( 
    <div className={clsx("w-3/4 h-60 shadow rounded bg-primary flex relative justify-center items-center" ,className)}>
        <img src="./img/recipe1.png" className="absolute shadow-md bottom-1 left-12 rotate-12 rounded-lg h-24" alt="" />
        <img src="./img/recipe2.png" className="absolute shadow-md bottom-6 right-1/3 -rotate-12 rounded-lg h-20" alt="" />

        <p className=" text-primary-200 self-start mt-7 w-8/12 mr-4 text-2xl font-semibold">Join our recipe community today and explore your favorite recipes with food enthusiasts around the world!</p>
        <div className=" p-5 rounded bg-primary-200 h-9 flex justify-center items-center ">
            <div className="text-white  w-1/2">Join</div> <BsBoxArrowInRight className="ml-2 w-1/2" size={30} color="ffffff" />
        </div>
    </div>
     );
}
 
export default JoinCard;