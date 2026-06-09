import type { InputHTMLAttributes } from 'react';

type InputFieldProps = {
  label: string;
  details?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  error,
  details,
  id,
  className = '',
  ...props
}: InputFieldProps) {
  const hasError = Boolean(error);
    // console.log(error);
    
  return (
    <div className="w-full pb-4">
      <label
        className={`
          text-label-sm mb-2 block uppercase
          ${hasError ? 'text-error' : 'text-slate-mid'}
        `}
        htmlFor={id}
      >
        {label}
      </label>

      <input
        {...props}
        className={`
           w-full h-12 rounded-sm px-4 md:px-8 py-3.5
          ${
            hasError
              ? 'bg-background-error text-error'
              : 'bg-surface-highest text-slate-mid'
          }
          ${className}
        `}
      />

      <p
        className={`
          mt-1 text-title-xsm
          ${hasError ? 'text-error' : 'text-slate-light'}
        `}
      >
        {hasError ? error : details}
      </p>
    </div>
  );
}