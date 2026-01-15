import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage, en } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isEnglish } = useLanguage();

  return (
    <footer className="bg-[#050508] border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white">
                AS
              </div>
              <span className="font-bold text-xl">
                <span className="text-white">Andersson</span>
                <span className="text-blue-400">.dev</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {isEnglish ? en.footer.description : 'Full-Stack Developer & Systems Engineering Student. NASA Space Apps Global Finalist.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{isEnglish ? en.footer.quickLinks : 'Enlaces Rápidos'}</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                {isEnglish ? en.nav.home : 'Inicio'}
              </a>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {isEnglish ? en.nav.projects : 'Proyectos'}
              </button>
              <a 
                href="/CV - ANDERSSON D SANCHEZ M.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {isEnglish ? en.footer.professionalCV : 'CV Profesional'}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">{isEnglish ? en.footer.contact : 'Contacto'}</h3>
            <div className="space-y-3">
              <a 
                href="mailto:anderssondavidsanchez@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                anderssondavidsanchez@gmail.com
              </a>
              <a 
                href="https://github.com/AnderssonProgramming"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/andersson-david-sánchez-méndez-676b72194"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Andersson David Sánchez Méndez. {isEnglish ? en.footer.rights : 'Todos los derechos reservados.'}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {isEnglish ? en.footer.madeWith : 'Hecho con'} <Heart className="w-4 h-4 text-red-500 fill-current" /> {isEnglish ? 'and React' : 'y React'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
