'use client'
import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

const Hero = () => {

    const goToNextSection = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const goToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <section id='hero' className='min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-gray-950 via-gray-900 to-gray-950'>
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        </div>
        <div className='relative z-10 text-center px-4'>
            <motion.p className='text-sm md:text-base text-indigo-400 mb-2 uppercase tracking-widest' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Hi, my name is</motion.p>
            <motion.h1 className='text-5xl md:text-7xl font-bold text-white mb-4' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Pellegrino Piccolo</motion.h1>
            <motion.h2 className='text-3xl md:text-4xl font-semibold text-gray-300 mb-6' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>Full-Stack & Mobile Developer</motion.h2>
            <motion.p className='text-lg md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>I design and build seamless digital experiences from concept to launch, creating exceptional web and mobile applications focused on quality and performance.</motion.p>
            <motion.button className='inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition cursor-pointer' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} onClick={() => goToSection('projects')}>View Projects</motion.button>
            <motion.div className='mt-12 flex items-center justify-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
                <a href="https://github.com/PellegrinoPiccolo" className='text-gray-400 hover:text-white mx-4' target="_blank" rel="noopener noreferrer">
                    <RiGithubLine size={28} />
                </a>
                <a href="https://www.linkedin.com/in/pellegrino-piccolo-2a6739247?utm_source=share_via&utm_content=profile&utm_medium=member_android" className='text-gray-400 hover:text-white mx-4' target="_blank" rel="noopener noreferrer">
                    <FiLinkedin size={28} />
                </a>
            </motion.div>
            <motion.button onClick={goToNextSection} className='mt-8 animate-bounce cursor-pointer' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }} >
                <FaArrowDown className='text-indigo-400 mx-auto' size={22} />
            </motion.button>
        </div>
    </section>
  )
}

export default Hero