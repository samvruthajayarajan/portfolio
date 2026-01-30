import React from "react";
import {  FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <section id="home" className=" min-h-screen  flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r  from-gray-900 via-gray-800 to-black">
      <div className="max-w-2xl">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-white">
          HEY, I'M <span className="text-purple-400">SAMVRUTHA</span>
        </h1>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-white py-3">
          JAYARAJAN
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl mt-4 leading-relaxed">
          I'm a Web Developer who turns ideas into interactive realities. <br />
          With every project, I aim to make the web faster and smarter.
        </p>

        <div className="flex justify-center gap-6 mt-10 text-3xl text-gray-300">
          <a
          href="https://www.linkedin.com/in/samvrutha-jayarajan-b3497236a"target="_blank"rel="noopener noreferrer">
          <FaLinkedin className="hover:text-purple-400 cursor-pointer transition-colors duration-200" />
          </a>
          
          <a
          href="https://github.com/samvruthajayarajan"target="_blank"rel="noopener noreferrer">
          <FaGithub className="hover:text-purple-400 cursor-pointer transition-colors duration-200" />
          </a>
       
        </div>
      </div>
    </section>
  );
};

export default Main;
