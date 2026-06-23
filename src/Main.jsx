import React from "react";
import { Link } from "react-scroll";

const Main = () => {

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-transparent overflow-hidden pt-20 pb-20 md:pt-28 md:pb-0"
    >

      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-1/3 left-10 md:left-24 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[130px] animate-pulse-glow -z-10" />
      <div className="absolute bottom-1/4 right-10 md:right-24 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-pink-500/10 rounded-full blur-[100px] md:blur-[130px] animate-pulse-glow -z-10" />

      {/* Content container — centered */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Text Content */}
        <div className="max-w-3xl space-y-6 md:space-y-8 flex flex-col items-center">

          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-medium text-slate-400 tracking-wide">
              HEY, I'M
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              SAMVRUTHA <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent text-glow-purple">
                JAYARAJAN
              </span>
            </h1>
          </div>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
            I'm a Web Developer who turns ideas into interactive realities. 
            With every project, I aim to make the web faster, smarter, and visually stunning.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
            <Link 
              to="project" 
              smooth={true} 
              duration={600} 
              offset={-80}
              className="px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
            >
              View My Work
            </Link>

            <Link 
              to="contact" 
              smooth={true} 
              duration={600} 
              offset={-80}
              className="px-8 py-3.5 rounded-full text-base font-semibold text-slate-300 hover:text-white bg-slate-900/60 border border-slate-700/60 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Let's Talk
            </Link>
          </div>


        </div>

      </div>
    </section>
  );
};

export default Main;
