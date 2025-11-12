import React, { useState } from "react";
import img from "./images/me1.jpeg";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex items-center space-x-3">
          <img src={img} alt="Profile" className="h-14 w-14 rounded-full border-2 border-purple-500"/>
          <h1 className="text-xl md:text-2xl font-semibold text-white">
            SAMVRUTHA <span className="text-purple-400">JAYARAJAN</span>
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="home" smooth={true} duration={600} offset={-80} className="text-slate-50 font-medium hover:text-purple-400 cursor-pointer"> Home </Link>
          <Link to="about" smooth={true} duration={600} offset={-80} className="text-slate-50 font-medium hover:text-purple-400 cursor-pointer">About</Link>
          <Link to="project" smooth={true} duration={600} offset={-80} className="text-slate-50 font-medium hover:text-purple-400 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={600} offset={-80} className="text-slate-50 font-medium hover:text-purple-400 cursor-pointer"> Contact</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm flex flex-col items-center space-y-6 py-8">
          <Link to="home" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="text-slate-50 text-lg font-medium hover:text-purple-400 cursor-pointer"> Home</Link>
          <Link to="about" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="text-slate-50 text-lg font-medium hover:text-purple-400 cursor-pointer"> About</Link>
          <Link to="project" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="text-slate-50 text-lg font-medium hover:text-purple-400 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="text-slate-50 text-lg font-medium hover:text-purple-400 cursor-pointer"> Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;