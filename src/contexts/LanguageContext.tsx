import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isEnglish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const isEnglish = language === 'en';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// English translations - Spanish stays hardcoded in components
export const en = {
  // Navbar
  nav: {
    home: 'Home',
    projects: 'Projects',
    cv: 'CV',
    viewCV: 'View CV',
  },
  
  // Hero
  hero: {
    badge: 'NASA Space Apps Global Finalist',
    subtitle: 'Full-Stack Developer & Systems Engineering Student',
    viewCV: 'View Professional CV',
    viewProjects: 'View Projects',
  },
  
  // About
  about: {
    titlePrefix: 'About',
    titleSuffix: 'Me',
    description: 'Bilingual Systems Engineering student and NASA Space Apps Challenge Global Finalist. Full-Stack Developer with experience in Machine Learning (CNN), Java (Spring Boot), React and CI/CD automation. I excel at transforming solid technical foundations into innovative and scalable solutions, working under agile methodologies.',
  },
  
  // Skills on Home page
  skills: {
    items: [
      { name: 'Full-Stack Development', description: 'Java, Spring Boot, React, TypeScript' },
      { name: 'Machine Learning', description: 'CNN, TensorFlow, Data Science' },
      { name: 'Databases', description: 'PostgreSQL, MongoDB, Oracle' },
      { name: 'DevOps & Security', description: 'CI/CD, Docker, Cybersecurity' },
    ],
  },
  
  // Projects
  projects: {
    titlePrefix: 'Featured',
    titleSuffix: 'Projects',
    subtitle: 'A selection of my most relevant projects: from NASA Space Apps Challenge to enterprise systems and video games.',
    viewAll: 'View all my projects on GitHub',
    items: [
      {
        title: 'ECI-Centauri | NASA Space Apps 2025',
        description: 'AI-powered exoplanet detection system. Web interface with 3D planet visualization, interactive light curves, Claude AI chatbot, and real-time predictions. FastAPI backend with JWT authentication and CNN model trained with Kepler and TESS data.',
      },
      {
        title: 'POOB vs Zombies',
        description: 'Tower defense game inspired by Plants vs Zombies, developed in Java for the POOB course. Includes AI gameplay (PvE, PvP, Machine vs Machine), real-time gameplay with threads, save/load games, and resource management.',
      },
      {
        title: 'Gender Quest | Educational Platform',
        description: 'Interactive educational platform about gender roles and equality. Built with Next.js, NestJS, and Supabase. Uses gamification, AI, and 3D environments to teach through quizzes, chatbots, and multimedia learning.',
      },
      {
        title: 'Elysium | Booking System',
        description: 'Laboratory booking system for Escuela Colombiana de Ingeniería. React frontend with D3.js for visualization, Spring Boot backend with MongoDB. Includes JWT authentication, CI/CD with Azure, and Swagger documentation.',
      },
    ],
  },
  
  // CTA Section
  cta: {
    title: 'Ready to collaborate?',
    subtitle: 'I\'m open to new opportunities and challenging projects. Download my CV or contact me directly.',
    downloadCV: 'Download CV',
    contact: 'Contact',
  },
  
  // Tech Stack
  techstack: {
    title: 'Technologies I master',
  },
  
  // Footer
  footer: {
    description: 'Full-Stack Developer & Systems Engineering Student. NASA Space Apps Global Finalist.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    professionalCV: 'Professional CV',
    rights: 'All rights reserved.',
    madeWith: 'Made with',
  },
  
  // CV
  cv: {
    backToPortfolio: 'Back to Portfolio',
    downloadPDF: 'Download PDF',
    contact: 'Contact',
    profile: 'Professional Profile',
    profileText: 'Bilingual Systems Engineering student and Global Finalist at NASA Space Apps Challenge, with a Full-Stack Developer profile and experience in Machine Learning (CNN), Java (Spring Boot), React, and CI/CD automation. I excel at transforming solid technical foundations into innovative and scalable solutions, working under agile methodologies to maximize efficiency and quality in software development.',
    skills: 'Skills',
    languages: 'Languages',
    spanish: 'Spanish',
    english: 'English',
    native: 'Native',
    hobbies: 'Hobbies',
    gym: 'Gym',
    running: 'Running',
    basketball: 'Basketball',
    cycling: 'Cycling',
    music: 'Music',
    languagesHobby: 'Languages',
    networks: 'Networks & Links',
    workExperience: 'Work Experience',
    job1: {
      title: 'Academic Tutor - Object-Oriented Programming',
      company: 'Escuela Colombiana de Ingeniería Julio Garavito | Bogotá',
      date: 'Aug 2025 - Dec 2025',
      description: 'Provided academic support, facilitating the learning of Java and fundamental pillars: encapsulation, inheritance, polymorphism, and abstraction. Guided students in implementing software solutions and adopting good coding practices, strengthening my academic leadership and technical communication.',
    },
    job2: {
      title: 'Academic Tutor - Models and Databases',
      company: 'Escuela Colombiana de Ingeniería Julio Garavito | Bogotá',
      date: 'Feb 2025 - Jun 2025',
      description: 'Provided academic support, facilitating the learning of Oracle SQL Developer and relational design for students. Guided technical problem-solving and implementation of practical solutions, strengthening my technical communication and group management skills.',
    },
    education: 'Education',
    edu1: {
      title: 'Systems Engineering',
      institution: 'Escuela Colombiana de Ingeniería Julio Garavito | Bogotá',
      date: 'In progress - Expected graduation: 2027',
      description: 'Advanced Systems Engineering student. Experience in implementing real projects with modern technologies and managing projects hosted on GitHub.',
    },
    edu2: {
      title: 'High School Diploma',
      institution: 'Gimnasio Corazón de María | Bogotá',
      date: '2021',
      description: '🏆 Graduated with honors, recognized as the best graduate. During my education, I stood out for my academic excellence and commitment to the institutional values of work and service, laying the foundations of my professional responsibility.',
    },
    achievements: 'Key Achievements',
    achievement1: {
      title: 'NASA Space Apps Challenge - Global Finalist',
      description: 'Top 45 worldwide among thousands of participating teams.',
    },
    courses: 'Courses & Certifications',
    references: 'References',
    skillsList: {
      teamwork: 'Teamwork',
      leadership: 'Leadership',
      responsibility: 'Responsibility',
      proactivity: 'Proactivity',
      creativity: 'Creativity',
      adaptability: 'Adaptability',
      fullstack: 'Full-Stack Development',
      ai: 'AI Integration',
      agile: 'Agile Methodologies',
      git: 'Git',
    },
  },
};
