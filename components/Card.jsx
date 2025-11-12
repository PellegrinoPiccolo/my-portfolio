import React from 'react'

const Card = ({title, position, icon, text}) => {
  return (
    <div className='bg-background-secondary p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-150 max-w-sm h-full hover:outline-2 hover:outline-indigo-500'>
        <div className='flex items-center mb-1'>
            <div className='text-4xl mr-4'>
                {icon}
            </div>
            <div>
                {position === 'top' && <h3 className='text-1xl md:text-2xl font-semibold text-white'>{title}</h3>}
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            {position === 'bottom' && <h3 className='text-1xl md:text-2xl font-semibold text-white'>{title}</h3>}
            <p className='text-gray-300 text-sm md:text-base'>{text}</p>
        </div>
    </div>
  )
}

export default Card