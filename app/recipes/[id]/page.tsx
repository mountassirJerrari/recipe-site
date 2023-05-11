"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RecipeCard from "@/components/RecipeDetailCard";
import{BsFillPlayFill} from "react-icons/bs"

  
const recipes = [
    {
      name: "Mom's Chicken Pot Pie",
      stars: 5,
      prepTime: "10 minutes",
      servings: 8,
      yield: "1 (9-inch) deep-dish pie",
      ingredients: [
        "1/3 cup butter",
        "1/3 cup chopped onion",
        "1/3 cup all-purpose flour",
        "1/2 teaspoon salt",
        "1/4 teaspoon ground black pepper",
        "1 3/4 cups chicken broth",
        "2/3 cup milk",
        "2 cups chopped cooked chicken",
        "1 (14.5 ounce) can peas and carrots",
        "1/2 (15 ounce) can whole new potatoes, drained",
        "1 (14.1 ounce) package double-crust pie pastry, thawed",
      ],
    },
    {
      name: "Some other recipe",
      stars: 4,
      prepTime: "30 minutes",
      servings: 6,
      yield: "1 (9-inch) deep-dish pie",
      ingredients: [
        "1/3 cup butter",
        "1/3 cup chopped onion",
        "1/3 cup all-purpose flour",
        "1/2 teaspoon salt",
        "1/4 teaspoon ground black pepper",
        "1 3/4 cups chicken broth",
        "2/3 cup milk",
        "2 cups chopped cooked chicken",
        "1 (14.5 ounce) can peas and carrots",
        "1/2 (15 ounce) can whole new potatoes, drained",
        "1 (14.1 ounce) package double-crust pie pastry, thawed",
      ],
    },
  ];
  

export default function RecipeDetails(){
    return (
        <RecipeCard
          className="tz-4"
        />
      );
}
