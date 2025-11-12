import React from 'react'

const Badge = ({text, variant, className, children}) => {
  return (
    <div className={`${className} ${variant === 'filled' ? 'bg-indigo-500 text-white' : ''} ${variant === 'outlined' ? 'bg-transparent border border-indigo-500 text-indigo-500' : ''}`}>
        <p className="px-3 py-1 rounded-full text-xs font-medium">
            {children}
        </p>
    </div>
  )
}

export default Badge