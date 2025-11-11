'use client'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import Badge from './Badge';
import { FaCode } from "react-icons/fa6";
import { CiMobile1 } from "react-icons/ci";
import { IoServerOutline } from "react-icons/io5";
import Card from './Card';

const About = () => {

    const aboutRef = React.useRef(null);
    const isInView = useInView(aboutRef, { once: true, margin: "-50px" });

    const technologies = [
        'JavaScript',
        'React',
        'Node.js',
        'Express',
        'Next.js',
        'React Native',
        'Python',
        'Django',
        'MySQL',
        'Git',
        'Docker',
        'PostgreSQL',
    ];

    const cardElement = [
        {
            title: "Web Development",
            text: "Building responsive and dynamic web applications using modern frameworks and technologies.",
            icon: <FaCode size={30} className="text-indigo-500 mb-4" />,
            position: "bottom",
        },
        {
            title: "Mobile Development",
            text: "Creating cross-platform mobile applications with seamless user experiences.",
            icon: <CiMobile1 size={30} className="text-indigo-500 mb-4" />,
            position: "bottom",
        },
        {
            title: "Backend Development",
            text: "Designing and implementing robust backend systems and APIs for scalable applications.",
            icon: <IoServerOutline size={30} className="text-indigo-500 mb-4" />,
            position: "bottom",
        },
    ]

  return (
    <section id="about" className="w-full mx-auto px-8 py-30 min-h-screen bg-background-primary scroll-mt-20" ref={aboutRef}>
        <motion.h2 className="md:text-5xl font-light mb-6 text-center text-white text-3xl" initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>About Me</motion.h2>
        <motion.div className='w-20 h-1 bg-linear-to-r from-indigo-400 to-purple-500 mx-auto rounded-2xl' initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}></motion.div>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center my-16 '>
            <motion.div
                className='w-full rounded-3xl overflow-hidden relative shadow-[0_0_30px_rgba(99,102,241,0.5)]'
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{duration: 0.3}}
            >   
                <img src='/about.jpg' alt='About Me' className='relative size-full rounded-3xl object-cover mx-auto'/>
            </motion.div>
            <motion.div
                className='text-white md:text-lg leading-relaxed w-full md:ml-10'
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3 }}
            >
                <p className='mb-4 text-gray-300'>
                    I'm a passionate full-stack and mobile developer with over 5 years of experience building digital products. I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
                <p className='mb-4 text-gray-300'>
                    When I'm not coding, I enjoy exploring emerging technologies, experimenting with new tools, and learning about innovative approaches to problem-solving in software development. I’m always curious about how technology evolves and how it can be applied to create smarter, more efficient solutions.
                </p>
                <div className="flex flex-wrap gap-2 mt-10">
                    <h2 className="w-full text-xl font-medium mb-2">Key Technologies</h2>
                    {technologies.map((tech) => (
                        <Badge key={tech} variant="outlined" className="rounded-[5px] w-auto h-auto hover:bg-indigo-900/30 transition-colors duration-300">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </motion.div>
        </div>
        <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-20'>
            {cardElement.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <Card
                        title={card.title}
                        text={card.text}
                        icon={card.icon}
                        position={card.position}
                    />
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default About