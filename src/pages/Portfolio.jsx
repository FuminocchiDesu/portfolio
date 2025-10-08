import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Kohi Locale (Website)",
      description: "A Website for the coffee shop owners. Features includes dashboard, information management, menu and promos management, and customer reviews.",
      tech: ["React", "Django Rest Framework", "Google Maps API"],
      image: "/assets/image.png",
      github: "https://github.com/FuminocchiDesu/deploy",
      live: "https://kohilocale.vercel.app/"
    },
    {
      title: "Kohi Locale (Android App)",
      description: "An Android App for coffee lovers. Features includes map location, menu browsing, user reviews, and application form to register an owned coffee shop.",
      tech: ["React Native", "Django Rest Framework", "Google Maps API"],
      image: "/assets/mobile.jpg",
      github: "https://github.com/FuminocchiDesu/ReactNative",
      live: "https://drive.google.com/file/d/1uF0KQEziQ8hshZ4ldB9YVTN6bHxf-MJG/view?usp=sharing"
    },
    {
      title: "Quiz IT",
      description: "A dynamic web app for teachers and students. Teachers can create and manage quizzes, while students take quizzes, view scores, and join classes via unique codes. I only made the backend using Django Rest Framework.",
      tech: ["React", "Django Rest Framework"],
      image: "/assets/quizit.png",
      github: "https://github.com/FuminocchiDesu/quizapp",
      live: "https://quizit-nu.vercel.app/"
    },
    {
      title: "MathWiz",
      description: "A mini game web app that helps kids practice basic math operations in a fun and interactive way. This is only an activity during my time in the university.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "/assets/logo.png",
      github: "https://github.com/FuminocchiDesu/MathWiz",   
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "React Native", "TypeScript", "Python", 
    "MS SQL Server", "Django", "Django Rest Framework", "Git"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-white">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors duration-200 ${
                      activeSection === item 
                        ? 'text-blue-400' 
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/20 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              JC
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Joshua Canoza
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Full-stack developer with hands-on experience in web and mobile application development. 
            Proficient in modern technologies including React, Django, and Blazor, with a focus on 
            building robust backend systems and exceptional user experiences.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200">
              <Github size={32} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={32} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200">
              <Mail size={32} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <a 
              href="/resume.pdf" 
              download
              className="bg-white/10 text-white px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Hi, I'm Joshua Canoza
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a fresh graduate with a Bachelor's degree in Information Technology. 
                I have a passion for creating efficient and scalable web and mobile applications. 
                My expertise lies in backend and a bit in the frontend development, allowing me to build 
                complete solutions from the ground up.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                playing games, or enjoying the great outdoors.
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/assets/pic.jpg"
                alt="Profile"
                className="w-80 h-100 rounded-full mx-auto shadow-2xl border-4 border-blue-400/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target='_blank'
                      className="flex items-center text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        className="flex items-center text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <a 
            href="mailto:jtcanoza@gmail.com"><Mail className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">jtcanoza@gmail.com</p></a>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <a href='https://github.com/FuminocchiDesu' target='_blank'><Github className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">@FuminocchiDesu</p></a>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <a href='https://www.linkedin.com/in/joshua-canoza-25a825193' target='_blank'><Linkedin className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Joshua Canoza</p></a>
            </div>
          </div>
          <a 
            href="mailto:jtcanoza@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 text-center py-8 px-4 border-t border-white/10">
        <p className="text-gray-400">
          © 2025 Joshua Canoza. Built with React and Vite.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;