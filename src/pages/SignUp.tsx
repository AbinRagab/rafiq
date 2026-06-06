import { Link } from "react-router-dom";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import PasswordRequirements from "../components/auth/PasswordRequirements";
import PasswordInput from './../components/auth/PasswordInput';
import {useForm} from "react-hook-form"

type registerFormData = {
    name: 'string';
    email: 'string';
    jobTitle?: 'string';
    password: 'string';
    comfirmPassword: 'string';

};

export default function SignUp () {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<registerFormData>();
    
    
    
    const  onSubmit = (data:registerFormData)=>{
        console.log(data);
        
    }
    
    return (  <>
        <AuthLayout>
            {/* <p className="text-title-card text-slate-dark">Create your workspace</p> */}
            <div className="w-full max-w-[576px] bg-white py-12 rounded-l-lg shadow-card flex flex-col items-center justify-center">
                <h2 className="text-title-card text-slate-dark">Create your workspace</h2>
                <p className="text-body-sm mt-2 text-slate-mid">Join the editorial approach to task management.</p>
            
                <form className="mt-8 w-full" onSubmit={handleSubmit(onSubmit)}>
                    
                    <InputField {...register('name')} label="Name" placeholder="Enter your full name" details="3-50 characters, letters only."/>               
                    <InputField {...register('email')}label="Email"  placeholder="yourname@company.com"/>               
                    <InputField {...register('jobTitle')} label="Job Title (Optional)"  placeholder="e.g. Project Manager"/>               
                    
                    
                    <div className="px-12 mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 mx-auto">
                    <PasswordInput {...register('password')} label="Password" placeholder="Password"/>
                    <PasswordInput {...register('comfirmPassword')} label="Confirm password" placeholder="Repeat your password"/>

                </div>
                    <PasswordRequirements  />
                    
                    <AuthButton>
                        Sign Up
                    </AuthButton>
                </form>
                <p className="text-body-sm mt-4 text-slate-mid">
                Already have an account? {' '}
                <Link className="text-primary font-bold hover: text-bg-primary"  to= {'/login'} >Log in</Link>
                </p>
            </div>
        </AuthLayout>
    </>);
}