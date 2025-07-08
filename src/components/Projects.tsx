
import { ExternalLink, Github, Database, Globe, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PVR E-commerce Website",
      description: "A product-based shopping platform built in semester 2 showcasing frontend and user flow design.",
      tech: ["HTML", "CSS", "JavaScript", "Frontend Design"],
      icon: <Globe className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Blood Donation System",
      description: "Full-stack app using MySQL, HTML/CSS/JS with comprehensive API testing using Postman.",
      tech: ["MySQL", "HTML", "CSS", "JavaScript", "Postman"],
      icon: <Database className="w-6 h-6" />,
      color: "red"
    },
    {
      title: "Soil Quality Detector Website",
      description: "AI-powered site that detects soil quality from images using modern web technologies.",
      tech: ["TypeScript", "Tailwind CSS", "AI/ML", "Image Processing"],
      icon: <Brain className="w-6 h-6" />,
      color: "green"
    }
  ];

  const internships = [
    {
      company: "Accenture UK",
      role: "Developer and Tech Simulation",
      description: "Participated in virtual internship focusing on development practices and technology simulation.",
      color: "purple"
    },
    {
      company: "Mastercard",
      role: "Cybersecurity Simulation",
      description: "Gained hands-on experience in cybersecurity practices and threat analysis.",
      color: "orange"
    },
    {
      company: "Tata Group",
      role: "Cybersecurity Analyst + Data Visualization",
      description: "Dual role simulation combining security analysis with data visualization techniques.",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 shadow-blue-200",
      red: "from-red-500 to-red-600 shadow-red-200",
      green: "from-green-500 to-green-600 shadow-green-200",
      purple: "from-purple-500 to-purple-600 shadow-purple-200",
      orange: "from-orange-500 to-orange-600 shadow-orange-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects & Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my development projects and professional experiences
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(project.color)} rounded-lg flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {project.icon}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Internships Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Virtual Internship Experiences</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className={`w-3 h-3 bg-gradient-to-r ${getColorClasses(internship.color)} rounded-full mb-4`}></div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{internship.company}</h4>
                <p className="text-blue-600 font-medium text-sm mb-3">{internship.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{internship.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <Github size={48} className="mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4">Explore More on GitHub</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my complete portfolio of projects, contributions, and code samples on GitHub.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
              Visit GitHub Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
