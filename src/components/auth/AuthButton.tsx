import type { ButtonHTMLAttributes } from "react";

type authButtonProps =ButtonHTMLAttributes<HTMLButtonElement>;
export default function AuthButton({
    className = "",
    children,
    ...props
}:authButtonProps) {
    return (
        <div className="w-full ">
            <button className={` w-full h-12 rounded-s-sm text-button-sm text-white bg-gradient-to-r from-button-dark to-button-light transition-all hover:from-button-light hover:to-button-dark  ${className}`} {...props}>
               
                     {children}
            </button>
        </div>);
}

