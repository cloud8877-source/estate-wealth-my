import React from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-lg border border-gray-100 p-6',
        hover && 'hover:shadow-xl transition-shadow duration-200',
        className
      )}
    >
      {children}
    </div>
  )
}
