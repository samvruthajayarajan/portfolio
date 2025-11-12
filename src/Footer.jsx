import React from "react";
import { FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <h2 className="text-xl font-bold mb-3">SAMVRUTHA JAYARAJAN</h2>
          <p className="text-gray-400 max-w-md">
            I'm a Web developer who turns ideas into interactive realities. <br></br> With every project i aim to make the web faster, and smarter.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">SOCIAL</h3>
          <div className="flex gap-5 text-2xl">
          <a href="https://www.linkedin.com/in/samvrutha-jayarajan-b3497236a" className="hover:text-blue-500">
              <FaLinkedin />
          </a>
          <a href="https://github.com/samvruthajayarajan" className="hover:text-gray-400">
              <FaGithub />
          </a>
           
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © Copyright {new Date().getFullYear()}. Made by{" "}
        <span className="text-white font-semibold">Samvrutha Jayarajan</span>
      </div>
    </footer>
  );
};

export default Footer;