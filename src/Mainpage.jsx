import React from 'react'
import Main from './Main'
import About from './About'
import Experience from './Experience'
import Navbar from './Navbar'
import Projects from './Projects'
import GetInTouch from './GetInTouch'
import Footer from './Footer'

const Mainpage = () => {
  return (
    <div>
      <Navbar/>
        <Main/>
        <About/>
        <Experience/>
        <Projects/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default Mainpage