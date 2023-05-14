import { BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Header() {
    return (
        <div className='h-14 z-30 w-full fixed top-0  bg-white p-5 flex justify-between items-center shadow-sm '>
            <div className="flex justify-center items-center ">
                <img className="h-11" src="./img/cuisine.png" alt="Logo" />
                <div className="text-amber-800   text-3xl font-bold ml-2 ">kouzina</div>
            </div>

            <div className="relative flex justify-center items-center w-1/4 ">
                <input type="text" placeholder="search" className="bg-gray-50 border h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                <BiSearch size={22} className="absolute right-2 " /></div>

            <nav className="flex w-1/3 justify-between items-center ">
                <div className="flex items-center font-semibold">recipes <MdOutlineArrowDropDown className="ml-1" /></div>
                <div className="flex items-center font-semibold">More <MdOutlineArrowDropDown className="ml-1" /></div>
                <div className="flex   font-semibold">Contact </div>
                <div className="flex  font-semibold">About </div>
                <div className="flex  "><FaUserCircle color="FF7E5A" size={30} /></div>
            </nav>
        </div>
    )

}

export default Header;