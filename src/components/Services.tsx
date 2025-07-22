
import { Code, Laptop, Smartphone, Database, TestTube, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description: "End-to-end site builds for clients with modern technologies and responsive design.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"],
      color: "blue"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications with modern user interfaces and functionality.",
      features: ["iOS & Android", "React Native", "Cross-Platform", "App Store Publishing"],
      color: "purple"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design & Management",
      description: "Efficient database architecture, optimization, and management for scalable applications.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"],
      color: "green"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Software Testing & QA",
      description: "Comprehensive testing strategies to ensure quality, reliability, and performance.",
      features: ["Automated Testing", "Manual Testing", "Performance Testing", "Bug Tracking"],
      color: "orange"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & Cloud Services",
      description: "Cloud infrastructure setup, CI/CD pipelines, and deployment automation.",
      features: ["AWS/Azure Setup", "CI/CD Pipelines", "Container Deployment", "Monitoring"],
      color: "indigo"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Freelance Development",
      description: "Custom tech solutions for clients or startups with focus on quality and innovation.",
      features: ["Custom Solutions", "Scalable Architecture", "Code Quality", "Ongoing Support"],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 shadow-blue-200 group-hover:shadow-blue-300",
      purple: "from-purple-500 to-purple-600 shadow-purple-200 group-hover:shadow-purple-300",
      green: "from-green-500 to-green-600 shadow-green-200 group-hover:shadow-green-300",
      orange: "from-orange-500 to-orange-600 shadow-orange-200 group-hover:shadow-orange-300",
      indigo: "from-indigo-500 to-indigo-600 shadow-indigo-200 group-hover:shadow-indigo-300",
      teal: "from-teal-500 to-teal-600 shadow-teal-200 group-hover:shadow-teal-300"
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: "group-hover:border-blue-200",
      purple: "group-hover:border-purple-200",
      green: "group-hover:border-green-200",
      orange: "group-hover:border-orange-200",
      indigo: "group-hover:border-indigo-200",
      teal: "group-hover:border-teal-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional freelance services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${getBorderColor(service.color)}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(service.color)} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg transition-all duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(service.color)} rounded-full mr-3`}></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`mt-6 w-full py-3 px-6 bg-gradient-to-r ${getColorClasses(service.color)} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300`}>
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. I'm here to help you build your digital presence.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
