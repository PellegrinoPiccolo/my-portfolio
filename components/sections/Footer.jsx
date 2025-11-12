import React from 'react'

const Footer = () => {
  return (
    <section className="w-full py-6 border-t border-gray-800 flex flex-col items-center justify-center bg-background-primary">

      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Pellegrino Piccolo. All rights reserved.</p>
    </section>
  )
}

export default Footer