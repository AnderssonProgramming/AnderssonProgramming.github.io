import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'dark' | 'light';
}

const LanguageSelector = ({ variant = 'dark' }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const isDark = variant === 'dark';
  const isEnglish = language === 'en';

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 hover:scale-105 active:scale-95 ${
        isDark 
          ? 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-700 hover:border-gray-600' 
          : 'bg-white/90 hover:bg-white border-gray-300 hover:border-blue-400'
      }`}
      aria-label={isEnglish ? 'Switch to Spanish' : 'Cambiar a Inglés'}
    >
      <motion.span
        key={language}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-lg"
      >
        {isEnglish ? '🇺🇸' : '🇪🇸'}
      </motion.span>
      <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {isEnglish ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageSelector;
