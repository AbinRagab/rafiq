import { data, Link } from "react-router-dom";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import { forgotPasswordSchema, type forgotPasswordFormData } from "../schemas/ForgotPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function ForgotPassword() {
    const [timer, setTimer] = useState(0);
    const [trials, setTrials] = useState(0);
    const [loading, setLoading] = useState(false);
    const [successSend, setSuccessSend] = useState(false)


    useEffect(()=>{
        if (timer === 0) return;

        const interval = setInterval(()=>{
            setTimer((prev)=>prev-1)
        },1000)        

        return () => clearInterval(interval);

    },[timer])


    const maxTrials = 3;
    const resendDelay = 5*60;
    const canResend = timer === 0 && trials < maxTrials && !loading;



    const minutes = Math.floor(timer / 60);
    const seconds  = timer % 60;


    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<forgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema)
    })



    const onSubmit = async (data:forgotPasswordFormData)=>{
        if(trials >= maxTrials) return

        const redirectTo = 'http://localhost:5173/reset-password';

        try {
            setLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/auth/v1/recover?redirect_to=${redirectTo}`,{
                method: 'POST',
                headers: {
                    'apikey': import.meta.env.VITE_SUPABASE_API_KEY,
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    email: data.email
                }) 
            })

            const result = await response.json();
            console.log(result);
            
            if(result.error_code){
                throw new Error(result.msg)
            }

            toast.success("we’ve sent a password reset link.")
            setSuccessSend(true)

            setTrials((prev)=>prev+1)
            setTimer(resendDelay);

        } catch (error) {
            console.log(error, 'error');
            
            toast(error.message)
        }finally{
            setLoading(false)
        }
    }

    return (<AuthLayout>
       
        <div className="w-full max-w-[448px] bg-white px-12 py-12 rounded-l-lg shadow-card flex flex-col items-center justify-center">
       <div className="w-full">
        <h2 className="text-title-card text-slate-dark">Forgot password?</h2>
                <p className="text-body-sm mt-2 text-slate-mid">No worries, we'll send you reset instructions.</p>
           </div>

        <form className="w-full mt-8" onSubmit={handleSubmit(onSubmit)}>

                <InputField label="Email address" {...register('email')} error={errors.email?.message} placeholder="Enter your email"/>
                <AuthButton disabled={!canResend}>
                    {isSubmitting? <span className="w-full flex items-center justify-center">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            </span> :'Send Reset Link'}
                
                </AuthButton>


               

           </form>

           <Link to={'/login'} className="text-primary text-body-md flex items-center justify-center gap-1 my-6 ">
                <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#003D9B"/>
</svg>
</span>
<span>
    Back to log in
</span>
                </Link>


          {successSend?  <div className="w-full ">
            <div className="h-0.5 w-full bg-gray-300 my-4 opacity-20"></div>

            <div className="flex items-top gap-3 rounded-lg p-4 mt-8 text-success-dark bg-success-light ">
            <span>
            <svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="#005235"/>
</svg>

            </span>
           <span className="text-body-md">
           If an account exists with this email, we’ve
           sent a password reset link.
           </span>

           </div>

           <p className="text-label-sm text-slate-mid mt-6 uppercase text-center">Didn't receive the email?</p>
            <button    className="w-full py-3 mt-2  rounded-lg  flex items-center justify-center gap-2 bg-surface-low text-button-sm text-button-timer "> <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2V0H12V2H6ZM8 13H10V7H8V13ZM9 21C7.76667 21 6.60417 20.7625 5.5125 20.2875C4.42083 19.8125 3.46667 19.1667 2.65 18.35C1.83333 17.5333 1.1875 16.5792 0.7125 15.4875C0.2375 14.3958 0 13.2333 0 12C0 10.7667 0.2375 9.60417 0.7125 8.5125C1.1875 7.42083 1.83333 6.46667 2.65 5.65C3.46667 4.83333 4.42083 4.1875 5.5125 3.7125C6.60417 3.2375 7.76667 3 9 3C10.0333 3 11.025 3.16667 11.975 3.5C12.925 3.83333 13.8167 4.31667 14.65 4.95L16.05 3.55L17.45 4.95L16.05 6.35C16.6833 7.18333 17.1667 8.075 17.5 9.025C17.8333 9.975 18 10.9667 18 12C18 13.2333 17.7625 14.3958 17.2875 15.4875C16.8125 16.5792 16.1667 17.5333 15.35 18.35C14.5333 19.1667 13.5792 19.8125 12.4875 20.2875C11.3958 20.7625 10.2333 21 9 21ZM9 19C10.9333 19 12.5833 18.3167 13.95 16.95C15.3167 15.5833 16 13.9333 16 12C16 10.0667 15.3167 8.41667 13.95 7.05C12.5833 5.68333 10.9333 5 9 5C7.06667 5 5.41667 5.68333 4.05 7.05C2.68333 8.41667 2 10.0667 2 12C2 13.9333 2.68333 15.5833 4.05 16.95C5.41667 18.3167 7.06667 19 9 19Z" fill="#737685"/>
</svg>
 Resend in {timer > 0 && ` (${formattedTime})`} </button>
        </div>:''} 
        
       
        </div>
        {trials >= maxTrials && (
  <p className="text-body-md text-error my-3">
    You have reached the maximum resend attempts.
  </p>
)}
    </AuthLayout>);
}

