import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { navItems, primaryNavItems, secondaryNavItems } from '../data/navigation.js';
import BrandMark from './BrandMark.jsx';

const homeAnchors = navItems.filter((item) => item.type === 'anchor');

function resolveHref(href, pathname) {
  if (href.startsWith('#') && pathname !== '/') {
    return `/${href}`;
  }
  return href;
}

export default function Navbar() {
  const pathname = useMemo(() => window.location.pathname.replace(/\/$/, '') || '/', []);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(pathname === '/' ? 'inicio' : pathname.replace('/', ''));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(documentHeight > 0 ? Math.min(100, (scrollTop / documentHeight) * 100) : 0);

      const candidates = pathname === '/' ? homeAnchors : secondaryNavItems;
      const current = [...candidates]
        .reverse()
        .find((item) => {
          const element = document.getElementById(item.id);
          return element ? scrollTop + 140 >= element.offsetTop : false;
        });

      if (current?.id) {
        setActiveSection(current.id);
      } else if (pathname !== '/') {
        setActiveSection(pathname.replace('/', ''));
      } else {
        setActiveSection('inicio');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const closeMenus = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="site-navbar">
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-mintlab/70 transition-[width] duration-200" style={{ width: `${progress}%` }} />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8" aria-label="Principal">
        <a href="/" className="group flex items-center gap-3" aria-label="Ir al inicio de Crohnoz Labs" onClick={closeMenus}>
          <BrandMark />
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {primaryNavItems.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              href={resolveHref(link.href, pathname)}
              active={activeSection === link.id || (link.href === pathname && pathname !== '/') || (link.id === 'proyectos' && pathname.startsWith('/proyectos')) || (link.id === 'marca' && pathname === '/marca')}
              onClick={closeMenus}
            />
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((value) => !value)}
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-emerald-100"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              Más
              <ChevronDown size={15} className={moreOpen ? 'rotate-180 transition' : 'transition'} />
            </button>

            {moreOpen ? (
              <div className="dropdown-panel absolute right-0 top-12 w-72">
                {secondaryNavItems.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={resolveHref(link.href, pathname)}
                      onClick={closeMenus}
                      className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold transition ${
                        activeSection === link.id ? 'bg-mintlab/10 text-emerald-100' : 'text-slate-300 hover:bg-white/[0.06] hover:text-emerald-100'
                      }`}
                    >
                      <Icon size={17} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/muestras" className="button-secondary button-compact hidden lg:inline-flex">
            Muestras
          </a>
          <a href={resolveHref('#contacto', pathname)} className="button-primary button-compact">
            Diagnóstico
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl border border-white/10 p-2 text-slate-100 xl:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/96 px-5 py-4 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
            {[...navItems, ...secondaryNavItems].map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={`${link.href}-${link.label}`}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    activeSection === link.id ? 'bg-mintlab/10 text-emerald-100' : 'text-slate-200 hover:bg-white/5'
                  }`}
                  href={resolveHref(link.href, pathname)}
                  onClick={closeMenus}
                >
                  <Icon size={18} />
                  {link.label}
                </a>
              );
            })}
            <a
              href={resolveHref('#contacto', pathname)}
              className="button-primary mt-2 py-3 text-center text-sm sm:col-span-2"
              onClick={closeMenus}
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({ link, href, active, onClick }) {
  return (
    <a
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        active ? 'bg-mintlab/10 text-emerald-100 ring-1 ring-mintlab/20' : 'text-slate-300 hover:bg-white/[0.06] hover:text-emerald-100'
      }`}
      href={href}
      onClick={onClick}
    >
      {link.label}
    </a>
  );
}
