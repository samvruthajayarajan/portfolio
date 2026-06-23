import React, { useState } from "react";
import img from './images/fragranzia.png';
import img1 from './images/portfolio.jpeg';
import img2 from './images/img3.png';
import img3 from './images/img4.png';
import { FaCodeBranch, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaBootstrap } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const techItems = [
    { 
      name: "HTML", 
      icon: <FaHtml5 className="text-[#f06529]" />, 
      glowClass: "hover:border-[#f06529]/50 hover:shadow-[0_0_20px_rgba(240,101,41,0.25)]" 
    },
    { 
      name: "CSS", 
      icon: <FaCss3Alt className="text-[#2965f1]" />, 
      glowClass: "hover:border-[#2965f1]/50 hover:shadow-[0_0_20px_rgba(41,101,241,0.25)]" 
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript className="text-[#f7df1e]" />, 
      glowClass: "hover:border-[#f7df1e]/50 hover:shadow-[0_0_20px_rgba(247,223,30,0.25)]" 
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss className="text-[#06b6d4]" />, 
      glowClass: "hover:border-[#06b6d4]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]" 
    },
    { 
      name: "Bootstrap", 
      icon: <FaBootstrap className="text-[#7952b3]" />, 
      glowClass: "hover:border-[#7952b3]/50 hover:shadow-[0_0_20px_rgba(121,82,179,0.25)]" 
    },
    { 
      name: "Express JS", 
      icon: <SiExpress className="text-slate-300" />, 
      glowClass: "hover:border-slate-500/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" 
    },
    { 
      name: "Node JS", 
      icon: <FaNodeJs className="text-[#339933]" />, 
      glowClass: "hover:border-[#339933]/50 hover:shadow-[0_0_20px_rgba(51,153,51,0.25)]" 
    },
    { 
      name: "React", 
      icon: <FaReact className="text-[#61dafb]" />, 
      glowClass: "hover:border-[#61dafb]/50 hover:shadow-[0_0_20px_rgba(97,218,251,0.25)]" 
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="text-[#47a248]" />, 
      glowClass: "hover:border-[#47a248]/50 hover:shadow-[0_0_20px_rgba(71,162,72,0.25)]" 
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="text-white" />, 
      glowClass: "hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" 
    },
  ];

  return (
    <section 
      id="project" 
      className="min-h-screen bg-transparent bg-grid-purple text-white py-24 px-6 md:px-12 relative overflow-hidden border-t border-white/5"
    >
      {/* Background neon orb */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse-glow -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[120px] animate-pulse-glow -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Showcase of Excellence: <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
              Featured Projects & Skills
            </span>
          </h2>
        </div>

        {/* Sliding Pill Tab Switch */}
        <div className="flex bg-slate-900/40 p-1.5 rounded-full max-w-[320px] mx-auto border border-white/5 relative z-10 mb-16 shadow-lg backdrop-blur-sm">
          <button 
            onClick={() => setActiveTab("projects")}
            className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 w-1/2 cursor-pointer ${
              activeTab === "projects"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FaCodeBranch />
            Projects
          </button>

          <button 
            onClick={() => setActiveTab("skill")}
            className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 w-1/2 cursor-pointer ${
              activeTab === "skill"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <RiStackLine />
            Skills
          </button>
        </div>

        {/* Dynamic content area */}
        <div className="relative z-10">
          
          {/* Projects View */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-2">
              {[
                {
                  name: "Fragranzia",
                  img: img,
                  description: "Fragranzia is a sleek online perfume store that lets users explore and purchase premium fragrances effortlessly.",
                  link: "https://samvruthajayarajan.github.io/Fragranzia/",
                  tags: ["HTML", "CSS", "JS", "Bootstrap"]
                },
                {
                  name: "Portfolio",
                  img: img1,
                  description: "A personal portfolio website showcasing my skills, projects and journey as a web developer.",
                  link: "https://portfolio-cjpk.vercel.app/",
                  tags: ["React", "Tailwind CSS", "React Scroll"]
                },
                {
                  name: "Weather App",
                  img: img2,
                  description: "A modern weather application that fetches and displays real-time weather data for cities worldwide.",
                  link: "https://weatherapp-azure-nine.vercel.app/",
                  tags: ["React", "Weather API", "Tailwind"]
                },
                {
                  name: "Movie App",
                  img: img3,
                  description: "A movie app that displays trending, popular, and search-based movies using real-time API data.",
                  link: "https://movie-app-six-iota-35.vercel.app/",
                  tags: ["React", "TMDB API", "Tailwind CSS"]
                }
              ].map((project, index) => (
                <div 
                  key={index} 
                  className="bg-slate-900/20 border border-white/5 hover:border-purple-500/35 rounded-3xl p-5 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image with zoom hover effect */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950/80 mb-5 border border-white/5">
                      <img 
                        src={project.img} 
                        alt={`${project.name} Preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full border border-purple-500/10 bg-purple-500/5 text-purple-300 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full"
                    >
                      <button className="w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills View */}
          {activeTab === "skill" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {techItems.map((tech, index) => (
                <div 
                  key={index} 
                  className={`bg-slate-900/30 border border-white/5 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 shadow-md transition-all duration-300 group ${tech.glowClass}`}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-base font-bold text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Projects;