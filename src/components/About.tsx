
import { Award, GraduationCap, Target } from 'lucide-react';

const About = () => {
  const certifications = [
    "Basics of Python",
    "Python Foundation Certificate",
    "ChatGPT Complete Guide – Udemy",
    "AIML For Geodata Analysis – ISRO"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, skills, and journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Education & Background</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am a BCA student pursuing my degree at Dayananda Sagar University, currently in my 3rd year with a CGPA of 8.57 and SGPA of 8.88. I specialize in Java and DevOps, but I am also proficient in Python, C, C++, HTML, CSS, JavaScript, Data Structures, Operating Systems, DBMS, and Computer Networks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My goal is to become a Software Engineer and solve real-world problems with smart tech solutions. I am passionate about creating efficient, scalable applications that make a difference in people's lives.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Core Strengths</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Sincere</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Hardworking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Quick Learner</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Positive Attitude</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Team Player</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Award className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-blue-600">8.57</div>
                <div className="text-sm text-gray-600">Current CGPA</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-purple-600">8.88</div>
                <div className="text-sm text-gray-600">Latest SGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
