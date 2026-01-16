import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 sm:p-2.5 rounded-lg border transition-all duration-300 hover:scale-105 active:scale-95 ${
        isDark 
          ? 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-700 hover:border-gray-600' 
          : 'bg-white/90 hover:bg-white border-gray-300 hover:border-blue-400 shadow-sm'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
        ) : (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
