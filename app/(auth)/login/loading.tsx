import { Loader2 } from "lucide-react";

export default function Loading() {
    return <div className="  h-full  border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 flex justify-center w-1/2  flex-col items-center ">
        <div className="w-2/3">
            <div className="h-2 w-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex flex-col justify-center mb-5 items-start ">
                <div className="h-2 w-5 bg-gray-200 rounded-full dark:bg-gray-700" >  </div>
                <div className=" bg-gray-200 rounded-full dark:bg-gray-700 h-9" />
            </div>
            <div className="flex flex-col justify-center mb-5 items-start ">
                <div className="h-2 w-5 bg-gray-200 rounded-full dark:bg-gray-700" >  </div>
                <div className=" bg-gray-200 rounded-full dark:bg-gray-700 h-9" />
            </div>
            <div className="h-9 bg-gray-200 rounded-full dark:bg-gray-700 "   ></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>


        </div>



    </div>
}