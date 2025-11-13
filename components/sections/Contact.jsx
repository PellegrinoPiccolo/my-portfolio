'use client'
import { useInView, motion } from 'framer-motion';
import React from 'react'
import { LuSend } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                setStatus('Please enter a valid email address.');
                return;
            }
            if(name.trim() === '' || message.trim() === '') {
                setStatus('Please fill in all required fields.');
                return;
            }
            const response = await fetch('https://api.staticforms.dev/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message, apiKey: process.env.NEXT_PUBLIC_CONTACT_API_KEY }),
            });
            if (response.ok) {
                setStatus('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.error('Failed to send message:', response.statusText);
                setStatus('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('An error occurred. Please try again later.');
        }
    };

      const contactInfo = [
        {
            icon: <MdOutlineEmail className="w-5 h-5 text-indigo-500" />,
            label: 'Email',
            value: 'piccolopellegrino22@gmail.com',
            href: 'mailto:piccolopellegrino22@gmail.com',
        },
        {
            icon: <BsTelephone className="w-5 h-5 text-indigo-500" />,
            label: 'Phone',
            value: '+39 392 757 1897',
            href: 'tel:+393927571897',
        },
        {
            icon: <CiLocationOn className="w-5 h-5 text-indigo-500" />,
            label: 'Location',
            value: 'Montesarchio, Italy',
            href: null,
        },
    ];

    const socialLinks = [
        {
            icon: <RiGithubLine className="w-6 h-6 text-indigo-500 hover:text-white transition-colors duration-200" />,
            label: 'GitHub',
            value: '@piccolopellegrino',
            href: 'https://github.com/PellegrinoPiccolo',
        },
        {
            icon: <FiLinkedin className="w-6 h-6 text-indigo-500 hover:text-white transition-colors duration-200" />,
            label: 'LinkedIn',
            value: 'Pellegrino Piccolo',
            href: 'https://www.linkedin.com/in/pellegrino-piccolo-2a6739247?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        },
    ];

  return (
    <section className='w-full min-h-screen px-8 py-30 bg-background-secondary flex flex-col items-center' id="contact">
        <motion.h2 className="md:text-5xl font-light mb-6 text-center text-white text-3xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>Get In Touch</motion.h2>
        <motion.div className='w-20 h-1 bg-linear-to-r from-indigo-400 to-purple-500 mx-auto rounded-2xl' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}></motion.div>
        <motion.h3 className='text-center text-gray-400 mt-4 mb-10 text-xl max-w-2xl mx-auto' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{once: true}}>
            Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.h3>
        <div className='flex flex-col md:flex-row gap-6 items-start w-full justify-center'>
            <motion.form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full md:w-2xl' initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className='p-3 rounded-md bg-background-primary text-white border border-gray-600 focus:outline-none focus:border-indigo-400' />
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className='p-3 rounded-md bg-background-primary text-white border border-gray-600 focus:outline-none focus:border-indigo-400' />
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required className='p-3 rounded-md bg-background-primary text-white border border-gray-600 focus:outline-none focus:border-indigo-400 h-32 resize-none'></textarea>
                <button type="submit" className='bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2'>
                    Send Message <LuSend />
                </button>
                {status && <p className='text-sm text-gray-400 mt-2'>{status}</p>}
            </motion.form>
            <div className='w-full md:w-xl flex flex-col items-center justify-center'>
                <motion.div className='w-full bg-background-primary border border-gray-800 rounded-lg p-6' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>
                    <h2 className='text-white text-2xl'>Contact Info</h2>
                    <div className='flex flex-col gap-6 mt-6'>
                        {contactInfo.map((info, index) => (
                            <div key={index} className='space-y-4 text-gray-400'>
                                <div className='flex items-center gap-3'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-3'>
                                            {info.icon}
                                            <p className='text-white'>{info.label}:</p>
                                        </div>
                                        <a href={info.href} className='ml-8 hover:text-indigo-500 transition-colors duration-200 text-sm md:text-base'>{info.value}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div className='w-full bg-background-primary border border-gray-800 rounded-lg p-6 mt-6 flex flex-col gap-6' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>
                    <h2 className='text-white text-2xl'>Connect With Me</h2>
                    <div className='flex items-start gap-6 mt-4 flex-col'>
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-full bg-background-secondary hover:bg-background-primary border border-gray-800 rounded-md p-3 transition-colors duration-200'>
                                {social.icon}
                                <div className='flex flex-col'>
                                    <span className='text-white hover:text-indigo-500 transition-colors duration-200'>{social.label}</span>
                                    <span className='text-gray-400'>{social.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>
                <motion.div className='w-full bg-linear-to-tr from-indigo-500/20 to-purple-500/20 border border-gray-700 rounded-lg p-6 mt-6 gap-2 flex flex-col' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}}>
                    <p className='text-indigo-400 text-lg'>Available for freelance</p>
                    <p className='text-white text-base'>I'm currently available for freelance work and interesting project collaborations.</p>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Contact