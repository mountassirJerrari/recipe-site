'use client'
import { FC, HTMLAttributes, useState } from "react";
import RecipeHeaderCard from './RecipeHeaderCard';
import RecipeInfoCard from './RecipeInfoCard';
import IngredientCard from "./IngredientCard";
import UtensilCard from "./UtensilCard";
import { Rating, RoundedStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import CommentsCard from "./CommentsCard";


interface RecipeDetailCardProps extends HTMLAttributes<HTMLDivElement> {


}

const RecipeDetailCard: FC<RecipeDetailCardProps> = () => {

    const recipes:any[] = [
         {
          name: "Mom's Chicken Pot Pie",
          stars: 5,
          infos: [
            {label: 'Prep Time', value: "10 minutes"},
            {label :'Yield', value: "1 (9-inch) deep-dish pie"},
            {label: 'Servings', value: 8}
          ],
          ingredients: [
            { label: "1/3 cup butter", img: '/img/zbda.jpg' },
            { label: "1/3 cup chopped onion", img: '/img/bsla.jpg' },
            { label: "1/3 cup all-purpose flour", img: '/img/t7in.jpg' },
            { label: "1/2 teaspoon salt", img: '/img/ml7a.jpg' },
            { label: "1/4 teaspoon ground black pepper", img: '/img/bzar.jpg' },
            { label: "1 3/4 cups chicken broth", img: '/img/chickenbroth.jpg' },
            { label: "2/3 cup milk", img: '/img/7lib.jpeg' },
            { label: "2 cups chopped cooked chicken", img: '/img/djaj.jpg' },
            { label: "1 (14.5 ounce) can peas and carrots", img: '/img/pears-carrots.jpg' },
            { label: "1/2 (15 ounce) can whole new potatoes, drained", img: '/img/btata.jpg' },
            { label:  "1 (14.1 ounce) package double-crust pie pastry, thawed", img: '/img/lapate.jpg' },
          ],
          utensils: [
            { label: "1 Fouet Cuisine", img: '/img/fouet2.jpg' },
            { label: "1 Poêle", img: '/img/m9la.jpg' },
            { label: "1 Râpe", img: '/img/rape2.jpg' },
            { label: "1 Saladier", img: '/img/bol.jpeg' },
          ],
          nutritionFacts: [
            { label: 'Calories', value: '219.9 kcal' },
            { label: 'Total Fat', value: '10.7 g' },
            { label: 'Cholesterol', value: '37.8 mg' },
            { label: 'Sodium', value: '120.9 mg' },
            { label: 'Potassium', value: '38.3 mg' },
            { label: 'Sugars', value: '2.9g' },
            { label: 'Protein', value: '7.9 g' },
            { label: 'Total Carbs', value: '20.9 g' }
          ], 
          imageSrc : "/img/momsrecipeye.png"
         }
      ];
      const [rating, setRating] = useState(0) // Initial value
  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#FF7E5A',
    inactiveFillColor: '#feefea'
  }
    return ( 
        <div className=" h-fit  pb-10 rounded-lg border border-gray-300 px-10 my-5 w-4/5 mx-auto flex flex-col items-center">
            <div className="w-full">
            {recipes.map((e)=>{
                return  <RecipeHeaderCard key = {e.name} name = {e.name}/>
            })}
            </div>
            <div className="w-full">
            {recipes.map((e)=>{
                return  <RecipeInfoCard key = {e.name} imageSrc = {e.imageSrc} nutritionfacts={e.nutritionFacts} infos={e.infos}/>
            })}
            </div>
            <div className="w-full">
            {recipes.map((e)=>{
                return  <IngredientCard key = {e.name} ingredients = {e.ingredients}/>
            })}
            </div>
            <div className="w-full">
            {recipes.map((e)=>{
                return  <UtensilCard key = {e.name} utensils = {e.utensils}/>
            })}
            </div>
            <div  className=" flex flex-col items-start w-full"> 
        <div className="font-bold my-5 text-xl self-start">Rate this recipe : </div>
        <Rating id="rate" className="my-2" itemStyles={myStyles}  style={{ maxWidth: 150 }} value={rating} onChange={setRating} />


      </div>
            <div className="font-bold my-5 text-xl self-start">Comments: </div>
            <CommentsCard/>
        </div>
     );

}

export default RecipeDetailCard;