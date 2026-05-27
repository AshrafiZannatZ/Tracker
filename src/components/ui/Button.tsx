import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default function Button({ children, className = '', ...props }: Props) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
