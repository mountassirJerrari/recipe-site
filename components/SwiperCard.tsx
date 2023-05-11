
import { BsArrowRight } from "react-icons/bs";

import Rating from "./Rating";
export default function SwiperCard() {

    return (
        <div className="flex  bg-rose-400/20 w-8/12 mx-auto  relative ">
            <div className="rounded-full absolute bottom-5 right-5 h-12 w-12  bg-white/40 flex justify-center items-center  "> <BsArrowRight color="FF7E5A" size={25} /></div>
            <img className="w-1/2" src="/img/swiperRecipe.png" alt="" />
            <div className=" flex flex-col justify-center items-center w-1/2">
                <Rating className="mb-6" color="FF7E5A" size={30}></Rating>
                <h1 className="text-2xl w-2/3  mb-3 font-semibold ">Mom's Chicken Pot Pie</h1>
                <p className="w-2/3" >Look no further for an easy, beginner chicken pot pie with potatoes that your family will love!
                    No one can deny its simple decadence.</p>
            </div>
        </div>
    )

}