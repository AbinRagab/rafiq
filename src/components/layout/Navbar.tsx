import { useEffect, useState } from "react";
import { getAvatarLetters } from "../../utils/getAvatarLetters";



export default function Navbar() {
  type User = {
    name?: string;
    job_title?: string;
  };
  
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const getUser = async () => {
      const token =
        localStorage.getItem('access_token') ||
        sessionStorage.getItem('access_token');
  
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/auth/v1/user`,
        {
          method: 'GET',
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_API_KEY,
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      const data = await response.json();
  
      setUser(data.user_metadata);
    };
  
    getUser();
  }, []);
  
  useEffect(() => {
    console.log(user, 'updated user');
  }, [user]);
   
  const name = user?.name || 'User';
  const jobTitle = user?.job_title || 'Member';

    return ( <div className=" h-16 border-b-1 border-b-black/10 flex items-center justify-end py-3 px-6 ">
            <div className="flex gap-4">
               <div className=" flex flex-col items-end justify-center ">
                    <p className="text-slate-dark text-BODY-MD font-semibold">{name}</p>
                    <p className="text-primary-container text-title-sm">{jobTitle}</p>
                </div> 
                
                <div className="bg-primary-container w-10 h-10 rounded-lg text-TITLE-button text-white font-bold flex items-center justify-center ">
                    {getAvatarLetters(name) }
                </div>
                
            </div>
    </div> );
}

