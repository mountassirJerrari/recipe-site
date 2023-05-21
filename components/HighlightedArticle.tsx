import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Button } from "./ui/button";
import Rating from "./Rating";
import HighlightCard from "./HighlightCard";

interface HighlightedArticlesProps extends HTMLAttributes<HTMLDivElement> {
}
 
const HighlightedArticles: FC<HighlightedArticlesProps> = ({className}) => {
    return ( 
        <div className={clsx("flex relative w-full h-[900px] my-4 overflow-y-scroll scrollbar-hide justify-between items-start bg-primary-foreground", className)}>
            <div className="w-2/4 sticky top-1 m-3">
                <HighlightCard title="Mom's Chicken Pot Pie" description="Easy, beginner chicken pot pie with potatoes that your family will love." category="Easy" rating={4.5} imageSrc="/img/swiperRecipe.png" className="flex flex-col w-full h-full cursor-pointer"/>
            </div>
            <div className="w-2/4 h-full m-3">
                <HighlightCard title="Mom's Chicken Pot Pie" description="Easy, beginner chicken pot pie with potatoes that your family will love." category="Easy" rating={4.5} imageSrc="/img/swiperRecipe.png" className="w-full cursor-pointer"/>
                <HighlightCard title="Mom's Chicken Pot Pie" description="Easy, beginner chicken pot pie with potatoes that your family will love." category="Easy" rating={4.5} imageSrc="/img/swiperRecipe.png" className="w-full cursor-pointer"/>
                <HighlightCard title="Mom's Chicken Pot Pie" description="Easy, beginner chicken pot pie with potatoes that your family will love." category="Easy" rating={4.5} imageSrc="/img/swiperRecipe.png" className="w-full cursor-pointer"/>
                <HighlightCard title="Mom's Chicken Pot Pie" description="Easy, beginner chicken pot pie with potatoes that your family will love." category="Easy" rating={4.5} imageSrc="/img/swiperRecipe.png" className="w-full cursor-pointer"/>
                <HighlightCard title="Mom's Chicken Pot Pie" description="Easy, beginner chicken pot pie with potatoes that your family will love." category="Easy" rating={4.5} imageSrc="/img/swiperRecipe.png" className="w-full cursor-pointer"/>
            </div>
        </div>
    );
}
 
export default HighlightedArticles;