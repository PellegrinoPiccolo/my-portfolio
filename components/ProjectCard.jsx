import React from 'react'
import { RiGithubLine } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";
import Badge from './Badge';

const ProjectCard = ({project}) => {

  const goToLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className='bg-background-primary rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ease-in-out'>
        <img src={project.image} alt={project.name} className='w-full h-48 object-cover'/>
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2 text-white'>{project.name}</h3>
            <p className='text-gray-300 mb-4 text-sm'>{project.description}</p>
            {project.technologies && (
                <div className='mb-4'>
                    <ul className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, index) => (
                            <Badge key={tech} variant="filled" className="rounded-[5px] w-auto h-auto hover:bg-indigo-900/30 transition-colors duration-300">
                              {tech}
                          </Badge>
                        ))}
                    </ul>
                </div>
            )}
            <div className='grid grid-cols-2 gap-4 mt-4 w-full'>
                {project.github && (
                  <button onClick={() => goToLink(project.github)} target='_blank' rel='noopener noreferrer' className='text-white gap-1 flex items-center flex-row w-full justify-center bg-gray-800 py-2 rounded cursor-pointer hover:bg-gray-700 transition-colors'>
                    <RiGithubLine size={20} />
                    Code
                  </button>
                )}
                <button onClick={() => goToLink(project.link)} target='_blank' rel='noopener noreferrer' className='text-white gap-1 flex items-center flex-row w-full justify-center bg-indigo-800 py-2 rounded cursor-pointer hover:bg-indigo-700 transition-colors'>
                  Open
                  <MdOutlineOpenInNew size={20} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard