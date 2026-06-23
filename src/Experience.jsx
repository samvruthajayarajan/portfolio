import React from "react";

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="min-h-screen relative bg-transparent overflow-hidden py-24 px-6 md:px-12 border-t border-white/5"
    >
      {/* Background Glowing Orb */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-glow -z-10" />
      
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 inline-block">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent"></div>
          
          {/* Timeline Dot */}
          <div className="absolute left-2 md:left-6 top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-slate-900 shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-pulse"></div>

          {/* Experience Content */}
          <div className="ml-12 md:ml-20 relative">
            
            {/* Background gradient effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl -z-10" />
            
            {/* Title Section */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Full-Stack Intern
              </h3>
              <p className="text-slate-400 text-base md:text-lg mb-3">
                MERN Stack Development
              </p>
              <div className="flex flex-wrap gap-3 text-base text-slate-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Feb 2026 - May 2026
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Calicut, India
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" clipRule="evenodd" />
                  </svg>
                  Onsite
                </span>
              </div>
            </div>

            {/* Bullet Points with Animation */}
            <div className="space-y-3">
              
              <div className="flex items-start gap-3 opacity-0 animate-fade-in-down hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Developed responsive and user-centric web applications.
                </p>
              </div>

              <div className="flex items-start gap-3 opacity-0 animate-fade-in-down hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Implemented full-stack solutions using the MERN stack.
                </p>
              </div>

              <div className="flex items-start gap-3 opacity-0 animate-fade-in-down hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Contributed to the delivery of real-world business projects.
                </p>
              </div>

              <div className="flex items-start gap-3 opacity-0 animate-fade-in-down hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Supported ERP system development and customization.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Experience;
