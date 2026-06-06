import { Link } from "react-router-dom";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import PasswordRequirements from "../components/auth/PasswordRequirements";
import PasswordInput from './../components/auth/PasswordInput';
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type signUpFormData, } from "../schemas/SignUpSchema";
import { toast } from 'sonner';

// type registerFormData = {
//     name: 'string';
//     email: 'string';
//     jobTitle?: 'string';
//     password: 'string';
//     comfirmPassword: 'string';

// };

export default function SignUp () {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<signUpFormData>({
        resolver: zodResolver(signUpSchema),
    });

    
    
    const  onSubmit = (data:signUpFormData)=>{
        console.log(data);
        toast.success('Account created successfully!');

    }

    const onError = () => {
        toast.error('Please fix the form errors.');
      };

      
      const password = watch('password', '')
    return (  <>
        <AuthLayout>
            {/* <p className="text-title-card text-slate-dark">Create your workspace</p> */}
            <div className="w-full max-w-[576px] bg-white py-12 rounded-l-lg shadow-card flex flex-col items-center justify-center">
                <h2 className="text-title-card text-slate-dark">Create your workspace</h2>
                <p className="text-body-sm mt-2 text-slate-mid">Join the editorial approach to task management.</p>
            
                <form className="mt-8 w-full" onSubmit={handleSubmit(onSubmit,onError)}>
                    
                    <InputField {...register('name')} error={errors.name?.message} label="Name" placeholder="Enter your full name" details="3-50 characters, letters only."/>               
                    <InputField {...register('email')} error= {errors.email?.message}label="Email"  placeholder="yourname@company.com"/>               
                    <InputField {...register('jobTitle')} error={errors.jobTitle?.message} label="Job Title (Optional)"  placeholder="e.g. Project Manager"/>               
                    
                    
                    <div className="px-12 mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 mx-auto">
                    <PasswordInput  {...register('password')} error={errors.password?.message} label="Password" placeholder="Password"/>
                    <PasswordInput {...register("confirmPassword")} error={errors.confirmPassword?.message} label="Confirm password" placeholder="Repeat your password"/>

                </div>
                    <PasswordRequirements  password = {password} />
                    
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