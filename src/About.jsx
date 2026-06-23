import React from "react";

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-[60vh] relative bg-transparent overflow-hidden py-24 px-6 md:px-12 border-t border-white/5 flex items-center justify-center"
    >
      {/* Background Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] animate-pulse-glow -z-10" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 inline-block">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Get To Know <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">More About Me</span>
          </h2>
        </div>

        {/* About Content - Simple 4 Lines */}
        <div className="text-slate-300 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
          <p className="mb-4">
            I'm a passionate Full-Stack Developer specializing in the MERN stack, dedicated to building efficient and user-centric web applications.
            Currently pursuing my studies while gaining hands-on experience through internships in web development.
          </p>
          
          <p>
            I believe in writing clean, maintainable code and creating intuitive user experiences that solve real-world problems.
            Always eager to learn new technologies and contribute to innovative projects that make a difference.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
