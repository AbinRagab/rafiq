import type { InputHTMLAttributes } from "react";


type inputFieldProps = {
    label: string;
    details?:string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
    label,
    error,
    details,
    className= "",
    ...props

}:inputFieldProps) {
    const hasError = Boolean(error)
    return ( 
        <div className="w-full  px-12 pb-4">
            <label
            className= {`
    ${hasError? 'text-error' : 'text-slate-mid'}
    text-label-sm mb-2 block uppercase `}
            >{label}</label>

            <input className={`min-w-[385px] w-full h-12 ${hasError? 'text-error bg-background-error': 'bg-surface-highest text-slate-mid'}  rounded-sm py-3.5 px-4`} {...props} />
             <p className="mt-1 text-title-xsm text-slate-light ">{details}</p>   
        </div>
     );
}