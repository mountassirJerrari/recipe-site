import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface PasswordProps {

}

const Password: FC<PasswordProps> = () => {
    return (
        <div className=" flex flex-col justify-start items-start">
            <div className="font-semibold text-2xl mb-9"> CHANGE PASSWORD</div>

            <div className="flex flex-col justify-center mb-5 items-start ">
                <label className="text-sm mb-1" htmlFor="username"> old password : </label>
                <Input type="text" className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="username" placeholder="enter username or email" />

            </div>
            <div className="flex flex-col justify-center mb-5 items-start">
                <label className="text-sm mb-1" htmlFor="username"> new password : </label>
                <Input type="password" className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="pwd" placeholder="enter your password" />
            </div>
            <div className="flex flex-col justify-center mb-5 items-start">
                <label className="text-sm mb-1" htmlFor="username"> confirm password : </label>
                <Input type="password" className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="pwd" placeholder="confirm your password" />
            </div>
            <div  className="text-sm w-80">By clicking the <b>“confirm”</b>  button, you confirm that you understand the implications of changing your password and take <b>responsibility for the security of your account</b>.</div>
            <Button  className=" bg-red-600   w-auto shadow text-lg mb-2  mt-3  h-8  "   >Confirm</Button>

        </div>);
}

export default Password;