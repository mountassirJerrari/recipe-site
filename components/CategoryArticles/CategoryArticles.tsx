import React, { HTMLAttributes } from "react";
import { CardV3 } from "../CardV3";

export type CategoryArticlesProps = HTMLAttributes<HTMLDivElement>;

type DataProps = {
  title: string;
  imageSrc: string;
}[];

let data: DataProps = [
  {
    title: "Pasta",
    imageSrc: "/img/lapeu.jpg",
  },
  {
    title: "Vegetarian",
    imageSrc: "/img/vegetarian.jpg",
  },
  {
    title: "Appetizers",
    imageSrc: "/img/appetizers.jpg",
  },
  {
    title: "Breakfast",
    imageSrc: "/img/breakfast.jpg",
  },
  {
    title: "Desserts",
    imageSrc: "/img/dessert.jpg",
  },
  {
    title: "Chicken",
    imageSrc: "/img/chicken.jpg",
  },
  {
    title: "Beef",
    imageSrc: "/img/beef.jpg",
  },
];

function CategoryArticles({ ...props }) {
  return (
    <div
      {...props}
      className={`px-10 overflow-x-scroll scrollbar-hide w-full container items-stretch mx-16 flex flex-wrap ${props.className}`}
    >
      <div className="font-bold mb-5 text-xl ml-5">popular Categories</div>
      <div className="flex justify-between items-center w-full">
        {data.map((item) => {
          return (
            <CardV3 key={item.title} title={item.title}>
              <CardV3.Image src={item.imageSrc} alt={item.title} fill />
              <CardV3.Title>{item.title}</CardV3.Title>
            </CardV3>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryArticles;

