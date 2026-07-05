import { ArrowLeft, CheckCircle2, ExternalLink, Github, Layers3, LockKeyhole, MessageCircle, Rocket, ShieldCheck } from 'lucide-react';
import { contact, getWhatsAppUrl } from '../data/contact.js';
import { ecosystemSummary, getProjectBySlug, projects } from '../data/projects.js';
import { demoDisclaimer } from '../data/site.js';

function getSampleBadge(project) {
  if (project.sampleState === 'internal') return { label: 'Vista interna', classes: 'border-amber-300/25 bg-amber-300/10 text-amber-100' };
  if (project.sampleState === 'available') return { label: 'Muestra pública disponible', classes: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100' };
  return { label: 'Muestra en preparación', classes: 'border-slate-400/25 bg-slate-400/10 text-slate-200' };
}

function getSampleAction(project) {
  if (project.sampleState === 'available') {
    return { label: 'Abrir muestra', href: project.demoPath, variant: 'primary' };
  }

  if (project.sampleState === 'internal') {
    return { label: 'Vista interna', href: project.demoPath, variant: 'secondary' };
  }

  if (project.slug === 'fdr-centro-podologico') {
    return { label: 'Pendiente de reconstrucción', href: project.demoPath, variant: 'secondary' };
  }

  return { label: 'Ver estado de muestra', href: project.demoPath, variant: 'secondary' };
}
import BrandMark from './BrandMark.jsx';
import FloatingActions from './FloatingActions.jsx';
import Footer from './Footer.jsx';
import ProjectLinks from './ProjectLinks.jsx';

const accentClasses = {
  cyan: 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100',
  mint: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100',
  blue: 'border-sky-300/25 bg-sky-300/10 text-sky-100',
};

export default function ProjectsHub({ slug }) {
  const project = slug ? getProjectBySlug(slug) : null;

  if (slug && project) {
    return <ProjectDetail project={project} />;
  }

  return <ProjectsIndex />;
}

function ProjectsIndex() {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden text-slate-100 selection:bg-cyan-300 selection:text-ink">
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <ProjectsTopbar />

        <section className="brand-hero mt-10 p-7 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <div className="status-pill mb-6 w-fit">
                <Layers3 size={16} /> Hub de proyectos
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-7xl">
                Vitrina técnica con <span className="text-gradient">repos, demos y rutas seguras.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cada proyecto tiene una ficha pública. Las muestras se marcan según estén listas, en preparación o reservadas para uso interno.
              </p>
            </div>
            <div className="lab-panel p-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Regla de seguridad</p>
              <p className="mt-3 text-2xl font-black text-white">La demo vende la solución. El sistema real queda privado.</p>
              <p className="mt-4 leading-7 text-slate-300">{demoDisclaimer.description}</p>
            </div>
          </div>
        </section>



        <section className="grid gap-4 py-8 md:grid-cols-3">
          {ecosystemSummary.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="metric-card group">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="break-words text-lg font-black text-white">{item.value}</p>
                <ExternalLink className="shrink-0 text-emerald-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
              </div>
            </a>
          ))}
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="lab-card p-5 md:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">{project.family} · {project.client}</p>
                  <h2 className="mt-2 text-3xl font-black text-white">{project.name}</h2>
                  <p className="mt-2 font-bold text-cyan-200">{project.category}</p>
                </div>
                <span className={`w-fit rounded-full border px-3 py-1 text-xs font-bold ${accentClasses[project.accent] ?? accentClasses.cyan}`}>{project.status}</span>
              </div>

              <p className="mt-5 leading-7 text-slate-300">{project.summary}</p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-slate-500">Estado de muestra</p>
                  <span className={`rounded-full border px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] ${getSampleBadge(project).classes}`}>
                    {getSampleBadge(project).label}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.sampleNote}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.modules.slice(0, 4).map((module) => (
                  <span key={module} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
                    {module}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <ProjectLinks project={project} compact />
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function ProjectDetail({ project }) {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden text-slate-100 selection:bg-cyan-300 selection:text-ink">
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <ProjectsTopbar />

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <div className="lab-card p-7 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">{project.family}</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-7xl">{project.name}</h1>
            <p className="mt-5 text-xl font-bold text-cyan-200">{project.category}</p>
            <p className="mt-6 text-lg leading-8 text-slate-300">{project.summary}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <InfoCard label="Estado" value={project.status} />
              <InfoCard label="Madurez" value={project.maturity} />
              <InfoCard label="Línea / cliente" value={project.client} />
              <InfoCard label="Repositorio" value={project.repository?.label ?? 'Pendiente'} />
              <InfoCard label="Deploy" value={project.deploy?.status ?? 'Próximamente'} />
              <InfoCard label="Ruta futura" value={project.futureUrl.replace('https://', '')} />
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-500">Para quién</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{project.audience}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <StatusStrip icon={Github} label="Código" value={project.repository?.status ?? 'Pendiente'} />
              <StatusStrip icon={Rocket} label="Publicación" value={project.deploy?.note ?? 'Demo segura dentro del sitio principal.'} />
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-slate-500">Estado de muestra</p>
                <span className={`rounded-full border px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] ${getSampleBadge(project).classes}`}>
                  {getSampleBadge(project).label}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.sampleNote}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="lab-panel p-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Links del proyecto</p>
              <h2 className="mt-2 text-2xl font-black text-white">Accesos públicos controlados</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">Puedes compartir estos links para conversar el proyecto sin entregar accesos privados.</p>
              <div className="mt-5">
                <ProjectLinks project={project} />
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-2 xl:grid-cols-4">
          <ProjectPanel title="Problema" items={[project.problem]} />
          <ProjectPanel title="Solución" items={[project.solution]} />
          <ProjectPanel title="Módulos del sistema" items={project.modules} />
          <ProjectPanel title="Qué se puede mostrar" items={project.publicScope} />
        </section>

        <section className="grid gap-5 pb-10 lg:grid-cols-2">
          <ProjectPanel title="Qué queda privado" items={project.privateScope} />
          <ProjectPanel title="Qué está construido" items={project.whatIsBuilt} />
        </section>

        <section className="pb-10">
          <div className="lab-panel p-6 md:p-8">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-cyan-200">Próximo paso</p>
            <h2 className="mt-3 text-2xl font-black text-white">{project.nextStep}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.whatIsPending?.join(' · ')}</p>
          </div>
        </section>

        <section className="lab-panel p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">Demo pública / sistema privado</p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">La ficha y la demo son públicas. El producto real no.</h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                Esta estructura permite vender, demostrar y explicar el proyecto sin exponer bases de datos, permisos, paneles internos ni información de clientes.
              </p>
            </div>
            <div className="grid gap-3">
              {['Ficha comercial pública', 'Demo con datos ficticios', 'Ruta futura reservada', 'Sistema privado separado'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-300">
                  {item.includes('privado') ? <LockKeyhole className="text-amber-200" size={18} /> : <ShieldCheck className="text-cyan-300" size={18} />}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="cta-panel p-7 text-center md:p-10">
            <h2 className="text-3xl font-black text-white">¿Quieres mostrar este proyecto a un cliente?</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">Comparte la ficha pública del proyecto o revisa el estado de la muestra. Para implementación, acceso privado o adaptación al negocio, conversemos por contacto directo.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              {(() => {
                const action = getSampleAction(project);
                return (
                  <a href={action.href} className={action.variant === 'primary' ? 'button-primary' : 'button-secondary'}>
                    <ExternalLink size={18} /> {action.label}
                  </a>
                );
              })()}
              <a href={getWhatsAppUrl(`Hola Crohnoz Labs, quiero conversar sobre ${project.name}.`)} target="_blank" rel="noreferrer" className="button-secondary"><MessageCircle size={18} /> WhatsApp {contact.whatsappDisplay}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function ProjectsTopbar() {
  return (
    <header className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-ink/80 p-4 shadow-card backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
      <a href="/" className="inline-flex items-center gap-3 text-white">
        <BrandMark />
      </a>
      <div className="flex flex-wrap gap-2">
        <a href="/proyectos" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/10">Hub proyectos</a>
        <a href="/muestras" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/10">Muestras</a>
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/10">
          <ArrowLeft size={16} /> Inicio
        </a>
      </div>
    </header>
  );
}

function StatusStrip({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.035] p-4">
      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
        <Icon size={15} /> {label}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  );
}

function ProjectPanel({ title, items }) {
  return (
    <article className="lab-card p-6">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
