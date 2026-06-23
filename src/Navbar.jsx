import React, { useState, useEffect } from "react";
import img from "./images/me1.jpeg";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/60 backdrop-blur-md border-b border-white/10 shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src={img} alt="Profile" className="h-10 w-10 rounded-full border border-purple-500/80 object-cover shadow-[0_0_10px_rgba(168,85,247,0.3)]"/>
          <span className="text-lg md:text-xl font-bold tracking-wider text-white">
            SAMVRUTHA <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">JAYARAJAN</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="home" smooth={true} duration={600} offset={-80} className="text-slate-300 font-medium hover:text-white transition-colors duration-200 cursor-pointer relative py-1 group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#a855f7]"></span>
          </Link>
          <Link to="about" smooth={true} duration={600} offset={-80} className="text-slate-300 font-medium hover:text-white transition-colors duration-200 cursor-pointer relative py-1 group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#a855f7]"></span>
          </Link>
          <Link to="experience" smooth={true} duration={600} offset={-80} className="text-slate-300 font-medium hover:text-white transition-colors duration-200 cursor-pointer relative py-1 group">
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#a855f7]"></span>
          </Link>
          <Link to="project" smooth={true} duration={600} offset={-80} className="text-slate-300 font-medium hover:text-white transition-colors duration-200 cursor-pointer relative py-1 group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#a855f7]"></span>
          </Link>
          
          <Link to="contact" smooth={true} duration={600} offset={-80} className="ml-4 px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 border border-purple-500/30 hover:border-pink-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl hover:text-purple-400 transition-colors">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-white/10 flex flex-col items-center space-y-6 py-8 animate-fade-in">
          <Link to="home" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="text-slate-300 text-lg font-medium hover:text-white cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="text-slate-300 text-lg font-medium hover:text-white cursor-pointer">About</Link>
          <Link to="experience" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="text-slate-300 text-lg font-medium hover:text-white cursor-pointer">Experience</Link>
          <Link to="project" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="text-slate-300 text-lg font-medium hover:text-white cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={600} offset={-80} onClick={closeMenu} className="px-8 py-2.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
