import { BiEdit } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface ProfileProps {

}

const Profile: FC<ProfileProps> = () => {
    return (
        <div className="flex w-full h-full relative justify-between items-start">
            <div className=" flex w-full flex-col justify-start items-start">
                <div className="font-semibold text-2xl mb-9">PROFILE</div>
                <div className="flex flex-col justify-center mb-5 items-start ">
                    <label className="text-sm mb-1" htmlFor="username"> Username : </label>
                    <Input type="text" className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="username" placeholder="enter username or email" />
                </div>
                <div className="flex flex-col justify-center mb-5 items-start">
                    <label className="text-sm mb-1" htmlFor="username"> First Name: </label>
                    <Input type="text" className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="firstname" placeholder="enter your first name" />
                </div>
                <div className="flex flex-col justify-center mb-5 items-start">
                    <label className="text-sm mb-1" htmlFor="username"> Last Name: </label>
                    <Input type="text" className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="lastname" placeholder="enter your last name" />
                </div>
                <div className="flex flex-col justify-center mb-5 items-start">
                    <label className="text-sm mb-1" htmlFor="username"> Email: </label>
                    <Input type="text" className="bg-gray-50 border h-9 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="email" placeholder="enter your email" />
                </div>
                <div className="text-sm w-80">All of the fields on this page are <b>optional</b> and can be deleted at any time, and by filling them out, you're giving us consent to <b>share this data</b> wherever your user profile appears.</div>
                <Button className=" bg-orange-500 w-auto shadow text-lg mb-2  mt-3  h-8">Update Profile</Button>
                <div className="flex flex-col absolute top-5 right-5 items-center w-1/5">
                    <div className="  w-28 h-28 relative ">
                        <div className=" rounded-full w-full h-full overflow-hidden">
                            <img className="object-cover h-full w-full" src="/img/zbda.jpg" alt="img" />
                        </div>
                        <div className=" rounded-full p-1 top-2/3 bg-orange-500 absolute  "><BiEdit color="5A1803" /></div>
                    </div>

                    <div className="text-sm mt-4">Profile Picture</div>

                </div>
            </div>
        </div>
    );
}

export default Profile;