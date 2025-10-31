import React from 'react'
import Main from './Main'
import About from './About'
import Navbar from './Navbar'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Mainpage = () => {
  return (
    <div>
      <Navbar/>
        <Main/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Mainpage