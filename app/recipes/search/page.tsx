import { IoIosArrowDown } from "react-icons/io";
import { FC, useEffect, useState } from "react";
import RecipeCardSecondary, { RecipeCardSecondaryProps } from "@/components/RecipeCardSecondary";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import { BiSearch } from "react-icons/bi";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import SearchFilterPanel from "@/components/SearchFilterPanel";

interface SearchProps {
    params: { slug: string };
    searchParams?: { query: string };

}

const Search: FC<SearchProps> = ({ params, searchParams, }) => {

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

        },
        {
            title: "Exquisite Dinner Recipe Ideas",
            imageSrc: "https://media.houseandgarden.co.uk/photos/640613314af807df336e29c0/1:1/w_1600%2Cc_limit/airfryer_skins_5021_amk_.jpg"
            , author: "ana",
            time: 43,
            pubDate: new Date(),
            rating: 3

        },
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

            <SearchFilterPanel initialValue={searchParams?.query}  ></SearchFilterPanel>

            <div className=" h-fit pb-10 rounded-lg border border-gray-300  px-5 py-4  my-5 w-4/5 mx-auto flex flex-col  items-center">

                <div className=" self-start border-b border-black "> 34 results Found for <b>{searchParams?.query}</b>  </div>


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