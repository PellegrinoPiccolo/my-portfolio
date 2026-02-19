import React from 'react'
import { RiGithubLine } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";
import Badge from './Badge';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectCard = ({project, imageMode}) => {

  const goToLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <PhotoProvider>
      <div className='bg-background-primary rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ease-in-out h-full'>
          <PhotoView src={project.image}>
            <img src={project.image} alt={project.name} className={`w-full h-48 cursor-pointer ${imageMode === 'contain' ? 'object-contain' : 'object-cover'}`}/>
          </PhotoView>
          <div className='p-6 flex flex-col justify-between h-[calc(100%-12rem)]'>
              <div className='flex flex-col h-full'>
                <h3 className='text-xl font-semibold mb-2 text-white truncate'>{project.name}</h3>
                <p className='text-indigo-400 mb-4 text-sm'>{project.createdAt ? new Date(project.createdAt).toLocaleDateString() : 'Unknown Date'}</p>
                <p className='text-gray-300 mb-4 text-sm'>{project.description}</p>
              </div>
              <div className='w-full flex flex-col gap-0'>
                {project.technologies && (
                    <div>
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
                    {project.link && (
                      <button onClick={() => goToLink(project.link)} target='_blank' rel='noopener noreferrer' className='text-white gap-1 flex items-center flex-row w-full justify-center bg-indigo-800 py-2 rounded cursor-pointer hover:bg-indigo-700 transition-colors'>
                        Open
                        <MdOutlineOpenInNew size={20} />
                      </button>
                    )}
                </div>
              </div>
          </div>
      </div>
    </PhotoProvider>
  )
}

export default ProjectCard