/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  BookOpen, 
  Shield, 
  Target, 
  CheckCircle2, 
  Layout, 
  Clock, 
  Calendar, 
  MapPin, 
  Award, 
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  FileText,
  Briefcase,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Section = ({ id, title, children, icon: Icon, className = "" }: { id: string, title: string, children: React.ReactNode, icon?: any, className?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`py-16 px-6 max-w-5xl mx-auto ${className}`}
  >
    <div className="flex items-center gap-3 mb-8">
      {Icon && <div className="p-2 bg-red-100 rounded-lg text-red-600"><Icon size={24} /></div>}
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const Card = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Layout },
    { id: 'objetivos', label: 'Objetivos', icon: Target },
    { id: 'metodologia', label: 'Metodología', icon: Layers },
    { id: 'contenidos', label: 'Contenidos', icon: BookOpen },
    { id: 'organizacion', label: 'Organización', icon: Clock },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-red-600 rounded flex items-center justify-center text-white font-bold text-lg">UGT</div>
            <span className="font-bold text-xl tracking-tight">Sanidad</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${activeSection === item.id ? 'text-red-600' : 'text-slate-600'}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1bueEYZOqfNQdVRn7dDHCrJPvRvkFLhOG/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Descargar Dossier
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 text-xl font-semibold text-slate-900"
                >
                  <item.icon className="text-red-600" />
                  {item.label}
                </a>
              ))}
              <a 
                href="https://drive.google.com/file/d/1bueEYZOqfNQdVRn7dDHCrJPvRvkFLhOG/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-xl font-semibold text-red-600 mt-4"
              >
                <FileText />
                Descargar Dossier
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header id="inicio" className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-50" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Propuesta de Formación 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              DELEGADOS EN ACCIÓN: <br />
              <span className="text-red-600 italic">CONECTAR, FORMAR Y DEFENDER</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
              Jornadas de información y formación para delegados y delegadas de Sanidad de UGT Castilla y León. Un espacio útil de aprendizaje, actualización y fortalecimiento de la acción sindical.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#objetivos" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                Ver Propuesta <ChevronRight size={20} />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 bg-slate-100 rounded-2xl text-slate-700 font-semibold">
                <Users size={20} className="text-red-600" />
                UGT Sanidad Salamanca
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Planteamiento General */}
      <Section id="planteamiento" title="Planteamiento General" icon={FileText} className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Desde UGT Sanidad Salamanca proponemos la organización de unas Jornadas dirigidas al sector sanitario, con el objetivo de crear un espacio útil de aprendizaje y fortalecimiento de la acción sindical.
            </p>
            <p>
              La propuesta nace de la necesidad de ofrecer formación práctica sobre cuestiones diarias, generando un entorno de encuentro entre compañeros de distintas provincias que favorezca la coordinación y la fraternidad sindical.
            </p>
            <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-r-2xl">
              <p className="text-red-900 font-medium italic">
                "Reforzar la capacitación sindical y fortalecer la cohesión interna de la organización."
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/union/800/600" 
              alt="Acción Sindical" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-red-600" />
                <span className="font-bold">Excelencia Sindical</span>
              </div>
              <p className="text-sm text-slate-500">Capacitación continua para una defensa eficaz de los trabajadores.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Objetivos */}
      <Section id="objetivos" title="Objetivos del Proyecto" icon={Target}>
        <div className="mb-12 p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h3 className="text-2xl font-bold mb-4 relative z-10">Objetivo Principal</h3>
          <p className="text-xl text-slate-300 leading-relaxed relative z-10">
            Formar e informar a los delegados y delegadas de sanidad de UGT Castilla y León en materias prácticas y necesarias para el ejercicio diario de la acción sindical, fomentando el intercambio de experiencias y el sentido de pertenencia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card 
            icon={BookOpen}
            title="Actualización"
            description="Conocimientos en materias de interés sindical y laboral relacionadas con el ámbito sanitario."
          />
          <Card 
            icon={Briefcase}
            title="Herramientas"
            description="Facilitar recursos prácticos que puedan ser aplicados en la actividad cotidiana del delegado."
          />
          <Card 
            icon={Shield}
            title="Unificación"
            description="Unificar criterios de actuación ante situaciones de conflicto o interpretación normativa."
          />
          <Card 
            icon={Users}
            title="Participación"
            description="Favorecer la participación activa de distintas provincias en la exposición de contenidos."
          />
          <Card 
            icon={MessageSquare}
            title="Aprendizaje"
            description="Impulsar el aprendizaje compartido a través del intercambio de experiencias reales."
          />
          <Card 
            icon={CheckCircle2}
            title="Cohesión"
            description="Reforzar la convivencia y la fraternidad entre compañeros y compañeras del sector."
          />
        </div>
      </Section>

      {/* Metodología */}
      <Section id="metodologia" title="Enfoque y Metodología" icon={Layers} className="bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Layout className="text-red-600" /> Formato de Ponencias
              </h3>
              <p className="text-slate-600 mb-6">Bloques de una hora diseñados para mantener la atención y facilitar la interacción.</p>
              <div className="space-y-4">
                {[
                  { time: "30 min", label: "Exposición de la ponencia" },
                  { time: "20 min", label: "Turno de preguntas y debate" },
                  { time: "10 min", label: "Ajuste y margen organizativo" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-mono font-bold text-red-600 w-16">{step.time}</span>
                    <span className="font-semibold text-slate-700">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-6">Metodología Didáctica</h3>
            <ul className="space-y-4">
              {[
                "Medios informáticos y audiovisuales modernos.",
                "Presentaciones visuales, claras y directas.",
                "Dinámicas participativas y resolución de dudas.",
                "Análisis de casos prácticos vinculados al día a día.",
                "Orientación a la utilidad inmediata del delegado."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-red-600 mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contenidos */}
      <Section id="contenidos" title="Contenidos Temáticos" icon={BookOpen}>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
          Programa abierto y flexible, diseñado para cubrir las necesidades reales detectadas en el sector sanitario.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Carrera Profesional", desc: "Actualización normativa y procesos." },
            { title: "AIDAS y Planillas", desc: "Gestión eficiente de turnos y programas." },
            { title: "Nóminas", desc: "Interpretación y resolución de incidencias." },
            { title: "Normativa Básica", desc: "Cómo actuar ante situaciones de conflicto." },
            { title: "Recursos UGT", desc: "SerdeUGT, formación y ventajas de afiliación." },
            { title: "Buenas Prácticas", desc: "Intercambio de modelos entre provincias." }
          ].map((topic, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
            >
              <h4 className="font-bold text-lg mb-2 text-slate-900">{topic.title}</h4>
              <p className="text-sm text-slate-500">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Propuesta Temporal */}
      <Section id="organizacion" title="Propuesta Organizativa" icon={Clock} className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                <Calendar size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Fecha Prevista</h4>
                <p className="text-slate-600 text-lg">Mes de Mayo. Un periodo idóneo para la planificación y organización del sector.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Ubicación</h4>
                <p className="text-slate-600 text-lg">Valladolid. Por su centralidad geográfica para todas las provincias de Castilla y León.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Formato</h4>
                <p className="text-slate-600 text-lg">Jornada de un solo día (Mañana y Tarde). 5-6 ponencias intensivas y prácticas.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-4">Valor Añadido</h4>
              <p className="text-slate-400 mb-6">Esta propuesta no es solo formación, es una herramienta de cohesión y poder sindical.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-red-500" /> Mejora de la preparación</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-red-500" /> Capacidad de respuesta</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-red-500" /> Imagen de utilidad</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-red-500" /> Fraternidad sindical</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Estado del Proyecto</p>
              <p className="text-red-500 font-bold">Fase de Recogida de Propuestas</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer / Conclusion */}
      <footer className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-red-600 rounded-xl text-white font-bold text-2xl mx-auto mb-8 tracking-tighter">UGT</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Conclusión</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Una oportunidad para reforzar la acción sindical desde la formación, la coordinación y el intercambio de experiencias. Juntos somos más fuertes.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-sm font-medium border border-white/10">
            <Users size={16} /> UGT Sanidad Castilla y León
          </div>
          <p className="mt-12 text-slate-600 text-sm">
            © 2026 UGT Sanidad Salamanca. Propuesta abierta y flexible.
          </p>
        </div>
      </footer>
    </div>
  );
}
