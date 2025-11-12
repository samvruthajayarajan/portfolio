import React from "react";
import img from "./images/me1.jpeg";
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-3">
          <img src={img} alt="Profile"className="h-14 w-14 rounded-full border-2 border-purple-500"/>
          <h1 className="text-xl font-semibold text-white">
            SAMVRUTHA <span className="text-purple-400">JAYARAJAN</span>
          </h1>
        </div>
        <nav className="flex space-x-6">
  <Link to="home" smooth={true} duration={600} offset={-80} className="text-slate-50 font-medium hover:text-purple-400 cursor-pointer">Home</Link>
  <Link to="about" smooth={true} duration={600} offset={-80} className="text-slate-50 font-medium hover:text-purple-400 cursor-pointer">About</Link>
  <Link to="project" smooth={true} duration={600} offset={-80} className="text-slate-50 font-medium hover:text-purple-400 cursor-pointer"> Projects</Link>
  <Link to="contact" smooth={true} duration={600} offset={-80} className="text-slate-50 font-medium hover:text-purple-400 cursor-pointer" > Contact</Link>
</nav>
      </div>
    </header>
  );
};

export default Navbar;