"use client"
import { FiSettings } from "react-icons/fi"; 
import { RiUserSettingsLine } from "react-icons/ri"; 
import { MdManageAccounts } from "react-icons/md"; 
import { RiLockPasswordLine } from "react-icons/ri"; 
import { BiLockAlt } from "react-icons/bi"; 
import { AiFillLock } from "react-icons/ai"; 
import { AiOutlineUser } from "react-icons/ai"; 
import SocialLinks from "@/components/SocialLinks";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";


export default function DashoardLayout({
    children, }: { children: React.ReactNode }) {


    return (
        <div className=" pt-14 h w-full bg-slate-50 relative  flex justify-center items-center ">


                <img className="h-full w-full object-cover z-auto absolute" src="/img/dashboardBg.png" alt="" />
            <div className=" w-3/4 h-screen overflow-hidden my-8 z-10  bg-white/90 rounded-sm shadow-xl flex items-stretch justify-stretch">
                <div className=" bg-gray-300/75 w-1/5 rounded m-3 flex justify-start flex-col items-center p-3">
                    <Link href={'/dashboard/profile'} className={clsx("flex justify-between hover:bg-gray-300 w-full mb-3 p-2 rounded" , usePathname().includes("profile")?' bg-slate-50':'')}>
                        <p className="font-normal text-xs">Edit Profile</p>
                        <AiOutlineUser />
                    </Link>
                    <Link href={'/dashboard/password'}className={clsx("flex justify-between hover:bg-gray-300 w-full mb-3 p-2 rounded" , usePathname().includes("password")?' bg-slate-50':'')}>
                        <p className="font-normal text-xs">Change Password</p>
                        <RiLockPasswordLine />
                    </Link>
                    <Link href={''}className={clsx("flex justify-between hover:bg-gray-300 w-full mb-3 p-2 rounded" , usePathname().includes("account")?' bg-slate-50':'')}>
                        <p className="font-normal text-xs">Account Settings </p>
                        <FiSettings />  
                    </Link>
                </div>
                <div className=" w-4/5 rounded m-3">
                
                {children}
                </div>

            </div>

        </div>




    )
}
