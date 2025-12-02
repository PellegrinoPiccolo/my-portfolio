'use client'
import React from 'react'
import projectsData from '../../public/projects.json'
import { motion, useInView } from 'framer-motion'
import ProjectCard from '../ProjectCard'
import { useRouter } from 'next/navigation'

const Projects = () => {

    const router = useRouter();

    const recentProjects = Object.values(projectsData)
        .sort((a, b) => new Date(b.createat) - new Date(a.createat))
        .slice(0, 6);

  return (
    <section id='projects' className='w-full mx-auto px-8 py-30 min-h-screen bg-background-secondary scroll-mt-20'>
      <motion.h2 className="md:text-5xl font-light mb-6 text-center text-white text-3xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>Featured Projects</motion.h2>
      <motion.div className='w-20 h-1 bg-linear-to-r from-indigo-400 to-purple-500 mx-auto rounded-2xl' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}></motion.div>
      <motion.h3 className="text-center text-gray-400 mt-4 mb-10 text-xl max-w-2xl mx-auto" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>Here are some of my recent projects that showcase my skills in full-stack and mobile development.</motion.h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto'>
        {recentProjects.map((project, index) => (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} key={index} viewport={{once: true}}>
            <ProjectCard project={project} imageMode={project.imageMode} />
          </motion.div>
        ))}
      </div>
      <motion.button onClick={() => {router.push('/projects')}} className='mt-12 px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors duration-300 mx-auto block cursor-pointer' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>
        View All Projects
      </motion.button>
    </section>
  )
}

export default Projects