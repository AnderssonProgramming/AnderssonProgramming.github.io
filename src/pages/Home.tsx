import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink,
  Rocket,
  Code2,
  Database,
  Shield,
  Cpu,
  ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';
import { useLanguage, en } from '../contexts/LanguageContext';

const Home = () => {
  const { isEnglish } = useLanguage();
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = isEnglish ? [
    {
      title: en.projects.items[0].title,
      description: en.projects.items[0].description,
      tags: ["React", "TypeScript", "FastAPI", "TensorFlow", "PostgreSQL", "Three.js"],
      image: "🚀",
      links: [
        { name: "Frontend", url: "https://github.com/JAPV-X2612/ECI-Centauri-Frontend" },
        { name: "Backend", url: "https://github.com/JAPV-X2612/ECI-Centauri-Backend" },
        { name: "ML Model", url: "https://github.com/Ch0comilo/astronet-cnn-v3" }
      ],
      featured: true
    },
    {
      title: en.projects.items[1].title,
      description: en.projects.items[1].description,
      tags: ["Java", "OOP", "Threads", "Swing", "Game Dev"],
      image: "🎮",
      links: [
        { name: "Repository", url: "https://github.com/AnderssonProgramming/POOB-VS-Zombies" }
      ]
    },
    {
      title: en.projects.items[2].title,
      description: en.projects.items[2].description,
      tags: ["Next.js", "NestJS", "Supabase", "AI", "3D", "Gamification"],
      image: "🎓",
      links: [
        { name: "Repository", url: "https://github.com/AnderssonProgramming/psoc-genericR-culturalC" }
      ]
    },
    {
      title: en.projects.items[3].title,
      description: en.projects.items[3].description,
      tags: ["React", "Spring Boot", "MongoDB", "D3.js", "Azure", "JWT"],
      image: "📅",
      links: [
        { name: "Frontend", url: "https://github.com/AnderssonProgramming/Elysium-Front-React" },
        { name: "Backend", url: "https://github.com/LePeanutButter/elysium-back" }
      ]
    }
  ] : [
    {
      title: "ECI-Centauri | NASA Space Apps 2025",
      description: "Sistema de detección de exoplanetas con IA. Interfaz web con visualización 3D de planetas, curvas de luz interactivas, chatbot con Claude AI y predicciones en tiempo real. Backend FastAPI con autenticación JWT y modelo CNN entrenado con datos de Kepler y TESS.",
      tags: ["React", "TypeScript", "FastAPI", "TensorFlow", "PostgreSQL", "Three.js"],
      image: "🚀",
      links: [
        { name: "Frontend", url: "https://github.com/JAPV-X2612/ECI-Centauri-Frontend" },
        { name: "Backend", url: "https://github.com/JAPV-X2612/ECI-Centauri-Backend" },
        { name: "ML Model", url: "https://github.com/Ch0comilo/astronet-cnn-v3" }
      ],
      featured: true
    },
    {
      title: "POOB vs Zombies",
      description: "Juego tower defense inspirado en Plants vs Zombies, desarrollado en Java para el curso POOB. Incluye partidas con IA (PvE, PvP, Machine vs Machine), gameplay en tiempo real con threads, guardado/carga de partidas y manejo de recursos.",
      tags: ["Java", "POO", "Threads", "Swing", "Game Dev"],
      image: "🎮",
      links: [
        { name: "Repositorio", url: "https://github.com/AnderssonProgramming/POOB-VS-Zombies" }
      ]
    },
    {
      title: "Gender Quest | Plataforma Educativa",
      description: "Plataforma educativa interactiva sobre roles de género e igualdad. Desarrollada con Next.js, NestJS y Supabase. Usa gamificación, IA y entornos 3D para enseñar a través de quizzes, chatbots y aprendizaje multimedia.",
      tags: ["Next.js", "NestJS", "Supabase", "AI", "3D", "Gamification"],
      image: "🎓",
      links: [
        { name: "Repositorio", url: "https://github.com/AnderssonProgramming/psoc-genericR-culturalC" }
      ]
    },
    {
      title: "Elysium | Sistema de Reservas",
      description: "Sistema de reservas de laboratorios para la Escuela Colombiana de Ingeniería. Frontend React con D3.js para visualización, Backend Spring Boot con MongoDB. Incluye autenticación JWT, CI/CD con Azure y documentación Swagger.",
      tags: ["React", "Spring Boot", "MongoDB", "D3.js", "Azure", "JWT"],
      image: "📅",
      links: [
        { name: "Frontend", url: "https://github.com/AnderssonProgramming/Elysium-Front-React" },
        { name: "Backend", url: "https://github.com/LePeanutButter/elysium-back" }
      ]
    }
  ];

  const skills = isEnglish ? [
    { icon: <Code2 className="w-8 h-8" />, name: en.skills.items[0].name, description: en.skills.items[0].description },
    { icon: <Cpu className="w-8 h-8" />, name: en.skills.items[1].name, description: en.skills.items[1].description },
    { icon: <Database className="w-8 h-8" />, name: en.skills.items[2].name, description: en.skills.items[2].description },
    { icon: <Shield className="w-8 h-8" />, name: en.skills.items[3].name, description: en.skills.items[3].description }
  ] : [
    { icon: <Code2 className="w-8 h-8" />, name: "Full-Stack Development", description: "Java, Spring Boot, React, TypeScript" },
    { icon: <Cpu className="w-8 h-8" />, name: "Machine Learning", description: "CNN, TensorFlow, Data Science" },
    { icon: <Database className="w-8 h-8" />, name: "Bases de Datos", description: "PostgreSQL, MongoDB, Oracle" },
    { icon: <Shield className="w-8 h-8" />, name: "DevOps & Security", description: "CI/CD, Docker, Ciberseguridad" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid px-4 sm:px-6">
        {/* Gradient orbs - smaller on mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-20 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-blue-400 text-xs sm:text-sm font-medium">
                {isEnglish ? en.hero.badge : 'NASA Space Apps Global Finalist'}
              </span>
            </motion.div>

            {/* Name - Improved responsive sizing */}
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-1 sm:pb-2">
                ANDERSSON DAVID
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                SÁNCHEZ MÉNDEZ
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {isEnglish ? en.hero.subtitle : 'Full-Stack Developer & Systems Engineering Student'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a 
                href="/CV - ANDERSSON D SANCHEZ M.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 glow"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                {isEnglish ? en.hero.viewCV : 'Ver CV Profesional'}
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 hover:border-blue-500 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-blue-500/10"
              >
                {isEnglish ? en.hero.viewProjects : 'Ver Proyectos'}
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a 
                href="https://github.com/AnderssonProgramming" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-800/50 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/anderssonsm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-800/50 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="mailto:anderssondavidsanchez@gmail.com"
                className="p-2.5 sm:p-3 bg-gray-800/50 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            key={isEnglish ? 'about-en' : 'about-es'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="text-gray-400">{isEnglish ? en.about.titlePrefix : 'Sobre'}</span>{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{isEnglish ? en.about.titleSuffix : 'Mí'}</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2">
                {isEnglish ? (
                  <>
                    {en.about.description.split('NASA Space Apps Challenge Global Finalist')[0]}
                    <strong className="text-blue-400">NASA Space Apps Challenge Global Finalist</strong>
                    {en.about.description.split('NASA Space Apps Challenge Global Finalist')[1]}
                  </>
                ) : (
                  <>
                    Estudiante de Ingeniería de Sistemas bilingüe y <strong className="text-blue-400">Finalista Global en NASA Space Apps Challenge</strong>. 
                    Desarrollador Full-Stack con experiencia en Machine Learning (CNN), Java (Spring Boot), React y automatización CI/CD. 
                    Me distingo por convertir sólidos fundamentos técnicos en soluciones innovadoras y escalables, trabajando bajo metodologías ágiles.
                  </>
                )}
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-4 sm:p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{skill.name}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            key={isEnglish ? 'projects-en' : 'projects-es'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="text-gray-400">{isEnglish ? en.projects.titlePrefix : 'Proyectos'}</span>{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{isEnglish ? en.projects.titleSuffix : 'Destacados'}</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
                {isEnglish ? en.projects.subtitle : 'Una selección de mis proyectos más relevantes: desde el NASA Space Apps Challenge hasta sistemas empresariales y videojuegos.'}
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div key={`project-${index}`} variants={fadeInUp}>
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>

            {/* View All Projects Link */}
            <motion.div 
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <a 
                href="https://github.com/AnderssonProgramming?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-700 hover:border-blue-500 rounded-xl text-gray-400 hover:text-white text-sm sm:text-base transition-all duration-300 hover:bg-blue-500/10"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                {isEnglish ? en.projects.viewAll : 'Ver todos mis proyectos en GitHub'}
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            key={isEnglish ? 'cta-en' : 'cta-es'}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {isEnglish ? en.cta.title : '¿Listo para colaborar?'}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 px-2">
              {isEnglish ? en.cta.subtitle : 'Estoy abierto a nuevas oportunidades y proyectos desafiantes. Descarga mi CV o contáctame directamente.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a 
                href="/CV - ANDERSSON D SANCHEZ M.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black hover:bg-gray-100 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                {isEnglish ? en.cta.downloadCV : 'Descargar CV'}
              </a>
              <a 
                href="mailto:anderssondavidsanchez@gmail.com"
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 hover:border-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                {isEnglish ? en.cta.contact : 'Contactar'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
