import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { isDark } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const isEnglish = language === 'en';

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border transition-all duration-200 hover:scale-105 active:scale-95 ${
        isDark 
          ? 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-700 hover:border-gray-600' 
          : 'bg-white/90 hover:bg-white border-gray-300 hover:border-blue-400 shadow-sm'
      }`}
      aria-label={isEnglish ? 'Switch to Spanish' : 'Cambiar a Inglés'}
    >
      <motion.span
        key={language}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-base sm:text-lg"
      >
        {isEnglish ? '🇺🇸' : '🇪🇸'}
      </motion.span>
      <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {isEnglish ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageSelector;
