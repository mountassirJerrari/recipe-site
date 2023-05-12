import { AiOutlineUserAdd } from "react-icons/ai"; 
import { BiLogInCircle } from "react-icons/bi"; 
import { BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";

function Header() {
    return (
        <div className='h-14 z-30 w-full fixed top-0  bg-white p-5 flex justify-between items-center shadow-sm '>
            <Link href={'/'} className="flex justify-center items-center ">
                <img className="h-11" src="./img/logo.png" alt="Logo" />
                <div className="text-amber-800   text-3xl font-bold ml-2 ">kouzina</div>
            </Link>

            <div className="relative flex justify-center items-center w-1/4 ">
                <input type="text" placeholder="search" className="bg-gray-50 border h-8 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                <BiSearch size={22} className="absolute right-2 " /></div>

            <nav className="flex w-1/3 justify-between items-center ">
                <div> <NavigationMenu  >
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="flex items-center m-1 font-semibold">Recipes</NavigationMenuTrigger>
                            <NavigationMenuContent className=" w-80 h-28 flex ">
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                </div>
                <div> <NavigationMenu  >
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="flex items-center m-1 font-semibold">More</NavigationMenuTrigger>
                            <NavigationMenuContent className=" w-80 h-28 flex ">
                                <NavigationMenuLink >link1</NavigationMenuLink>
                                <NavigationMenuLink >link1</NavigationMenuLink>
                                <NavigationMenuLink >link1</NavigationMenuLink>
                                <NavigationMenuLink >link1</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                </div>

                <div className="flex p-2  mx-2 text-sm font-semibold">Contact </div>
                <div className="flex p-2 mx-2 text-sm font-semibold">About </div>

                <div className="flex  ">
                    <Menubar className="border-none">
                        <MenubarMenu >
                            <MenubarTrigger className="p-0"><FaUserCircle color="FF7E5A" size={30} /></MenubarTrigger>
                            <MenubarContent>
                            <Link href={'/login'}> 
                                <MenubarItem>
                                    Login <MenubarShortcut><BiLogInCircle /></MenubarShortcut>
                                </MenubarItem>
                                </Link>
                                <Link href={'/register'}> 
                                <MenubarItem>
                                    Regsiter <MenubarShortcut><AiOutlineUserAdd /></MenubarShortcut>
                                </MenubarItem>
                                </Link>
                                <MenubarSeparator />

                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>


            </nav >
        </div >
    )

}

export default Header;