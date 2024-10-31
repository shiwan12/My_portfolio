import React from 'react'
import './index.css'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>

    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default App
