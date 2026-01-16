import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useLanguage, en } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isEnglish } = useLanguage();
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: isEnglish ? en.nav.home : 'Inicio', href: '/', isScroll: false, isExternal: false },
    { name: isEnglish ? en.nav.projects : 'Proyectos', href: 'projects', isScroll: true, isExternal: false },
    { name: 'CV', href: '/CV - ANDERSSON D SANCHEZ M.pdf', isScroll: false, isExternal: true },
  ];

  const handleNavClick = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-gray-800' 
            : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-white text-sm sm:text-base">
              AS
            </div>
            <span className="font-bold text-lg sm:text-xl hidden sm:block">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Andersson</span>
              <span className="text-blue-500">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isScroll ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </button>
              ) : link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    location.pathname === link.href 
                      ? 'text-blue-500' 
                      : isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Social Links & Controls */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
            <a
              href="https://github.com/AnderssonProgramming"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-colors ${
                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anderssonsm"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-colors ${
                isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="/CV - ANDERSSON D SANCHEZ M.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              {isEnglish ? en.nav.viewCV : 'Ver CV'}
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden py-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isScroll ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick(link.href);
                    }}
                    className={`transition-colors py-2 text-left hover:text-blue-500 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </button>
                ) : link.isExternal ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`transition-colors py-2 hover:text-blue-500 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`transition-colors py-2 hover:text-blue-500 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className={`flex gap-4 pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <a
                  href="https://github.com/AnderssonProgramming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anderssonsm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 transition-colors ${
                    isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
