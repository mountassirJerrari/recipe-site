import SocialLinks from "@/components/SocialLinks";



export default function AuthLayout({
    children, }: { children: React.ReactNode }) {

    return (
        <div className="h-screen pt-14 h w-full bg-slate-50  flex justify-center items-center ">


            <div className=" w-3/4 h-5/6 overflow-hidden bg-white rounded-sm shadow-xl flex items-stretch justify-stretch">
                <div className=" relative w-1/2  ">
                    <img className="object-contain object-top " src="/img/auth.png " alt="" />
                    <div className="font-bold text-2xl text-white absolute left-3 bottom-2">Kouzina</div>

                    <SocialLinks className="absolute right-3 w-40 bottom-3" color="ffffff" size={25}></SocialLinks>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white w-4/6 space">
                            <div className="text-4xl font-bold mb-3 tracking-wide ">
                                Unlock a world of flavor and inspiration

                            </div>
                            <div className="tracking-wider">
                                Join our passionate community of food enthusiasts and share your love of cooking.
                            </div>

                        </div>
                    </div>

                </div>

                {children}
            </div>

        </div>




    )
}
