'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFoundPage = () => {

    const router = useRouter();

  return (
    <div className='w-full h-screen bg-background-primary flex flex-col gap-10 items-center justify-center p-10'>
        <div className='flex flex-col md:flex-row md:gap-10 gap-5 items-center justify-center'>
            <img src='/logo.png' className='h-10 md:h-12'/>
            <div className='h-0.5 w-8 md:w-0.5 md:h-8 rounded-2xl bg-gray-500'></div>
            <p className='text-gray-500 md:text-2xl text-center'>
                404 - Page not found
            </p>
        </div>
        <p className='text-gray-500 md:text-2xl text-center'>
            Oops! The page you're looking for doesn't exist.
        </p>
        <button 
            onClick={() => router.push('/')} 
            className='px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer'
        >
            Back to main page
        </button>
    </div>
  )
}

export default NotFoundPage