import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, name, error, ...props }, ref) => {
  const inputId = name || `input-${Math.random()}`;
  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        ref={ref}
        className={`w-full px-4 py-2 border rounded-lg bg-primary-50 dark:bg-primary-700 dark:border-primary-600 dark:text-primary-100 dark:placeholder-primary-400 focus:outline-none focus:ring-2 transition ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-primary-300 focus:ring-accent-500 dark:focus:border-accent-500'
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
export default Input;
