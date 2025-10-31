import React from 'react';
import img1 from './images/grayclr.jpg';
import { FaLinkedin, FaGithub} from "react-icons/fa";

const Main = () => {
  return (
    <>
    
    <div id='home' className="bg-gradient-to-r from-black via-blue-900 to-cyan-800 text-slate-300 h-screen w-screen flex flex-col justify-center items-center text-center" >
         <h1 className="font-semibold text-4xl">HEY, I'M SAMVRUTHA</h1>
      <h1 className="font-semibold text-4xl py-3">JAYARAJAN</h1>
      <div className="mt-4">
        <h4 className="font-normal">
         I'm a Web developer who turns ideas into interactive realities. <br></br> With every project i aim to make the web faster, and <br></br>smarter.
        </h4>
      </div>

      <div className="flex justify-center items-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/samvrutha-jayarajan-b3497236a"target="_blank"rel="noopener noreferrer"className="hover:text-blue-600 text-slate-900 text-3xl transition cursor-pointer">
          <FaLinkedin color='white'/>
        </a>
        <a
          href="https://github.com/samvruthajayarajan"target="_blank"rel="noopener noreferrer"className="hover:text-gray-600 text-slate-900 text-3xl transition cursor-pointer">
          <FaGithub color='white'/>
        </a>
      </div>
    </div>
  </>
  )
}

export default Main