import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingActions from './FloatingActions.jsx';
import PainPoints from './PainPoints.jsx';
import Audience from './Audience.jsx';
import DemoRoutes from './DemoRoutes.jsx';
import ReuseTech from './ReuseTech.jsx';
import LabInfrastructure from './LabInfrastructure.jsx';
import CommercialModels from './CommercialModels.jsx';
import DiagnosticIntake from './DiagnosticIntake.jsx';
import FAQ from './FAQ.jsx';
import { site } from '../data/site.js';

const exploreCards = [
  { href: '#problemas', title: 'Problemas', text: 'Dolores operativos que sí justifican una solución digital.' },
  { href: '#clientes', title: 'Clientes objetivo', text: 'Quién puede beneficiarse de Cronhoz Labs y por qué.' },
  { href: '#tecnologia', title: 'Tecnología reutilizable', text: 'Equipos antiguos convertidos en herramientas útiles.' },
  { href: '#infraestructura', title: 'Laboratorio', text: 'Base técnica para pruebas, soporte, monitoreo y despliegue.' },
  { href: '#modelos', title: 'Modelos de trabajo', text: 'Diagnóstico, MVP, sistema operacional y mantención.' },
  { href: '#diagnostico', title: 'Diagnóstico', text: 'Preguntas clave para bajar una idea a una solución realista.' },
];

export default function ExplorePage() {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden text-slate-100 selection:bg-cyan-300 selection:text-ink">
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="main-content">
        <section id="explorar" className="hero-spotlight mx-auto max-w-7xl px-5 pb-10 pt-14 lg:px-8">
          <div className="cta-panel p-7 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Explorar Cronhoz Labs</p>
            <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-7xl">
              El detalle queda aquí. La portada queda limpia.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Esta zona concentra el contenido extendido de {site.name}: problemas, clientes, tecnología, infraestructura, modelos comerciales, diagnóstico y preguntas frecuentes.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {exploreCards.map((card) => (
                <a key={card.href} href={card.href} className="nav-card group">
                  <p className="font-black text-white">{card.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <PainPoints />
        <Audience />
        <DemoRoutes />
        <ReuseTech />
        <LabInfrastructure />
        <CommercialModels />
        <DiagnosticIntake />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
