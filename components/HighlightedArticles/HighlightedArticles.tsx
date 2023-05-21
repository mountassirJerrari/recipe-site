"use client";
import React, { HTMLAttributes } from "react";
import { DescriptionProps } from "../HighlightsCard/Description"
import { HighlightsCard } from "../HighlightsCard";

export type HighlightedArticlesProps = HTMLAttributes<HTMLDivElement> & {

} & DescriptionProps;

type DataProps = {
    title: string;
    imageSrc: string;
    category: string;
    badgeColor: string;
    rating: number;
    description: string;
}[];

let data: DataProps = [
    {
        title: "Lenovo’s smarter devices stoke professional passions",
        imageSrc: "/img/swiperRecipe.png",
        category: "Quick",
        badgeColor: "blue",
        description: "Quick, beginner chicken pot pie with potatoes that your family will love.",
        rating: 4.5
    },
    {
        title: "Lenovo’s smarter devices stoke professional passions",
        imageSrc: "/img/swiperRecipe.png",
        category: "Quick",
        badgeColor: "blue",
        description: "Quick, beginner chicken pot pie with potatoes that your family will love.",
        rating: 4.5
    },
    {
        title: "Lenovo’s smarter devices stoke professional passions",
        imageSrc: "/img/swiperRecipe.png",
        category: "Quick",
        badgeColor: "blue",
        description: "Quick, beginner chicken pot pie with potatoes that your family will love.",
        rating: 4.5
    },
    {
        title: "Lenovo’s smarter devices stoke professional passions",
        imageSrc: "/img/swiperRecipe.png",
        category: "Quick",
        badgeColor: "blue",
        description: "Quick, beginner chicken pot pie with potatoes that your family will love.",
        rating: 4.5
    },
    {
        title: "Lenovo’s smarter devices stoke professional passions",
        imageSrc: "/img/swiperRecipe.png",
        category: "Quick",
        badgeColor: "blue",
        description: "Quick, beginner chicken pot pie with potatoes that your family will love.",
        rating: 4.5
    },
    {
        title: "Lenovo’s smarter devices stoke professional passions",
        imageSrc: "/img/swiperRecipe.png",
        category: "Quick",
        badgeColor: "blue",
        description: "Quick, beginner chicken pot pie with potatoes that your family will love.",
        rating: 4.5
    },
    {
        title: "Lenovo’s smarter devices stoke professional passions",
        imageSrc: "/img/swiperRecipe.png",
        category: "Quick",
        badgeColor: "blue",
        description: "Quick, beginner chicken pot pie with potatoes that your family will love.",
        rating: 4.5
    },
];



function HighlightedArticles({ ...props }) {
    return (
        <div
            {...props}
            className={`flex relative w-full h-[900px] my-4 overflow-y-scroll scrollbar-hide justify-between items-start bg-primary-foreground ${props.className}`}
        >
            <div className="w-2/4 sticky top-1 m-3">
                <HighlightsCard title={data[0].title} badgeColor={data[0].badgeColor} category={data[0].category} description={data[0].description} imageSrc={data[0].imageSrc} rating={3} className="w-full  flex-col cursor-pointer">

                </HighlightsCard>
            </div>
            <div className="w-2/4 h-full m-3">
                {data.map((item, index) => {
                    if (index === 0) {
                        return
                    }
                    return <HighlightsCard title={item.title} badgeColor={item.badgeColor} category={item.category} description={item.description} imageSrc={item.imageSrc} rating={3} className="w-full cursor-pointer">
                    </HighlightsCard>
                })}

            </div>
        </div>
    );
}

export default HighlightedArticles;

