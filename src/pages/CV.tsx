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
  Dribbble,
  Bike,
  Music,
  Globe
} from 'lucide-react';

const CV = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    globalThis.print();
  };

  const skills = [
    { name: "Trabajo en Equipo", level: 100 },
    { name: "Liderazgo", level: 100 },
    { name: "Responsabilidad", level: 100 },
    { name: "Proactividad", level: 100 },
    { name: "Creatividad", level: 100 },
    { name: "Adaptabilidad", level: 100 },
    { name: "Desarrollo Full-Stack", level: 100 },
    { name: "Integración de IA", level: 100 },
    { name: "Metodologías Ágiles", level: 100 },
    { name: "Git", level: 100 },
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
            <aside className="w-[35%] bg-[#f0f4f8] p-6 print-exact" style={{ backgroundColor: '#f0f4f8' }}>
              {/* Profile Photo */}
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#1e40af] shadow-lg">
                <img 
                  src="/profile.png" 
                  alt="Andersson David Sánchez Méndez"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-3xl font-bold">AS</div>';
                  }}
                />
              </div>

              {/* Contact Info */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-[#1e40af] pb-1">
                  Contacto
                </h3>
                <div className="space-y-2 text-xs">
                  <a href="mailto:anderssondavidsanchez@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                    <Mail className="w-3 h-3 text-[#1e40af] flex-shrink-0" />
                    <span className="break-all">anderssondavidsanchez@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-3 h-3 text-[#1e40af] flex-shrink-0" />
                    <span>+57 323 810 6575</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-3 h-3 text-[#1e40af] flex-shrink-0" />
                    <span>Bogotá, Colombia (111211)</span>
                  </div>
                </div>
              </div>

              {/* About Me */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-[#1e40af] pb-1">
                  Perfil Profesional
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed text-justify">
                  Estudiante de Ingeniería de Sistemas bilingüe y Finalista Global en el NASA Space Apps Challenge, 
                  con perfil de Desarrollador Full-Stack y experiencia en Machine Learning (CNN), Java (Spring Boot), 
                  React y automatización CI/CD. Me distingo por convertir sólidos fundamentos técnicos en soluciones 
                  innovadoras y escalables, trabajando bajo metodologías ágiles para maximizar eficiencia y calidad 
                  en el desarrollo de software.
                </p>
              </div>

              {/* Skills with Progress Bars */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-[#1e40af] pb-1">
                  Habilidades
                </h3>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <div key={`skill-${skill.name}-${index}`}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-1.5">
                        <div 
                          className="bg-[#1e40af] h-1.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-[#1e40af] pb-1">
                  Idiomas
                </h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-700">Español</span>
                      <span className="text-gray-500">Nativo</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-1.5">
                      <div className="bg-[#1e40af] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-700">Inglés</span>
                      <span className="text-gray-500">B2</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-1.5">
                      <div className="bg-[#1e40af] h-1.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-[#1e40af] pb-1">
                  Aficiones
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <Dumbbell className="w-5 h-5 text-[#1e40af]" />
                    <span className="text-[10px] text-gray-600">Gym</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-5 h-5 text-[#1e40af]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
                    </svg>
                    <span className="text-[10px] text-gray-600">Running</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Dribbble className="w-5 h-5 text-[#1e40af]" />
                    <span className="text-[10px] text-gray-600">Baloncesto</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Bike className="w-5 h-5 text-[#1e40af]" />
                    <span className="text-[10px] text-gray-600">Ciclismo</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Music className="w-5 h-5 text-[#1e40af]" />
                    <span className="text-[10px] text-gray-600">Música</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Globe className="w-5 h-5 text-[#1e40af]" />
                    <span className="text-[10px] text-gray-600">Idiomas</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-xs font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-[#1e40af] pb-1">
                  Redes & Enlaces
                </h3>
                <div className="space-y-2">
                  <a 
                    href="https://www.linkedin.com/in/andersson-david-sánchez-méndez-676b72194" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-gray-700 hover:text-blue-600"
                  >
                    <Linkedin className="w-3 h-3 text-[#1e40af]" />
                    <span className="break-all">LinkedIn Profile</span>
                  </a>
                  <a 
                    href="https://github.com/AnderssonProgramming" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-gray-700 hover:text-blue-600"
                  >
                    <Github className="w-3 h-3 text-[#1e40af]" />
                    <span>AnderssonProgramming</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Content */}
            <main className="w-[65%] p-6 bg-white">
              {/* Header */}
              <header className="mb-6">
                <h1 className="text-3xl font-black text-gray-900 leading-tight tracking-tight uppercase">
                  Andersson David
                  <br />
                  <span className="text-[#1e40af]">Sánchez Méndez</span>
                </h1>
                <div className="mt-2 inline-block px-3 py-1.5 bg-blue-100 rounded-lg">
                  <span className="text-[#1e40af] font-semibold text-xs">
                    🚀 NASA Space Apps Global Finalist | Full-Stack Developer
                  </span>
                </div>
              </header>

              {/* Work Experience */}
              <section className="mb-6">
                <h2 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-gray-200 pb-1">
                  Experiencia Laboral
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Monitor Académico de Programación Orientada a Objetos</h3>
                    <p className="text-[#1e40af] font-medium text-xs mb-0.5">
                      Escuela Colombiana de Ingeniería Julio Garavito | Bogotá
                    </p>
                    <p className="text-gray-500 text-[10px] mb-1">Ago 2025 - Dic 2025</p>
                    <p className="text-xs text-gray-700 text-justify">
                      Brindé apoyo académico, facilitando el aprendizaje de Java y los pilares fundamentales: 
                      encapsulamiento, herencia, polimorfismo y abstracción. Orienté a los estudiantes en la 
                      implementación de soluciones de software y en la adopción de buenas prácticas de codificación, 
                      fortaleciendo mi liderazgo académico y comunicación técnica.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Monitor Académico de Modelos y Bases de Datos</h3>
                    <p className="text-[#1e40af] font-medium text-xs mb-0.5">
                      Escuela Colombiana de Ingeniería Julio Garavito | Bogotá
                    </p>
                    <p className="text-gray-500 text-[10px] mb-1">Feb 2025 - Jun 2025</p>
                    <p className="text-xs text-gray-700 text-justify">
                      Brindé apoyo académico, facilitando el aprendizaje de Oracle SQL Developer y diseño relacional 
                      para los estudiantes. Orienté la resolución de dudas técnicas y la implementación de soluciones 
                      prácticas, fortaleciendo mis habilidades de comunicación técnica y gestión de grupos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mb-6">
                <h2 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-gray-200 pb-1">
                  Educación
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Ingeniería de Sistemas</h3>
                    <p className="text-[#1e40af] font-medium text-xs mb-0.5">
                      Escuela Colombiana de Ingeniería Julio Garavito | Bogotá
                    </p>
                    <p className="text-gray-500 text-[10px] mb-1">En curso - Expectativa de graduación: 2027</p>
                    <p className="text-xs text-gray-700 text-justify">
                      Estudiante avanzado de Ingeniería de Sistemas. Experiencia en la implementación de proyectos 
                      reales con tecnologías modernas y gestión de proyectos alojados en GitHub.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Bachiller Académico</h3>
                    <p className="text-[#1e40af] font-medium text-xs mb-0.5">
                      Gimnasio Corazón de María | Bogotá
                    </p>
                    <p className="text-gray-500 text-[10px] mb-1">2021</p>
                    <p className="text-xs text-gray-700 text-justify">
                      🏆 Graduado con honores, reconocido como el mejor bachiller. Durante mi formación, destaqué 
                      por mi excelencia académica y compromiso con los valores institucionales de trabajo y servicio, 
                      sentando las bases de mi responsabilidad profesional.
                    </p>
                  </div>
                </div>
              </section>

              {/* Achievements */}
              <section className="mb-6">
                <h2 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-gray-200 pb-1">
                  Logros Destacados
                </h2>
                
                <div className="flex items-start gap-2">
                  <span className="text-lg">🚀</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">NASA Space Apps Challenge - Finalista Global</h3>
                    <p className="text-xs text-gray-700">Top 45 a nivel mundial entre miles de equipos participantes.</p>
                  </div>
                </div>
              </section>

              {/* References */}
              <section>
                <h2 className="text-sm font-bold text-[#1e40af] uppercase tracking-wider mb-3 border-b-2 border-gray-200 pb-1">
                  Referencias
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900 text-xs">Yeikol David Camelo Méndez</h3>
                    <div className="mt-1 space-y-0.5">
                      <p className="text-[10px] text-gray-600 flex items-center gap-1">
                        <Phone className="w-2.5 h-2.5" /> +57 304 586 4691
                      </p>
                      <p className="text-[10px] text-gray-600 flex items-center gap-1">
                        <Mail className="w-2.5 h-2.5" /> yeikol@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900 text-xs">Cristian Alejandro Méndez Gómez</h3>
                    <div className="mt-1 space-y-0.5">
                      <p className="text-[10px] text-gray-600 flex items-center gap-1">
                        <Phone className="w-2.5 h-2.5" /> +57 320 268 8624
                      </p>
                      <p className="text-[10px] text-gray-600 flex items-center gap-1">
                        <Mail className="w-2.5 h-2.5" /> cristian@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
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
