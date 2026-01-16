import { motion } from 'framer-motion';
import { useLanguage, en } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const TechStack = () => {
  const { isEnglish } = useLanguage();
  const { isDark } = useTheme();
  const technologies = [
    // Web Development
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Python', icon: '🐍' },
    // Databases
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    // Cloud & DevOps
    { name: 'Azure', icon: '☁️' },
    { name: 'AWS', icon: '🔶' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GitHub Actions', icon: '⚙️' },
    { name: 'CI/CD', icon: '🔄' },
    // Data & Visualization
    { name: 'D3.js', icon: '📊' },
    { name: 'Three.js', icon: '🎮' },
    { name: 'HuggingFace', icon: '🤗' },
    // Tools & Methodologies
    { name: 'Git', icon: '📚' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Bash', icon: '💻' },
    { name: 'VMs', icon: '🖥️' },
    // Architecture & Security
    { name: 'SCRUM', icon: '🏃' },
    { name: 'C4 Model', icon: '📐' },
    { name: 'Cybersecurity', icon: '🔐' },
    { name: 'Assembly', icon: '⚡' },
  ];

  return (
    <section className={`py-10 sm:py-16 border-y ${
      isDark 
        ? 'bg-gray-900/30 border-gray-800' 
        : 'bg-gray-100 border-gray-200'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-6 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className={`uppercase tracking-widest text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            {isEnglish ? en.techstack.title : 'Tecnologías que domino'}
          </p>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 ${
            isDark 
              ? 'bg-gradient-to-r from-[#0a0a0f] to-transparent' 
              : 'bg-gradient-to-r from-gray-100 to-transparent'
          }`}></div>
          <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 ${
            isDark 
              ? 'bg-gradient-to-l from-[#0a0a0f] to-transparent' 
              : 'bg-gradient-to-l from-gray-100 to-transparent'
          }`}></div>

          {/* Scrolling content */}
          <motion.div 
            className="flex gap-6 sm:gap-12"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 20, 
              ease: "linear" 
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border whitespace-nowrap transition-colors ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50' 
                    : 'bg-white border-gray-200 hover:border-blue-400 shadow-sm'
                }`}
              >
                <span className="text-xl sm:text-2xl">{tech.icon}</span>
                <span className={`font-medium text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
