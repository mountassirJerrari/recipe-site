import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { resolve } from "path";


export  default async function Login() {

    await new Promise((res,rej)=>{});

    return (
        <div className=" flex justify-center w-1/2  flex-col items-center ">
            <div className="w-2/3">
                <div className="font-semibold text-2xl mb-5">LOGIN</div>
                <div className="flex flex-col justify-center mb-5 items-start ">
                    <label className="text-sm mb-1" htmlFor="username"> username : </label>
                    <Input type="text"  className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="username" placeholder="enter username or email" />

                </div>
                <div className="flex flex-col justify-center mb-5 items-start">
                    <label  className="text-sm mb-1" htmlFor="username"> Password : </label>
                    <Input type="password"  className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="pwd" placeholder="enter your password" />
                </div>
                <Button  className="  bg-primary-300-hover  w-full shadow text-lg mb-2  mt-3 h-8  "   >Login</Button>
                <div className="text-sm">Don't have an accoutn ? <span className="font-bold text-sm"> <Link href={'/register'}> Register</Link></span></div>


            </div>



        </div>
    )


}