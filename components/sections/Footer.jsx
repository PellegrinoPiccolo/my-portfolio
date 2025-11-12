'use client'
import React from 'react'
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {

    const goToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section className="w-full py-6 border-t border-gray-800 flex flex-col items-center justify-center bg-background-primary">
        <div className='flex flex-col w-full max-w-7xl px-6'>
            <div className='flex flex-row items-start justify-between md:gap-20 px-6 py-10'>
                <div className='flex flex-col items-start justify-start'>
                    <img src='/logo.png' alt='Logo' className='h-10 mb-2'/>
                    <p className='text-gray-400 text-sm'>I'm currently available for freelance work and interesting project collaborations.</p>
                </div>
                <div className='ml-10 flex flex-col'>
                    <h3 className='text-white font-semibold mb-2'>Quick Links</h3>
                    <ul>
                        <li className='text-gray-400 hover:text-white cursor-pointer mb-1' onClick={() => goToSection('about')}>About</li>
                        <li className='text-gray-400 hover:text-white cursor-pointer mb-1' onClick={() => goToSection('projects')}>Projects</li>
                        <li className='text-gray-400 hover:text-white cursor-pointer mb-1' onClick={() => goToSection('skills')}>Skills</li>
                        <li className='text-gray-400 hover:text-white cursor-pointer mb-1' onClick={() => goToSection('contact')}>Contact</li>
                    </ul>
                </div>
                <div className='ml-10 flex flex-col'>
                    <h3 className='text-white font-semibold mb-2'>Follow me</h3>
                    <div className='flex flex-row gap-4'>
                        <div className='cursor-pointer bg-background-secondary hover:bg-background-primary p-2 rounded-md transition-colors duration-200 text-gray-400 hover:text-white mb-1'>
                            <a href="https://www.linkedin.com/in/pellegrino-piccolo-2a6739247?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                                <FiLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                        <div className='cursor-pointer bg-background-secondary hover:bg-background-primary p-2 rounded-md transition-colors duration-200 text-gray-400 hover:text-white mb-1'>
                            <a href="https://github.com/PellegrinoPiccolo" target="_blank" rel="noopener noreferrer">
                                <RiGithubLine className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full border-t border-gray-800 mt-6'></div>
            <div className='flex flex-row items-center justify-between mt-10'>
                <p className='text-gray-400 text-sm mt-4'>&copy; {new Date().getFullYear()} Pellegrino Piccolo. All rights reserved.</p>
                <p className='text-gray-400 text-sm mt-4'>Made with ❤️ using React & Tailwind</p>
            </div>
        </div>
    </section>
  )
}

export default Footer