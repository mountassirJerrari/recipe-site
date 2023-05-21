import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Button } from "./ui/button";
import Rating from "./Rating";

interface HighlightCardProps extends HTMLAttributes<HTMLDivElement> {
    category: string;
    title: string;
    description: string;
    rating: number;
    imageSrc: string;
}

const HighlightCard: FC<HighlightCardProps> = ({ imageSrc, rating, className, category, title, description }) => {
    return (
        <div className={clsx("p-4  hover:-translate-y-1 transition-all overflow-hidden m-4 flex gap-3 justify-stretch items-stretch", className)}>
            <div className="relative ">
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <img src="/img/zbda.png" className="object-cover w-full h-full" alt="" />
                </div>
                <Button className="w-16 h-8 absolute top-2 left-2 bg-highlight rounded-3xl"><div className="text-xs">{category}</div></Button>
            </div>
            <div className=" flex flex-col items-start justify-start">
                <div className="font-bold text-3xl mb-5">{title}</div>
                <div className="text-sm font-light mb-5">{description}</div>
                <Rating rating={rating} color="FF7E5A" size={20} />
            </div>
        </div>
    );
}

export default HighlightCard;