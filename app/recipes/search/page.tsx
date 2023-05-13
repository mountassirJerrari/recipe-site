import { IoIosArrowDown } from "react-icons/io";
import { FC } from "react";
import RecipeCardSecondary, { RecipeCardSecondaryProps } from "@/components/RecipeCardSecondary";

interface SearchProps {
    params: { slug: string };
    searchParams?: { query:string };

}

const Search: FC<SearchProps> = ({params, searchParams,}) => {

    const recipes: RecipeCardSecondaryProps[] = [
        {
            title: "Exquisite Dinner Recipe Ideas",
            imageSrc: "https://media.houseandgarden.co.uk/photos/640613314af807df336e29c0/1:1/w_1600%2Cc_limit/airfryer_skins_5021_amk_.jpg"
            , author: "ana",
            time: 43,
            pubDate: new Date(),
            rating: 3

        }
        ,
        {
            title: "Exquisite Dinner Recipe Ideas",
            imageSrc: "https://media.houseandgarden.co.uk/photos/640613314af807df336e29c0/1:1/w_1600%2Cc_limit/airfryer_skins_5021_amk_.jpg"
            , author: "ana",
            time: 43,
            pubDate: new Date(),
            rating: 3

        }

    ]
    return (

        <div className="mt-20 w-full flex  flex-col items-center  ">

            <div className=" mt-5 w-4/5 flex justify-between items-center px-6 ">
                <div className="  flex justify-center items-center w-28  text-sm self-end text-gray-800  bg-scondary-200 mr-2 whitespace-nowrap button-primary  "> type <IoIosArrowDown className="ml-3" /></div>
                <div className="  flex justify-center items-center w-28 text-sm self-end text-gray-800  bg-scondary-200 mr-2 whitespace-nowrap button-primary  "> Rating <IoIosArrowDown className="ml-3" /></div>
                <div className="  flex justify-center items-center w-28 text-sm self-end text-gray-800  bg-scondary-200 mr-2 whitespace-nowrap button-primary  "> Time <IoIosArrowDown className="ml-3" /></div>
                <div className="  flex justify-center items-center w-28 text-sm self-end text-gray-800  bg-scondary-200 mr-2 whitespace-nowrap button-primary  "> Diatery <IoIosArrowDown className="ml-3" /></div>

            </div>

            <div className=" h-fit pb-10 rounded-lg border border-gray-300  px-5 py-4  my-5 w-4/5 mx-auto flex flex-col  items-center">

                <div className=" self-start border-b border-black "> 34 results Found for <b>Tasty</b>  </div>


                <div className=" flex flex-col w-full items-center  ">
                    {recipes.map((e) => {
                        return <RecipeCardSecondary {...e} />
                    })}

                </div>


            </div>
        </div>

    );
}

export default Search;