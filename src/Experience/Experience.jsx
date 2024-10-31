import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
      <div className='flex flex-wrap items-center justify-around'>
        {/* Technologies Section */}
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>
        
        {/* Experience Section */}
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          <FaGoogle color='#4285F4' size={50} />
          <span className='text-white'>
            <h2 className='leading-tight'>Software Engineer, Google</h2>
            <p className='text-sm leading-tight font-thin'>Sept 2023 - Present</p>
            <ul className='text-sm p-2'>
              <li>Work as a software developer</li>
              <li>Junior SDE-developer</li>
            </ul>
          </span>
        </div>
        
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          <RiNetflixFill color='#E50914' size={50} />
          <span className='text-white'>
            <h2 className='leading-tight'>Software Engineer, Netflix</h2>
            <p className='text-sm leading-tight font-thin'>Jan 2022 - Sept 2023</p>
            <ul className='text-sm p-2'>
              <li>Worked on video streaming optimization</li>
              <li>Led a small team of developers</li>
            </ul>
          </span>
        </div>

        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          <FaAmazon color='#FF9900' size={50} />
          <span className='text-white'>
            <h2 className='leading-tight'>Software Engineer, Amazon</h2>
            <p className='text-sm leading-tight font-thin'>Jul 2020 - Jan 2022</p>
            <ul className='text-sm p-2'>
              <li>Developed features for the AWS cloud platform</li>
              <li>Collaborated with cross-functional teams</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
