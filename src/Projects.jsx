import React from 'react'
import img from './images/fragranzia.png';
const Projects = () => {
  return (
   <>
    <div id='project' className="bg-gradient-to-r from-black via-blue-900 to-cyan-800 text-slate-300 h-screen w-screen flex flex-col justify-center items-center bg-no-repeat bg-cover text-center" >
         <h1 className="font-semibold text-4xl text-slate-100">PROJECTS</h1>
      <div className="mt-4">
        <h4 className="font-thin text-slate-100">
            Here you will find some of the personal and clients projects that i created with<br></br>each project containing its own case study
        </h4>
        <br></br>
        {/* <div> */}
        <div className='flex-1 justify-center'>
          <img src={img} className='h-52 w-72 rounded-lg shadow-lg'></img>
        </div>
        {/* <div className='flex-1 max-w-lg'>
          <h4 className='text-2xl font-semibold mb-3'>FRAGRANZIA</h4>
        </div> */}
        {/* </div> */}
      </div>
      </div>
</>
  )
}

export default Projects