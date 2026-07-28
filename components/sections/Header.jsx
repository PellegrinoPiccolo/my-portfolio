'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FiUser, FiFolder, FiCode, FiMail } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

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

  React.useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openMobileMenu]);


  const navItems = [
    { id: 'about', label: 'About', icon: <FiUser size={18} /> },
    { id: 'projects', label: 'Projects', icon: <FiFolder size={18} /> },
    { id: 'skills', label: 'Skills', icon: <FiCode size={18} /> },
    { id: 'contact', label: 'Contact', icon: <FiMail size={18} /> },
  ];

  return (
    <>
    <nav className={`w-full py-4 px-8 flex justify-between items-center fixed top-0 left-0 z-50 transition-colors duration-300 border-gray-800 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-sm border-b' : 'bg-transparent'}`}>
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
      </div>
    </nav>
        
    {/* mobile menu */}

    {/* Backdrop for mobile menu */}
    <AnimatePresence>
      {openMobileMenu && (
        <motion.button
          onClick={() => setOpenMobileMenu(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </AnimatePresence>

    {/* Drawer menu */}
    <div className={`fixed top-0 right-0 w-72 h-full bg-gray-950 border-l border-gray-800 shadow-2xl z-70 transform transition-transform duration-300 flex flex-col ${openMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <img src="/logo.png" alt="Logo" className="h-7" />
        <button onClick={() => setOpenMobileMenu(false)} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
          <IoClose size={24} />
        </button>
      </div>

      <div className="flex flex-col p-4 gap-1">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => {
              scrollToSection(item.id);
              setOpenMobileMenu(false);
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={openMobileMenu ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: openMobileMenu ? 0.1 + index * 0.06 : 0 }}
            className="group flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 text-left rounded-md px-3 py-3 border-l-2 border-transparent hover:border-indigo-500"
          >
            <span className="text-indigo-500 group-hover:text-indigo-400 transition-colors duration-200">{item.icon}</span>
            {item.label}
          </motion.button>
        ))}
      </div>

      <div className="mt-auto p-6 border-t border-gray-800 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <a href="https://github.com/PellegrinoPiccolo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
            <RiGithubLine size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pellegrino-piccolo-2a6739247?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
            <FiLinkedin size={20} />
          </a>
        </div>
        <button
          onClick={() => {
            scrollToSection('contact');
            setOpenMobileMenu(false);
          }}
          className="w-full bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white text-sm font-medium py-2.5 rounded-md transition-colors duration-200"
        >
          Let's talk
        </button>
      </div>
    </div>
    </>
  )
}

export default Header