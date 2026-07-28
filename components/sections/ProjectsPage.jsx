'use client'
import React from 'react'
import { motion } from "framer-motion";
import projectsData from '../../public/projects.json'
import ProjectCard from '../ProjectCard'
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { useRouter } from 'next/navigation';

const ProjectsPage = () => {

    const router = useRouter();
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className='w-full mx-auto px-8 py-30 min-h-screen bg-background-secondary scroll-mt-20'>
        <div className={`fixed top-0 left-0 w-full py-4 px-8 z-999 flex justify-between items-center border-gray-800 ${scrolled ? 'bg-gray-950/95 backdrop-blur-sm border-b' : 'bg-transparent'} transition-colors duration-300`}>
            <div className='max-w-7xl mx-auto w-full flex justify-between items-center py-3.5'>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <img src="/logo.png" alt="Logo" className='h-8' />
                </button>
                <button title="Go to Home" onClick={() => router.push('/')} className='group text-white hover:bg-gray-700 p-2 rounded-full transition cursor-pointer'>
                    <GoHome size={24} className="group-hover:hidden" />
                    <GoHomeFill size={24} className="hidden group-hover:block" />
                </button>
            </div>
        </div>
        <motion.h2 className="md:text-5xl font-light mb-6 text-center text-white text-3xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Featured Projects</motion.h2>
        <motion.div className='w-20 h-1 bg-linear-to-r from-indigo-400 to-purple-500 mx-auto rounded-2xl' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}></motion.div>
        <motion.h3 className="text-center text-gray-400 mt-4 mb-10 text-xl max-w-2xl mx-auto" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Here are some of my recent projects that showcase my skills in full-stack and mobile development.</motion.h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto'>
            {Object.values(projectsData)
                .sort((a, b) => new Date(b.createat) - new Date(a.createat))
                .map((project, index) => (
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}} key={index}>
                        <ProjectCard project={project} imageMode={project.imageMode} />
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default ProjectsPage