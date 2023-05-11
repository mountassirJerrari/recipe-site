import clsx from "clsx";
import { FunctionComponent, HTMLAttributes } from "react";
import Collection from "./Collection";

interface CollectionsProps extends HTMLAttributes<HTMLDivElement> {

}

const Collections: FunctionComponent<CollectionsProps> = ({ className }) => {
    const collections = [
        {
            title: "Exquisite Dinner Recipe Ideas",
            imageSrc: "https://media.houseandgarden.co.uk/photos/640613314af807df336e29c0/1:1/w_1600%2Cc_limit/airfryer_skins_5021_amk_.jpg"
        }
        ,
        {
            title: "Ultimate Sandwich Bagels Recipes",
            imageSrc: "https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg"
        }
        ,
        {
            title: "Ultimate Sushi Combos",
            imageSrc: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/175796.jpg"
        },
        {
            title: "Exquisite Dinner Recipe Ideas",
            imageSrc: "https://media.houseandgarden.co.uk/photos/640613314af807df336e29c0/1:1/w_1600%2Cc_limit/airfryer_skins_5021_amk_.jpg"
        }
        ,
        {
            title: "Ultimate Sandwich Bagels Recipes",
            imageSrc: "https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg"
        }
        ,
        {
            title: "Ultimate Sushi Combos",
            imageSrc: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/175796.jpg"
        }
    ]

    return (
        <div className={clsx("flex w-3/4 flex-col justify-center items-start", className)}>
            <div className="font-bold mb-5 text-xl">Hand Picked Collections</div>
            <div className="flex w-full flex-col items-center ">

                <div className="w-full grid grid-cols-2 gap-4">

                    {collections.map(e=>{
                        return <Collection title={e.title} iamgeSrc={e.imageSrc}></Collection>
                    })}


                </div>




            </div>
        </div>
    );
}

export default Collections;