import { GraduationCap, Briefcase, Award, Code, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const Timeline = () => {
  const timelineData = [
    {
      year: '2022',
      title: 'Started BCA Journey',
      institution: 'Dayananda Sagar University',
      description: 'Began Bachelor of Computer Applications with focus on software development and programming fundamentals.',
      icon: <GraduationCap className="w-5 h-5" />,
      type: 'education',
      achievements: ['Java Programming', 'Data Structures', 'Web Development Basics']
    },
    {
      year: '2023',
      title: 'DevOps Fundamentals',
      institution: 'Great Learning',
      description: 'Completed certification in Introduction to DevOps, learning modern development and deployment practices.',
      icon: <Award className="w-5 h-5" />,
      type: 'certification',
      achievements: ['CI/CD Pipelines', 'Docker Basics', 'Cloud Concepts']
    },
    {
      year: '2024',
      title: 'Cybersecurity Simulation',
      institution: 'Tata Group',
      description: 'Participated in hands-on cybersecurity analyst job simulation, gaining practical security experience.',
      icon: <Briefcase className="w-5 h-5" />,
      type: 'experience',
      achievements: ['Threat Analysis', 'Security Protocols', 'Risk Assessment']
    },
    {
      year: '2024',
      title: 'Full-Stack Development',
      institution: 'Self-Learning & Projects',
      description: 'Mastered modern web technologies and built multiple full-stack applications.',
      icon: <Code className="w-5 h-5" />,
      type: 'skill',
      achievements: ['React.js', 'Tailwind CSS', 'Modern UI/UX']
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      education: 'from-blue-500 to-blue-600',
      certification: 'from-green-500 to-green-600',
      experience: 'from-purple-500 to-purple-600',
      skill: 'from-orange-500 to-orange-600'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of my educational milestones, certifications, and professional growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline marker */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full shadow-lg`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(item.type)} rounded-full capitalize`}>
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{item.institution}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <span 
                        key={achievementIndex}
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;