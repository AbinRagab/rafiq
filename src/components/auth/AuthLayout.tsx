import type { ReactNode } from "react";
import Logo from "../../assets/logo";


type AuthLayoutProps =
{
    children : ReactNode;
};


export default function AuthLayout ({children}:AuthLayoutProps) {
    return ( 
        // h-screen
        <div className=" bg-background w-full">

                <header>
                        <Logo collapsed ={false}/>

                </header>
{/* min-h-[calc(100vh-80)] */}
                <main className="  min-h-lvh flex items-center justify-center ">

                    {children}
                </main>
        </div>
    );
}

