import React from 'react'
import aboutpic from "../../assets/aboutpic.png"
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold '>
        About
        </h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img className='md:h-80' src={aboutpic} alt="about img"/>
            <ul>
                <div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1" />
                <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>I’m Shiwan Bhandari, a passionate front-end developer specializing in crafting responsive, user-friendly interfaces with modern web technologies. With a strong foundation in HTML, CSS, JavaScript, and React, I bring designs to life, ensuring seamless user experiences</p>
                </span>



                </div>
                <div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1" />
                <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>I’m Shiwan Bhandari, a Python backend developer focused on building scalable, secure, and efficient server-side applications. I specialize in leveraging frameworks like Django and Flask to create seamless integrations and robust backend solutions.</p>
                </span>



                </div>
                <div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1" />
                <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frelance Developer</h1>
                <p className='text-sm md:text-md leading-tight'>Freelance Developer • Web Development • Self
Employed 
• Built and maintained websites for small 
businesses using HTML, CSS, and WordPress. 
• Implemented custom features and ensured 
mobile responsiveness for client websites. </p>
                </span>



                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
