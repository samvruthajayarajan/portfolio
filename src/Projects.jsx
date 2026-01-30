import React, { useState } from "react";
import img from './images/fragranzia.png';
import img1 from './images/portfolio.jpeg';
import img2 from './images/img3.png';
import img3 from './images/img4.png';
import {FaCodeBranch,FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaGithub,FaBootstrap,} from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import {SiJavascript,SiTailwindcss,SiExpress,SiMongodb,} from "react-icons/si";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const techItems = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <section id="project" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-10">
          <button onClick={() => setActiveTab("projects")}className={`flex items-center gap-2 px-8 py-3 rounded-2xl transition-all duration-300 ${activeTab === "projects"? "bg-purple-600 text-white shadow-lg shadow-purple-500/40": "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}>
            <FaCodeBranch />
            Projects
          </button>

          <button onClick={() => setActiveTab("skill")}className={`flex items-center gap-2 px-8 py-3 rounded-2xl transition-all duration-300 ${activeTab === "skill"? "bg-purple-600 text-white shadow-lg shadow-purple-500/40": "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}>
            <RiStackLine />
            Skills
          </button>
        </div>

        <div className="mt-10">
  {activeTab === "projects" && (
    <div className="flex flex-col sm:flex-row sm:overflow-x-auto gap-6 justify-center px-4">
      {[
        {
          name: "Fragranzia",
          img: img,
          description:
          "Fragranzia is a sleek online perfume store that lets users explore and purchase premium fragrances effortlessly.",
        },
        {
          name: "Portfolio",
          img: img1,
          description:
          "A personal portfolio websites showcasing my skills , projects and journey as a web developer.",
        },
        {
          name: "Weather App",
          img: img2,
          description:
          "A modern weather application that fetches and displays real-time weather data for cities worldwide."
        },
        {
          name: "Movie App",
          img: img3,
          description:
          "A movie app that displays trending, popular, and search-based movies using real-time API data."
        }
        
      ].map((project, index) => (
        <div key={index} className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-sm text-left hover:shadow-purple-500/30 transition-all duration-300">
          <img src={project.img} alt={`${project.name} Preview`}className="rounded-lg mb-4"/>
          <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        </div>
      ))}
    </div>
  )}


  {activeTab === "skill" && (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8">
      {techItems.map((tech, index) => (
        <div key={index} className="bg-gray-800 bg-opacity-50 hover:bg-opacity-80 border border-gray-700  hover:border-cyan-400 transition-all duration-300 rounded-2xl flex flex-col items-center justify-center p-6 shadow-md hover:shadow-cyan-500/30">
          <div className="text-5xl mb-3">{tech.icon}</div>
            <p className="text-lg font-semibold">{tech.name}</p>
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