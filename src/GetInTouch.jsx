import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      const response = await fetch("https://formspree.io/f/xykqzoyv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Failed to send message. Please try again.");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 bg-transparent bg-grid-purple text-white py-24 relative border-t border-white/5"
    >
      {/* Background Neon Orb */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[130px] animate-pulse-glow -z-10" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Work <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Feel free to reach out to me for collaboration, job opportunities, or simply to say hello!
          </p>
        </div>

        {/* Contact Section with Left Info and Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-white/10 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl -z-10" />
              
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href="mailto:samvruthajayarajan02@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-white/5 hover:border-purple-500/40 rounded-xl transition-all duration-300 hover:bg-slate-800/50 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-700/30 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-slate-300 text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <p className="text-white font-medium truncate">samvruthajayarajan02@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/samvrutha-jayarajan-b3497236a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-white/5 hover:border-purple-500/40 rounded-xl transition-all duration-300 hover:bg-slate-800/50 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-700/30 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedin className="text-slate-300 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                    <p className="text-white font-medium">Connect with me</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/samvruthajayarajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-white/5 hover:border-purple-500/40 rounded-xl transition-all duration-300 hover:bg-slate-800/50 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-700/30 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <FaGithub className="text-slate-300 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-400 mb-1">GitHub</p>
                    <p className="text-white font-medium">View my projects</p>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-900/40 border border-white/10 hover:border-purple-500/40 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl -z-10" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300 block text-left">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 block text-left">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 block text-left">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "Sending..."}
                  className="w-full px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "Sending..." ? "Sending..." : "Send Message"}
                </button>
                {status && status !== "Sending..." && (
                  <p className={`text-center mt-3 text-sm font-medium ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>
                    {status}
                  </p>
                )}
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
