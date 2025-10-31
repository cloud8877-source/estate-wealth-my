import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md';
    
    const variants = {
      default: 'bg-slate-900 text-white hover:bg-slate-800',
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
      outline: 'border border-slate-200 bg-white hover:bg-slate-100',
      ghost: 'hover:bg-slate-100 hover:text-slate-900',
      link: 'text-slate-900 underline-offset-4 hover:underline',
    };
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8',
    };
    
    const variantStyles = variants[variant];
    const sizeStyles = sizes[size];
    const classes = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;
    
    // If asChild is true, we'll pass the className to the child element
    if (asChild) {
      // Expect a single React element as child and clone it with our classes
      if (React.isValidElement(children)) {
        return React.cloneElement(children as any, {
          className: `${classes} ${(children.props as any).className || ''}`,
          ref,
        });
      }
      console.warn('Button: asChild is true but children is not a valid React element');
      return <>{children}</>;
    }
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
export { Button };
// Force Cloudflare Pages deployment - Sat Nov  1 03:20:00 +08 2025
// Final deployment trigger - Sat Nov  1 03:37:33 +08 2025
