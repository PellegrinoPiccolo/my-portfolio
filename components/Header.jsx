'use client'
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`w-full py-4 px-8 flex justify-between items-center fixed top-0 left-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
      <div className='max-w-7xl mx-auto w-full flex justify-between items-center py-3.5'>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='cursor-pointer hover:scale-105 transition-transform duration-300'>
          <img src="/logo.png" alt="Logo" className='h-8' />
        </button>
        <ul className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">
            {openMobileMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
        {openMobileMenu && (
          <div className="w-full bg-gray-950/95 backdrop-blur-sm border-t border-gray-800 flex flex-col items-start mt-2 p-4 space-y-4 absolute right-0 top-20 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setOpenMobileMenu(false);
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header