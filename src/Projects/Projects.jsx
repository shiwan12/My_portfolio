import React from 'react'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard
        title='Blogging Website' main='this is bloggin website created in next js and used some component library '/>
         <ProjectCard
        title='youtube Clone' main='"This YouTube clone project recreates a video-sharing platform, allowing users to browse, search, and play videos in a responsive, interactive environment." '/>
         <ProjectCard
        title='Netflix clone' main="Built a Netflix clone to demonstrate my skills in creating engaging, high-performance web applications." />
        
      </div>
    </div>
  )
}

export default Projects
