import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card } from './ui/card';

const TechStack = () => {
  const techStack = [
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      category: 'Programming Language'
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      category: 'Programming Language'
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      category: 'Programming Language'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      category: 'Frontend Framework'
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      category: 'Web Technology'
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      category: 'Web Technology'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      category: 'CSS Framework'
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      category: 'Database'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      category: 'Version Control'
    },
    {
      name: 'VS Code',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      category: 'IDE'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing solutions
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-1">
            {techStack.map((tech, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to a simple colored div if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                      <p className="text-sm text-gray-500">{tech.category}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default TechStack;