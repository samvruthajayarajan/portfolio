import React from 'react';
import img from './images/me1.jpeg';


const Navbar = () => {
  return (
   <div className='flex gap-[700px] fixed '>
         <div className='flex'>
           <img src={img} className='ps-2 h-16 w-16 rounded-full'></img>
           <h1 className='font-semibold text-xl text-start ps-2 text-slate-50'>SAMVRUTHA JAYARAJAN</h1>
         </div>
          <nav class="flex justify-center space-x-4 sticky top-0 py-4  ">
      <a href="#home" class="font-normal px-2 py-1 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900">HOME</a>
      <a href="#about" class="font-normal px-2 py-1 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900">ABOUT</a>
      <a href="#project" class="font-normal px-2 py-1 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900">PROJECTS</a>
      <a href="#contact" class="font-normal px-2 py-1 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900">CONTACT</a>
</nav>
         </div>
  )
}

export default Navbar