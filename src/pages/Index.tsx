
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import TechStack from '../components/TechStack';
import Timeline from '../components/Timeline';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Timeline />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
