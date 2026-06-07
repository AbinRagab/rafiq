import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";



export default function Login() {



    
    return (
    <AuthLayout>
<div className="w-full
                 max-w-[576px]  bg-background md:bg-white px-12 py-12 rounded-l-lg shadow-card flex flex-col items-center justify-center">
                <h2 className="text-title-card text-slate-dark">Welcome Back</h2>
                <p className="text-body-sm mt-2 text-slate-mid">Please enter your details to access your workspace</p>
           
                <form className="w-full mt-8">


                        <InputField label="Email" id="Email" placeholder="yourname@company.com"/>
                        <PasswordInput label="Password" id="Password" placeholder="Enter your password" />


                <div className="my-8 flex items-center justify-between ">
                        <span className="flex items-center justify-center gap-2">
                            <span >
                            <input type="checkbox" className="w-4 h-4  border-2 border-slate-mid
                                    checked:bg-primary
                                    checked:border-primary" />
                            </span>
                            Remember Me

                            </span>
                        <span>
                        
                        <Link className="text-primary font-semibold hover: text-bg-primary"  to= {'/login'} >Forgot Password?</Link>

                        </span>
                </div>


                <AuthButton>

                Log In
                    
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

