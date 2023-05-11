import { BsPinterest } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FC } from "react";
import clsx from "clsx";

interface SocialLinksProps {
    color: string;
    size: number;
    className?:string ;
}

const SocialLinks: FC<SocialLinksProps> = ({color,size,className}) => {
    return (
        <div className={clsx("flex justify-between items-center",className)}>
            <BsFacebook size={size} color={color} /> <AiOutlineInstagram size={size} color={color} /> <BsYoutube size={size} color={color} /><BsPinterest size={size} color={color} />
        </div>
    );
}

export default SocialLinks;