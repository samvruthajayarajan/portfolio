import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-16 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider">
            SAMVRUTHA <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">JAYARAJAN</span>
          </h2>
          <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
            I'm a Web Developer who turns ideas into interactive realities. <br />
            With every project, I aim to make the web faster, smarter, and visually stunning.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Social Links
          </h3>
          <div className="flex gap-4 text-2xl">
            <a 
              href="https://www.linkedin.com/in/samvrutha-jayarajan-b3497236a" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0077b5] transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/samvruthajayarajan" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-xs md:text-sm">
        © Copyright {new Date().getFullYear()}. Made with 💜 by{" "}
        <span className="text-slate-300 font-bold hover:text-white transition-colors">Samvrutha Jayarajan</span>
      </div>
    </footer>
  );
};

export default Footer;