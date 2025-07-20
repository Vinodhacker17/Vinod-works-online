import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiOpenjdk, 
  SiMysql, 
  SiMongodb, 
  SiGit, 
  SiTailwindcss,
  SiDocker 
} from 'react-icons/si';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TechStack = () => {
  const technologies = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'React', icon: SiReact, color: 'text-cyan-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Java', icon: SiOpenjdk, color: 'text-red-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                    <div className="group bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
                      <div className="flex justify-center mb-4">
                        <IconComponent 
                          size={48} 
                          className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {tech.name}
                      </h3>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TechStack;