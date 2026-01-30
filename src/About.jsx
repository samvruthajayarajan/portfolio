import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen  flex flex-col items-center justify-center px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 text-center">About Me</h2>

      <p className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed mb-10">
        Hello, I'm{" "} <span className="font-semibold text-purple-300">Samvrutha Jayarajan </span>{" "}
        — Here you will find more information about me, what I do, and my
        current skills mostly in terms of programming and technology. I’m a
        dedicated and detail-oriented Full Stack Developer in training,
        currently pursuing my studies while interning in MERN stack development.
        My passion lies in building efficient, scalable, and user-centric web
        applications. </p>

      <div className="mb-14">
        <a href ="Projects">
      <button className="px-8 py-3 border border-purple-400 rounded-lg hover:bg-purple-800/30 font-semibold transition-all duration-200"> View Projects </button>
      </a>
      </div>
    </section>
  );
};

export default About;
