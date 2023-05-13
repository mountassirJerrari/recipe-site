import { FC, HTMLAttributes } from "react";
import RecipeHeaderCard from './RecipeHeaderCard';
import RecipeInfoCard from './RecipeInfoCard';

interface RecipeDetailCardProps extends HTMLAttributes<HTMLDivElement>  {
    
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
    return ( 
        <div className=" h-fit pb-10 rounded-lg border border-gray-300 p-45 my-5 w-4/5 mx-auto flex flex-col items-center">
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
        </div>
     );
}
 
export default RecipeDetailCard;