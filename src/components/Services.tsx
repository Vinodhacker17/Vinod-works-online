
import { Code, Palette, Laptop } from 'lucide-react';

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
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Clean, modern designs that provide excellent user experience and visual appeal.",
      features: ["User-Centered Design", "Wireframing", "Prototyping", "Visual Design"],
      color: "purple"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Freelance Development",
      description: "Custom tech solutions for clients or startups with focus on quality and innovation.",
      features: ["Custom Solutions", "Scalable Architecture", "Code Quality", "Ongoing Support"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 shadow-blue-200 group-hover:shadow-blue-300",
      purple: "from-purple-500 to-purple-600 shadow-purple-200 group-hover:shadow-purple-300",
      green: "from-green-500 to-green-600 shadow-green-200 group-hover:shadow-green-300"
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: "group-hover:border-blue-200",
      purple: "group-hover:border-purple-200",
      green: "group-hover:border-green-200"
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
