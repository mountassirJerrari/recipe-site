import { BiUpArrowAlt } from "react-icons/bi";
import { FC } from "react";
import SocialLinks from "./SocialLinks";

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
    return (<div className=" flex  h-screen-80 flex-col items-center justify-between pb-12 w-full bg-primary-300  ">
        <div className="bg-white -translate-y-1/2 hover:-translate-y-2/3 transition-all rounded-full"><BiUpArrowAlt size={35} color="FF7E5A" /></div>
        <SocialLinks className="w-60 " color="ffffff" size={35}></SocialLinks>
        <div className="text-white w-4/5 flex mr-10 mt-10 items-start justify-between">
            <div>
                <div className="font-bold text-lg mb-2">Recipes</div>
                <div>Index  Des Recettes <br />Noël<br /> Pâques<br /> Chandeleur</div>
            </div>
            <div>
                <div className="font-bold text-lg mb-2">Recipe By Theme</div>
                <div className="flex flex-row items-start">
                    <div className="mr-10">
                        Automne <br />
                        Hiver <br />
                        Printemps <br />
                        Eté <br />
                        Afrique <br />
                        Alsace <br />
                        AsieSud-Ouest <br />
                        Corse
                    </div>
                    <div className="mr-10">
                        Espagne <br />
                        Liban<br />
                        Inde<br />
                        Italie<br />
                        Bretagne<br />
                        Cuisine<br />
                        Française<br />
                        Rapide<br />
                        Et Facile Je Débute Poissons
                    </div>
                    <div className="mr-10">
                        Salades <br />
                        Soupes<br />
                        Boissons<br />
                        Cocktails<br />
                        Bébés<br />
                        Cuisine<br />
                        Pour<br />
                        Enfants<br />
                        Moins Cher<br />
                        Mince Alors !
                    </div>
                </div>
               


            </div>
            <div>

            <div className="font-bold text-lg mb-2">Forum</div>
            <div>Question /
                <br />Responses
            </div>
            </div>
        </div>
        <div className="flex text-white "> Made with  <p className="font-semibold mx-2"> Love </p> by <p className="font-semibold  mx-2">MOEEN Technologies</p></div>
    </div>);
}

export default Footer;