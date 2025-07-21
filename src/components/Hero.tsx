import { ChevronDown, User, Sparkles, Code, Zap, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-2 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 cursor-default">
              <Sparkles size={16} className="mr-2 animate-pulse" />
              Available for opportunities
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                  Vinod
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-xl md:text-2xl text-gray-600">
                <Code size={24} className="text-blue-600" />
                <span>Aspiring Software Engineer</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-xl md:text-2xl text-gray-600">
                <Zap size={24} className="text-purple-600" />
                <span>Web Developer | Java Enthusiast</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
              Crafting modern web solutions with{' '}
              <span className="text-blue-600 font-semibold">code</span>,{' '}
              <span className="text-purple-600 font-semibold">creativity</span>, and{' '}
              <span className="text-indigo-600 font-semibold">commitment</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 font-semibold text-lg"
              >
                <span className="flex items-center justify-center">
                  Get in touch
                  <Sparkles size={18} className="ml-2 group-hover:animate-spin" />
                </span>
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 font-semibold text-lg"
              >
                View my work
                <Code size={18} className="inline ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              <a 
                href="/resume.pdf" 
                download="Vinod_Resume.pdf"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 font-semibold text-lg"
              >
                <span className="flex items-center justify-center">
                  Download Resume
                  <Download size={18} className="ml-2 group-hover:animate-bounce" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Picture Area */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main Profile Circle with enhanced styling */}
              <div className="w-96 h-96 mx-auto bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-80 h-80 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-inner border border-white/50">
                  <div className="w-72 h-72 bg-gradient-to-br from-gray-50 to-white rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                      alt="Profile Picture"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Labels with modern styling */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl animate-float border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">BCA Student</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 font-medium">CGPA: 8.57</p>
              </div>

              <div className="absolute bottom-12 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl animate-float border border-white/50 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Java Developer</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 font-medium">+ DevOps</p>
              </div>

              <div className="absolute top-1/2 -left-4 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl animate-float border border-white/50 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Full Stack</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 font-medium">Web Developer</p>
              </div>

              <div className="absolute top-1/3 right-0 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl animate-float border border-white/50 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Problem Solver</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 font-medium">Creative Thinker</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-600 transition-all duration-300"
          >
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll to explore</span>
            <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-blue-600 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-blue-600"></div>
            </div>
            <ChevronDown size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
