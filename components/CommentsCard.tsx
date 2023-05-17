import { FaRegCommentDots } from "react-icons/fa"; 
import { AiOutlineSend } from "react-icons/ai"; 
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import CommentCard from "./CommentCard";
import { Textarea } from "./ui/textarea";


interface CommentsCardProps extends HTMLAttributes<HTMLDivElement> {

}
 
const CommentsCard : FC<CommentsCardProps> = ({className}) => {
    return ( 
        <div className={clsx("h-fit rounded-lg border border-gray-300 w-full mx-auto flex flex-col items-center my-4", className)}>
            <div className="w-full shadow ">
            <div className="flex  m-auto  justify-between items-start p-5 h-full w-3/4">
                <div className="w-10 rounded-full h-10 overflow-hidden">
                    <img className="object-cover h-10 w-10" src="/img/zbda.jpg" alt="img" />
                </div>
                <div className="w-4/5 mx-2 h-full ">
                    <Textarea className="bg-gray-50 border h-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full" id="comment"  placeholder="Type your comment here..." />
                </div>
                <Button className="w-auto py-3.5 px-2 h-5 bg-blue-950" > <div className="text-xs mr-2">Send</div> <FaRegCommentDots /></Button>
            </div>
            </div>
            <div className="w-full flex flex-col items-center">
            <CommentCard />
            </div>
        </div>);
}
 
export default CommentsCard ;