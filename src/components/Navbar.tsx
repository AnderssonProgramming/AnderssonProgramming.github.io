import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/', isScroll: false },
    { name: 'Proyectos', href: 'projects', isScroll: true },
    { name: 'CV', href: '/cv', isScroll: false },
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
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white">
              AS
            </div>
            <span className="font-bold text-xl hidden sm:block">
              <span className="text-white">Andersson</span>
              <span className="text-blue-400">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isScroll ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium transition-colors hover:text-blue-400 text-gray-300"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    location.pathname === link.href ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/AnderssonProgramming"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/andersson-david-sánchez-méndez-676b72194"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Link
              to="/cv"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
            >
              Ver CV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-800"
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
                    className="text-gray-300 hover:text-blue-400 transition-colors py-2 text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="flex gap-4 pt-4 border-t border-gray-800">
                <a
                  href="https://github.com/AnderssonProgramming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/andersson-david-sánchez-méndez-676b72194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
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
