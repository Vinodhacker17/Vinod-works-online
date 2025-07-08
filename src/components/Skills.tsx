
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "C", "C++", "JavaScript"],
      color: "blue"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["MySQL", "Postman", "DevOps fundamentals"],
      color: "purple"
    },
    {
      title: "Core Subjects",
      icon: <Database className="w-6 h-6" />,
      skills: ["Data Structures", "Operating Systems", "DBMS", "Computer Networks"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 shadow-blue-200",
      green: "from-green-500 to-green-600 shadow-green-200",
      purple: "from-purple-500 to-purple-600 shadow-purple-200",
      orange: "from-orange-500 to-orange-600 shadow-orange-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(category.color)} rounded-lg flex items-center justify-center text-white mb-4 shadow-lg`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full mr-3`}></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: "Java", level: 90 },
              { skill: "Python", level: 85 },
              { skill: "Web Development", level: 88 },
              { skill: "DevOps", level: 75 },
              { skill: "Database Management", level: 82 },
              { skill: "Problem Solving", level: 92 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">{item.skill}</span>
                  <span className="text-blue-600 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
