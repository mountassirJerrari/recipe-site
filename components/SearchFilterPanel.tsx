"use client"
import { FC, } from "react";
import SearchBar from "./SearchBar";
import { BiSearch } from "react-icons/bi";
import clsx from "clsx";
import {  useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

interface SearchFilterPanelProps {
    initialValue?:string
}

const SearchFilterPanel: FC<SearchFilterPanelProps> = ({initialValue}) => {
    const router = useRouter();



    
    function searchHandler(query: string) {
        router.push('recipes/search?query=' + query)

        console.log(query);

    }

    return (<div className="w-full flex  flex-col items-center ">
        <div className={clsx(`relative flex justify-center items-center w-1/4  `)}>
            <SearchBar initialValue={initialValue}  onSearch={searchHandler} />
            <BiSearch size={22} className="absolute right-2 " />
        </div>

        <div className=" mt-5 w-4/5 flex justify-between items-center px-6 ">
            <div className="  flex justify-center items-center w-28  text-sm self-end text-gray-800  bg-scondary-200 mr-2 whitespace-nowrap button-primary  "> type <IoIosArrowDown className="ml-3" /></div>
            <div className="  flex justify-center items-center w-28 text-sm self-end text-gray-800  bg-scondary-200 mr-2 whitespace-nowrap button-primary  "> Rating <IoIosArrowDown className="ml-3" /></div>
            <div className="  flex justify-center items-center w-28 text-sm self-end text-gray-800  bg-scondary-200 mr-2 whitespace-nowrap button-primary  "> Time <IoIosArrowDown className="ml-3" /></div>
            <div className="  flex justify-center items-center w-28 text-sm self-end text-gray-800  bg-scondary-200 mr-2 whitespace-nowrap button-primary  "> Diatery <IoIosArrowDown className="ml-3" /></div>

        </div>
    </div>);
}

export default SearchFilterPanel;