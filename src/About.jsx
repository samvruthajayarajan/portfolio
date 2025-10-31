import React from 'react'
import img from './images/profile.jpg';
const About = () => {
  return (
    <>
    <div>
    <div id='about' className='bg-gradient-to-r from-black via-blue-900 to-cyan-800 text-slate-300 ps-5 h-screen place-content-center' >
       <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-10 py-10">
  <div className="flex-1 text-left">
    <h1 className="font-semibold text-4xl mb-5 text-slate-100">ABOUT ME</h1>
    <p className="font-thin leading-relaxed text-slate-100">
      Here you will find more information about me, what I do, and my current
      skills mostly in terms of programming and technology. I’m a dedicated and
      detail-oriented Full Stack Developer in training, currently pursuing my
      studies while interning in MERN stack development. My passion lies in
      building efficient, scalable, and user-centric web applications.
    </p>
  </div>

  <div className="flex-1">
    <h2 className="text-3xl font-semibold mb-4 text-left">Skills</h2>
    <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-700">
      <span className="bg-gray-200 px-3 py-1 rounded-full ">HTML</span>
      <span className="bg-gray-200 px-3 py-1 rounded-full">CSS</span>
      <span className="bg-gray-200 px-3 py-1 rounded-full">JavaScript</span>
      <span className="bg-gray-200 px-3 py-1 rounded-full">React</span>
      <span className="bg-gray-200 px-3 py-1 rounded-full">GitHub</span>
      <span className="bg-gray-200 px-3 py-1 rounded-full">Responsive Design</span>
      <span className="bg-gray-200 px-3 py-1 rounded-full">Python</span>
    </div>
  </div>
</div>
    </div>
    </div>
    </>
  )
}

export default About