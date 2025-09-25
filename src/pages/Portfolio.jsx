import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'project-details'
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      live: "https://kohilocale.vercel.app/",
      detailedDescription: `Kohi Locale is a comprehensive web platform designed specifically for coffee shop owners and enthusiasts. This project represents a complete solution for managing coffee shop operations while creating a community of coffee lovers.

The platform features a robust admin dashboard that allows coffee shop owners to manage their business information, update menus in real-time, create and manage promotional campaigns, and monitor customer feedback. The intuitive interface makes it easy for business owners to keep their information current and engage with their customers effectively.

One of the standout features is the integrated Google Maps functionality that helps customers discover new coffee shops in their area. The review system enables genuine customer feedback, helping both shop owners improve their services and potential customers make informed decisions.`,
      screenshots: [
        "/assets/kohi-1.jpg",
        "/assets/kohi-2.jpg", 
        "/assets/kohi-3.jpg",
        "/assets/kohi-4.jpg"
      ],
      features: [
        "Admin Dashboard for Coffee Shop Management",
        "Real-time Menu and Pricing Updates",
        "Promotional Campaign Management",
        "Customer Review and Rating System",
        "Google Maps Integration for Location Services",
        "Responsive Design for All Devices",
        "User Authentication and Authorization",
        "Business Analytics and Insights"
      ]
    },
    {
      title: "Kohi Locale (Android App)",
      description: "An Android App for coffee lovers. Features includes map location, menu browsing, user reviews, and application form to register an owned coffee shop.",
      tech: ["React Native", "Django Rest Framework", "Google Maps API"],
      image: "/assets/mobile.jpg",
      github: "https://github.com/FuminocchiDesu/ReactNative",
      live: "https://drive.google.com/file/d/1uF0KQEziQ8hshZ4ldB9YVTN6bHxf-MJG/view?usp=sharing",
      detailedDescription: `The Kohi Locale mobile application brings the coffee shop discovery experience directly to users' smartphones. Built with React Native for cross-platform compatibility, this app serves as the perfect companion for coffee enthusiasts looking to explore local coffee culture.

The app's primary strength lies in its location-based services, utilizing Google Maps API to help users find nearby coffee shops with detailed information about each establishment. Users can browse through comprehensive menus, read authentic reviews from other coffee lovers, and even contribute their own experiences.

For aspiring coffee shop owners, the app includes a unique feature - an application system that allows them to register their coffee shops on the platform, complete with business verification processes. This creates a growing ecosystem of coffee establishments and enthusiasts.`,
      screenshots: [
        "/assets/mobile-1.jpg",
        "/assets/mobile-2.jpg",
        "/assets/mobile-3.jpg",
        "/assets/mobile-4.jpg"
      ],
      features: [
        "Interactive Map with Coffee Shop Locations",
        "Detailed Menu Browsing with Photos",
        "User Review and Rating System",
        "Coffee Shop Registration Application",
        "Favorite Shops and Personalization",
        "Push Notifications for Promotions",
        "Social Sharing Features",
        "Offline Mode for Saved Content"
      ]
    },
    {
      title: "Quiz IT",
      description: "A dynamic web app for teachers and students. Teachers can create and manage quizzes, while students take quizzes, view scores, and join classes via unique codes. I only made the backend using Django Rest Framework.",
      tech: ["React", "Django Rest Framework"],
      image: "/assets/quizit.png",
      github: "https://github.com/FuminocchiDesu/quizapp",
      live: "https://quizit-nu.vercel.app/",
      detailedDescription: `Quiz IT represents a modern approach to educational assessment, providing a seamless platform for both educators and students. As the backend developer for this project, I focused on creating a robust API using Django Rest Framework that handles all the complex logic behind quiz management, user authentication, and real-time scoring.

The platform revolutionizes how teachers conduct assessments by providing them with powerful tools to create diverse question types, set time limits, and generate detailed analytics on student performance. The unique class code system ensures secure and organized access to quizzes while maintaining student privacy.

My contribution focused on building scalable API endpoints that handle user registration, authentication, quiz creation and management, real-time scoring algorithms, and comprehensive data analytics. The backend architecture ensures smooth performance even with multiple simultaneous quiz sessions.`,
      screenshots: [
        "/assets/quizit-1.jpg",
        "/assets/quizit-2.jpg",
        "/assets/quizit-3.jpg",
        "/assets/quizit-4.jpg"
      ],
      features: [
        "Secure User Authentication System",
        "RESTful API Design",
        "Real-time Quiz Scoring Engine",
        "Class Management with Unique Codes",
        "Multiple Question Type Support",
        "Automated Grading System",
        "Performance Analytics and Reporting",
        "Data Export Capabilities"
      ]
    },
    {
      title: "MathWiz",
      description: "A mini game web app that helps kids practice basic math operations in a fun and interactive way. This is only an activity during my time in the university.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "/assets/logo.png",
      github: "https://github.com/FuminocchiDesu/MathWiz",
      detailedDescription: `MathWiz is an educational game designed to make learning mathematics enjoyable for children. This project demonstrates the effective use of gamification in education, combining fun gameplay mechanics with solid mathematical learning objectives.

The application features various difficulty levels that adapt to the child's progress, ensuring an appropriate challenge that promotes learning without causing frustration. The colorful and intuitive interface captures children's attention while the reward system motivates continued engagement with mathematical concepts.

Built during my university years, this project showcases fundamental web development skills and represents my early exploration into educational technology. The PHP backend handles score tracking and progress monitoring, while the frontend provides an engaging user experience with animations and interactive feedback.`,
      screenshots: [
        "/assets/mathwiz-1.jpg",
        "/assets/mathwiz-2.jpg",
        "/assets/mathwiz-3.jpg"
      ],
      features: [
        "Interactive Math Games for Kids",
        "Progressive Difficulty Levels",
        "Colorful and Kid-Friendly Interface",
        "Score Tracking and Progress Monitoring",
        "Multiple Math Operations Support",
        "Achievement and Reward System",
        "Sound Effects and Visual Feedback",
        "Parent Dashboard for Progress Tracking"
      ]
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "React Native", "TypeScript", "Python", 
    "MS SQL Server", "Django", "Django Rest Framework", "Git"
  ];

  const showProjectDetails = (project) => {
    setSelectedProject(project);
    setCurrentPage('project-details');
    setCurrentImageIndex(0);
    window.scrollTo(0, 0);
  };

  const backToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  const ProjectDetailsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={backToHome}
          className="flex items-center text-blue-300 hover:text-white transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Portfolio
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full min-h-[24rem] max-h-[32rem] flex items-center justify-center bg-slate-800">
                <img
                  src={selectedProject.screenshots[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.src = selectedProject.image;
                  }}
                />
              </div>
              
              {/* Image Navigation */}
              {selectedProject.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'bg-blue-400'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {selectedProject.screenshots.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {selectedProject.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'border-blue-400'
                        : 'border-transparent hover:border-blue-300'
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-contain bg-slate-700"
                      onError={(e) => {
                        e.target.src = selectedProject.image;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {selectedProject.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-600/20 backdrop-blur-md text-blue-200 px-4 py-2 rounded-full border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Description</h2>
              <div className="text-blue-100 leading-relaxed space-y-4">
                {selectedProject.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Key Features</h2>
              <ul className="space-y-2 text-blue-100">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-200 transform hover:scale-105"
              >
                <Github size={20} className="mr-2" />
                View Code
              </a>
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentPage === 'project-details' && selectedProject) {
    return (
      <>
        {/* Navigation for project details page */}
        <nav className="fixed top-0 w-full z-50 bg-blue-950/20 backdrop-blur-md border-b border-blue-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={backToHome}
                className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-200"
              >
                Portfolio
              </button>
              <button
                onClick={backToHome}
                className="text-blue-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back
              </button>
            </div>
          </div>
        </nav>
        <ProjectDetailsPage />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-blue-950/20 backdrop-blur-md border-b border-blue-400/20">
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
          <div className="md:hidden bg-blue-950/30 backdrop-blur-md">
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
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-blue-500/30">
              JC
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Joshua Canoza
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Full-stack developer with hands-on experience in web and mobile application development. 
            Proficient in modern technologies including React, Django, and Blazor, with a focus on 
            building robust backend systems and exceptional user experiences.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Github size={32} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={32} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Mail size={32} />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            View My Work
          </button>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-300" size={32} />
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
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                I'm a fresh graduate with a Bachelor's degree in Information Technology. 
                I have a passion for creating efficient and scalable web and mobile applications. 
                My expertise lies in backend and a bit in the frontend development, allowing me to build 
                complete solutions from the ground up.
              </p>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                playing games, or enjoying the great outdoors.
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-blue-600/20 backdrop-blur-md text-blue-200 px-4 py-2 rounded-full border border-blue-400/30 hover:bg-blue-600/30 hover:border-blue-300/50 transition-all duration-200"
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
                className="w-80 h-100 rounded-full mx-auto shadow-2xl border-4 border-blue-400/50 shadow-blue-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-blue-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-blue-900/20 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-blue-400/20 hover:transform hover:scale-105 hover:border-blue-300/40 transition-all duration-300 hover:shadow-blue-500/20"
              >
                <div className="w-full h-48 bg-slate-800 flex items-center justify-center overflow-hidden">
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
                  <p className="text-blue-100 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4">
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
                  <button
                    onClick={() => showProjectDetails(project)}
                    className="w-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-200 py-2 rounded-lg hover:from-blue-600/30 hover:to-cyan-600/30 hover:text-white transition-all duration-200 border border-blue-500/20 hover:border-blue-400/40"
                  >
                    View Details
                  </button>
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
          <p className="text-xl text-blue-100 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-blue-400/20 hover:border-blue-300/40 transition-all duration-200">
              <Mail className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-blue-200">jtcanoza@gmail.com</p>
            </div>
            <div className="bg-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-blue-400/20 hover:border-blue-300/40 transition-all duration-200">
              <a href='https://github.com/FuminocchiDesu' target='_blank' className="block">
                <Github className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <p className="text-blue-200">@FuminocchiDesu</p>
              </a>
            </div>
            <div className="bg-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-blue-400/20 hover:border-blue-300/40 transition-all duration-200">
              <a href='https://www.linkedin.com/in/joshua-canoza-25a825193' target='_blank' className="block">
                <Linkedin className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-blue-200">Joshua Canoza</p>
              </a>
            </div>
          </div>
          <a 
            href="mailto:jtcanoza@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-blue-500/30 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950/30 text-center py-8 px-4 border-t border-blue-400/20">
        <p className="text-blue-200">
          © 2025 Joshua Canoza. Built with React and Vite.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;