import React from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'bg-white text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'text-primary-500 hover:bg-primary-50'
  }
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  }

  const buttonClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: clsx(buttonClasses, children.props.className),
      ...props
    })
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}
// Build trigger - Sat Nov  1 02:50:34 +08 2025
