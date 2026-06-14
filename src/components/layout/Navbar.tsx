import { getAvatarLetters } from "../../utils/getAvatarLetters";

export default function Navbar() {
    return ( <div className=" h-16 border-b-1 border-b-black/10 flex items-center justify-end py-3 px-6 ">
            <div className="flex gap-4">
               <div className=" flex flex-col items-end justify-center ">
                    <p className="text-slate-dark text-BODY-MD font-semibold">Ahmed Ragab</p>
                    <p className="text-primary-container text-title-sm">Front End Developer</p>
                </div> 
                
                <div className="bg-primary-container w-10 h-10 rounded-lg text-TITLE-button text-white font-bold flex items-center justify-center ">
                    {getAvatarLetters() }
                </div>
                
            </div>
    </div> );
}

