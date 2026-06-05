import type { InputHTMLAttributes } from "react";


type inputFieldProps = {
    label: string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
    label,
    error,
    className= "",
    ...props

}:inputFieldProps) {
    const hasError = Boolean(error)
    return ( 
        <div className="">
            <label
            className= {`
    ${hasError? 'text-error' : 'text-label-sm'}
    text-label-sm mb-2 block uppercase `}
            >{label}</label>

            <input className={`min-w-[342px] max-w-[480px] ${hasError? 'text-error bg-background-error': 'bg-surface-highest text-slate-mid'}  rounded-sm py-3.5 px-4`} {...props} />
        </div>
     );
}