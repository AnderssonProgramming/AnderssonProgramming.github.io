import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  Dumbbell,
  Dribbble
} from 'lucide-react';

const CV = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    globalThis.print();
  };

  const skills = [
    "Desarrollo Full-Stack",
    "Machine Learning (CNN)",
    "Arquitectura de Software",
    "Java/Spring Boot",
    "CI/CD & DevOps",
    "Ciberseguridad"
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar - Hidden on print */}
      <nav className="no-print fixed top-0 left-0 right-0 bg-[#0a0a0f] border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Portafolio
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Download className="w-5 h-5" />
            Descargar PDF
          </button>
        </div>
      </nav>

      {/* CV Container */}
      <div className="pt-20 pb-10 px-4 no-print:pt-20">
        <div 
          ref={cvRef}
          className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none print:max-w-none"
          style={{ minHeight: '297mm' }}
        >
          {/* Two Column Layout */}
          <div className="flex print-exact">
            {/* Left Sidebar */}
            <aside className="w-[35%] bg-[#f0f4f8] p-8 print-exact" style={{ backgroundColor: '#f0f4f8' }}>
              {/* Profile Photo Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-4xl font-bold">
                AS
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-[#1e40af] pb-2">
                  Contacto
                </h3>
                <div className="space-y-3 text-sm">
                  <a href="mailto:andersson.sanchez@mail.escuelaing.edu.co" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                    <Mail className="w-4 h-4 text-[#1e40af]" />
                    <span className="break-all text-xs">andersson.sanchez@mail.escuelaing.edu.co</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-4 h-4 text-[#1e40af]" />
                    <span>+57 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#1e40af]" />
                    <span>Bogotá, Colombia</span>
                  </div>
                </div>
              </div>

              {/* About Me */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-[#1e40af] pb-2">
                  Sobre Mí
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  Estudiante de Ingeniería de Sistemas y Finalista Global en NASA Space Apps Challenge (Top 45). 
                  Desarrollador Full-Stack experto en Java, React y Machine Learning (CNN) con enfoque en automatización CI/CD. 
                  Especialista en transformar retos complejos en soluciones escalables e innovadoras bajo metodologías ágiles.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-[#1e40af] pb-2">
                  Habilidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white border border-[#1e40af]/30 rounded-full text-xs text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-[#1e40af] pb-2">
                  Idiomas
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Español</span>
                    <span className="text-gray-500">Nativo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Inglés</span>
                    <span className="text-gray-500">B2</span>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-[#1e40af] pb-2">
                  Aficiones
                </h3>
                <div className="flex gap-6 justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <Dumbbell className="w-6 h-6 text-[#1e40af]" />
                    <span className="text-xs text-gray-600">GYM</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-6 h-6 text-[#1e40af]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
                    </svg>
                    <span className="text-xs text-gray-600">Running</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Dribbble className="w-6 h-6 text-[#1e40af]" />
                    <span className="text-xs text-gray-600">Baloncesto</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-[#1e40af] pb-2">
                  Enlaces
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/in/andersson-david-sanchez-mendez/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <Linkedin className="w-4 h-4 text-[#1e40af]" />
                    <span>andersson-david-sanchez-mendez</span>
                  </a>
                  <a 
                    href="https://github.com/AnderssonProgramming" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <Github className="w-4 h-4 text-[#1e40af]" />
                    <span>AnderssonProgramming</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Content */}
            <main className="w-[65%] p-8 bg-white">
              {/* Header */}
              <header className="mb-8">
                <h1 className="text-4xl font-black text-gray-900 leading-tight tracking-tight">
                  ANDERSSON DAVID
                  <br />
                  SANCHEZ MENDEZ
                </h1>
                <div className="mt-3 inline-block px-4 py-2 bg-blue-100 rounded-lg">
                  <span className="text-[#1e40af] font-semibold text-sm">
                    🚀 NASA Space Apps Global Finalist | Full-Stack Developer
                  </span>
                </div>
              </header>

              {/* Work Experience */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-gray-200 pb-2">
                  Experiencia Laboral
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-900">Monitor Académico de Programación Orientada a Objetos</h3>
                    </div>
                    <p className="text-[#1e40af] font-medium text-sm mb-1">
                      Escuela Colombiana de Ingeniería Julio Garavito
                    </p>
                    <p className="text-gray-500 text-xs mb-2">Ago 2025 - Dic 2025</p>
                    <p className="text-sm text-gray-700">
                      Apoyo a estudiantes en Java (POO), pilares de encapsulamiento, herencia, polimorfismo y buenas prácticas de programación.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-900">Monitor Académico de Modelos y Bases de Datos</h3>
                    </div>
                    <p className="text-[#1e40af] font-medium text-sm mb-1">
                      Escuela Colombiana de Ingeniería Julio Garavito
                    </p>
                    <p className="text-gray-500 text-xs mb-2">Feb 2025 - Jun 2025</p>
                    <p className="text-sm text-gray-700">
                      Apoyo en SQL, diseño relacional, modelado de datos y Oracle SQL Developer.
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-gray-200 pb-2">
                  Educación
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900">Ingeniería de Sistemas</h3>
                    <p className="text-[#1e40af] font-medium text-sm mb-1">
                      Escuela Colombiana de Ingeniería Julio Garavito
                    </p>
                    <p className="text-gray-500 text-xs">Expectativa de graduación: 2027</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">Bachiller Académico</h3>
                    <p className="text-[#1e40af] font-medium text-sm mb-1">
                      Gimnasio de Corazón de María
                    </p>
                    <p className="text-gray-500 text-xs mb-2">2021</p>
                    <p className="text-sm text-gray-700 italic">
                      🏆 Graduado con honores como Mejor Bachiller de la promoción
                    </p>
                  </div>
                </div>
              </section>

              {/* Achievements */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-gray-200 pb-2">
                  Logros Destacados
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🚀</span>
                    <div>
                      <h3 className="font-bold text-gray-900">NASA Space Apps Challenge - Finalista Global</h3>
                      <p className="text-sm text-gray-700">Top 45 a nivel mundial entre miles de equipos participantes.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* References */}
              <section>
                <h2 className="text-lg font-bold text-[#1e40af] uppercase tracking-wider mb-4 border-b-2 border-gray-200 pb-2">
                  Referencias
                </h2>
                <p className="text-sm text-gray-600 italic">
                  Disponibles bajo solicitud.
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-exact {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
