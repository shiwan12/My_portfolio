import React from 'react'
import portfolioImg from "../../assets/portfoliopic.jpg"
//import TextChange from "../TextChange";
const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:20'>
      <div className='md: w-2/4 md:pt-10'>
    <h1 className='text-xl md:text-6xl font-bold leading-normal tracking-tighter '>
        Hello' I am Shiwan
    </h1>
    <p className='text-sm md:text-2xl tracking-tight'>Welcome to Shiwan Bhandari's portfolio, an IT professional and front-end developer dedicated to building efficient, visually appealing, and responsive web solutions. </p>
    <button className='mt-5 md:mt-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'> Contact Me</button>
      </div>
      <div><img className='' src={portfolioImg} alt=""></img></div>
    </div>
  )
}

export default Home
