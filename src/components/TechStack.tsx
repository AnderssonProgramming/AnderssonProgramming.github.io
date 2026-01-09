import { motion } from 'framer-motion';

const TechStack = () => {
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
    <section className="py-16 bg-gray-900/30 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 uppercase tracking-widest text-sm">
            Tecnologías que domino
          </p>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10"></div>

          {/* Scrolling content */}
          <motion.div 
            className="flex gap-12"
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
                className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700/50 whitespace-nowrap hover:border-blue-500/50 transition-colors"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
