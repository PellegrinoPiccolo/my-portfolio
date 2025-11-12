'use client'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode } from "react-icons/fa6";
import { CiMobile1 } from "react-icons/ci";
import { LuServer } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";
import { CiCloud } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { FiGitBranch } from "react-icons/fi";

const Skills = () => {

    const skillsRef = React.useRef(null);
    const isInView = useInView(skillsRef, { once: true, margin: "-50px" });

    const technologies = [
        { name: 'React', icon: <FaCode className='text-indigo-400 w-6 h-6' /> },
        { name: 'Node.js', icon: <LuServer className='text-indigo-400 w-6 h-6' /> },
        { name: 'React Native', icon: <CiMobile1 className='text-indigo-400 w-6 h-6' /> },
        { name: 'PostgreSQL', icon: <LuDatabase className='text-indigo-400 w-6 h-6' /> },
        { name: 'Javascript', icon: <FaCode className='text-indigo-400 w-6 h-6' /> },
        { name: 'Render', icon: <CiCloud className='text-indigo-400 w-6 h-6' /> },
        { name: 'Next.js', icon: <FiLayout className='text-indigo-400 w-6 h-6' />},
        { name: 'Git', icon: <FiGitBranch className='text-indigo-400 w-6 h-6' />},
    ];

    const skillCategories = [
        {
            category: 'Frontend',
            icon: <FiLayout className="text-indigo-400 w-6 h-6" />,
            skills: [
                { name: 'React / Next.js', level: 95 },
                { name: 'Javascript', level: 90 },
                { name: 'Tailwind CSS', level: 92 },
                { name: 'Redux / State Management', level: 88 },
            ],
        },
        {
            category: 'Mobile',
            icon: <CiMobile1 className="text-indigo-400 w-6 h-6" />,
            skills: [
                { name: 'Expo', level: 80 },
                { name: 'React Native CLI', level: 90 },
                { name: 'iOS / Android', level: 70 },
                { name: 'Firebase', level: 88 },
            ],
        },
        {
            category: 'Backend',
            icon: <LuServer className="text-indigo-400 w-6 h-6" />,
            skills: [
                { name: 'Node.js / Express', level: 93 },
                { name: 'RESTful APIs', level: 95 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'Microservices', level: 85 },
            ],
        },
        {
        category: 'Database',
        icon: <LuDatabase className="text-indigo-400 w-6 h-6" />,
        skills: [
            { name: 'MySQL', level: 90 },
            { name: 'PostgreSQL', level: 88 },
            { name: 'Sequelize', level: 90 },
            { name: 'MongoDB', level: 60 },
        ],
        },
        {
            category: 'DevOps',
            icon: <CiCloud className="text-indigo-400 w-6 h-6" />,
            skills: [
                { name: 'AWS', level: 70 },
                { name: 'Docker', level: 85 },
                { name: 'CI/CD Pipelines', level: 70 },
                { name: 'Render', level: 90 },
            ],
        },
        {
            category: 'Tools & Other',
            icon: <FiGitBranch className="text-indigo-400 w-6 h-6" />,
            skills: [
                { name: 'Git / GitHub', level: 95 },
                { name: 'VS Code / IDEs', level: 92 },
                { name: 'Agile / Scrum', level: 88 },
                { name: 'Testing (Jest, Cypress)', level: 70 },
            ],
        },
    ];

  return (
    <div id="skills" className='w-full min-h-screen px-8 py-30 bg-background-primary flex flex-col items-center' ref={skillsRef}>
        <motion.h2 className="md:text-5xl font-light mb-6 text-center text-white text-3xl" initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>Skills & Expertise</motion.h2>
        <motion.div className='w-20 h-1 bg-linear-to-r from-indigo-400 to-purple-500 mx-auto rounded-2xl' initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}></motion.div>
        <motion.h3 className='text-center text-gray-400 mt-4 mb-10 text-xl max-w-2xl mx-auto' initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            My technical toolkit spans across modern web and mobile technologies
        </motion.h3>
        <motion.div className='flex flex-wrap justify-center gap-8 mb-16' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
            {technologies.map((tech, index) => (
                <motion.div key={index} className='flex flex-col items-center gap-2 group' initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <div className='w-16 h-16 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-indigo-400 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all duration-300'>
                        {tech.icon}
                    </div>
                    <span className='text-xs md:text-sm text-gray-400 group-hover:text-indigo-400 transition-colors m-0'>{tech.name}</span>
                </motion.div>
            ))}
        </motion.div>
        <motion.div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }}>
            {skillCategories.map((category, index) => (
                <motion.div key={index} className='bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-indigo-800 transition-colors duration-200' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.2 }}>
                    <div className='flex items-center gap-3 mb-4'>
                        {category.icon}
                        <h4 className='text-lg font-medium text-white'>{category.category}</h4>
                    </div>
                    <div className='space-y-4'>
                        {category.skills.map((skill, idx) => (
                            <div key={idx}>
                                <div className='flex justify-between mb-1'>
                                    <span className='text-sm text-gray-400'>{skill.name}</span>
                                    <span className='text-sm text-gray-400'>{skill.level}%</span>
                                </div>
                                <div className='w-full bg-gray-800 rounded-full h-3'>
                                    <div className='bg-indigo-400 h-3 rounded-full' style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Skills