import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";
import { useForm } from "react-hook-form";
import { type signInFormData, signInSchema } from "../schemas/SignInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";



export default function Login() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<signInFormData>({
        resolver: zodResolver(signInSchema)
    })



    const onSubmit = async (data:signInFormData)=>{
            try {
             const response =  await fetch(`${import.meta.env.VITE_SUPABASE_URL}/auth/v1/token?grant_type=password`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'apikey': import.meta.env.VITE_SUPABASE_API_KEY
                },
                body:JSON.stringify({
                    email: data.email,
                    password: data.password
                })
             })
   
             const result = await response.json()
             console.log(result, "result");
             console.log(data.rememberMe);
             
             if(result.error_code){
                throw new Error(result.msg)
             }

            
             

            toast.success('Log In Success')
            if (data.rememberMe) {
                localStorage.setItem(
                  'access_token',
                  result.access_token
                );

                localStorage.setItem('refresh_token',result.refresh_token)
              } else {
                sessionStorage.setItem(
                  'access_token',
                  result.access_token
                );

                sessionStorage.setItem('refresh_token',result.refresh_token)
              }
            navigate('/project')
             
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
    }

    return (
    <AuthLayout>
<div className="w-full
                 max-w-[576px]  bg-background md:bg-white px-12 py-12 rounded-l-lg shadow-card flex flex-col items-center justify-center">
                <h2 className="text-title-card text-slate-dark">Welcome Back</h2>
                <p className="text-body-sm mt-2 text-slate-mid">Please enter your details to access your workspace</p>
           
                <form className="w-full mt-8" onSubmit={handleSubmit(onSubmit)}>


                        <InputField {...register('email')} error={errors.email?.message} label="Email" id="Email" placeholder="yourname@company.com"/>
                        <PasswordInput {...register('password')} error={errors.password?.message} label="Password" id="Password" placeholder="Enter your password" />


                <div className="my-8 flex items-center justify-between ">
                        <span className="flex items-center justify-center gap-2">
                            <span >
                            <input {...register('rememberMe')}   type="checkbox"
 className="w-4 h-4  border-2 border-slate-mid
                                    checked:bg-primary
                                    checked:border-primary" />
                            </span>
                            Remember Me

                            </span>
                        <span>
                        
                        <Link className="text-primary font-semibold hover: text-bg-primary"  to= {'/login'} >Forgot Password?</Link>

                        </span>
                </div>


                <AuthButton disabled= {isSubmitting}>

                {isSubmitting? <span className="w-full flex items-center justify-center">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            </span> :'Sign Up'}
                </AuthButton>
                </form>
                <p className="text-body-sm mt-4 text-slate-mid">
                Don't have an account?  {' '}
                <Link className="text-primary font-bold hover: text-bg-primary"  to= {'/sign-up'} >Sign Up</Link>
                </p>
            </div>
    </AuthLayout>
    );
}

