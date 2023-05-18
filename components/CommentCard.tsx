/* eslint-disable react/no-unescaped-entities */
"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Button } from "./ui/button";
import { BsTrash } from "react-icons/bs"; 


interface CommentCardProps extends HTMLAttributes<HTMLDivElement> {

    isUser?: boolean;
}

const CommentCard: FC <CommentCardProps> = ({className ,isUser=true}) => {
    return ( 
        <div className={clsx("flex flex-col justify-start items-start p-5 w-4/5 my-4 bg-gray-50 border h-full border-gray-300 text-gray-900 rounded-md", className)}>
             <div className="flex mb-4   items-center w-full">
                <div className="w-full flex  justify-start items-center">

                <div className="w-10 rounded-full mr-3 h-10 overflow-hidden">
                    <img className=" object-cover h-10 w-10" src="/img/zbda.jpg" alt="img" />
                </div>
                <p className="text-sm mr-3 font-semibold">{isUser ? "You" :"nadwa"}</p>
                <p className="text-xs  text-gray-500">2 days ago</p>
                </div>
               {isUser && <div className="w-auto flex justify-end items-center">
                   <Button className="w-fit py-3.5 px-2 h-5"  variant={"destructive"}  > <div className="text-xs mr-2"> Delete</div> <BsTrash /> </Button>
                </div> }
                
            </div>
            <div className="w-full h-full ">
                <p className="text-sm text-gray-700 ">I love this recipe so much, it's so delicious and yummy !! I Highly recommend it.</p>
            </div>
        </div>
    );
}
 
export default CommentCard;