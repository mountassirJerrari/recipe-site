import React, { HTMLAttributes } from "react";
import { Title } from "./Title";
import { Image } from "./Image";

interface CardV3Props extends HTMLAttributes<HTMLDivElement>  {
    title :string ;
}
 
function CardV3({ title, ...props }: CardV3Props) {
    return ( 
        <div
        {...props}
        className={`flex flex-col p-5 justify-center items-center cursor-pointer ${props.className}`}
      >
            {props.children}
        </div>
     );
}

CardV3.Title = Title;
CardV3.Image = Image;
 
export default CardV3;
