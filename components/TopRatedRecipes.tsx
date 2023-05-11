import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import RecipeCard from "./RecipeCard";

interface TopRatedRecipesProps extends HTMLAttributes<HTMLDivElement> {

}

const TopRatedRecipes: FC<TopRatedRecipesProps> = ({ className }) => {
    let recipes = [{
        name:"Mexican torito" ,
        description:"a cocktail from the east coast of Mexico",
        time:33,
        rating:4,
        imageSrc:"https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg" ,
    },
    {
        name:"Mexican torito" ,
        description:"a cocktail from the east coast of Mexico",
        time:33,
        rating:4,
        imageSrc:"https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg" ,
    },
    {
        name:"Mexican torito" ,
        description:"a cocktail from the east coast of Mexico",
        time:33,
        rating:4,
        imageSrc:"https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg" ,
    },
    {
        name:"Mexican torito" ,
        description:"a cocktail from the east coast of Mexico",
        time:33,
        rating:4,
        imageSrc:"https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg" ,
    },
    {
        name:"Mexican torito" ,
        description:"a cocktail from the east coast of Mexico",
        time:33,
        rating:4,
        imageSrc:"https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg" ,
    },
    {
        name:"Mexican torito" ,
        description:"a cocktail from the east coast of Mexico",
        time:33,
        rating:4,
        imageSrc:"https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg" ,
    }]
    return (
        <div className={clsx("flex w-3/4 flex-col justify-center items-start", className)}>
            <div className="font-bold mb-5 text-xl">Explore  our top rated recipes</div>
            <div className="w-full grid grid-cols-3 gap-4 ">
                {recipes.map((e)=>{
                    return <RecipeCard {...e} />
                })}

            </div>
        </div>
    );
}

export default TopRatedRecipes;