import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import QuickNavigation from './components/QuickNavigation.jsx';
import BrandSystem from './components/BrandSystem.jsx';
import BrandPage from './components/BrandPage.jsx';
import Solutions from './components/Solutions.jsx';
import Projects from './components/Projects.jsx';
import ProjectsHub from './components/ProjectsHub.jsx';
import ProjectDemoPage from './components/ProjectDemoPage.jsx';
import ExplorePage from './components/ExplorePage.jsx';
import Method from './components/Method.jsx';
import ManagedInfrastructure from './components/ManagedInfrastructure.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';


  if (pathname === '/marca') {
    return <BrandPage />;
  }

  if (pathname === '/proyectos') {
    return <ProjectsHub />;
  }

  if (pathname.startsWith('/proyectos/')) {
    return <ProjectsHub slug={pathname.split('/').filter(Boolean).at(1)} />;
  }

  if (pathname === '/explorar') {
    return <ExplorePage />;
  }

  if (pathname === '/muestras') {
    return <ProjectDemoPage />;
  }

  if (pathname.startsWith('/muestras/')) {
    return <ProjectDemoPage slug={pathname.split('/').filter(Boolean).at(1)} />;
  }

  return (
    <div className="site-shell min-h-screen overflow-x-hidden text-slate-100 selection:bg-cyan-300 selection:text-ink">
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <QuickNavigation />
        <BrandSystem />
        <Solutions />
        <Projects />
        <Method />
        <ManagedInfrastructure />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
