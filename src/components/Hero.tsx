
import { ChevronDown, User } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <User size={16} className="mr-2" />
              Available for opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600 block">Vinod N.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Aspiring Software Engineer | Web Developer | Java Enthusiast
            </p>
            
            <p className="text-lg text-gray-500 mb-8 max-w-2xl">
              Crafting modern web solutions with code, creativity, and commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
              >
                Get in touch
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                View my work
              </button>
            </div>
          </div>

          {/* Right Content - Profile Picture Area */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-200 to-blue-100 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <User size={120} className="text-blue-400" />
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-8 right-8 bg-white px-4 py-2 rounded-lg shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">BCA Student</span>
                </div>
                <p className="text-xs text-gray-500">CGPA: 8.57</p>
              </div>

              <div className="absolute bottom-12 left-8 bg-white px-4 py-2 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Java Developer</span>
                </div>
                <p className="text-xs text-gray-500">+ DevOps</p>
              </div>

              <div className="absolute top-1/2 -left-4 bg-white px-4 py-2 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">Full Stack</span>
                </div>
                <p className="text-xs text-gray-500">Web Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
