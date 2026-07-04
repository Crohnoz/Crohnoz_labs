import { ArrowLeft, ArrowRight, CheckCircle2, LockKeyhole, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { contact, getMailtoUrl, getWhatsAppUrl } from '../data/contact.js';
import { getProjectBySlug, projects } from '../data/projects.js';
import { demoDisclaimer, site } from '../data/site.js';

const accentClasses = {
  cyan: 'from-cyan-300/25 to-cyan-300/5 border-cyan-300/25 text-cyan-100',
  mint: 'from-emerald-300/25 to-emerald-300/5 border-emerald-300/25 text-emerald-100',
  blue: 'from-sky-300/25 to-sky-300/5 border-sky-300/25 text-sky-100',
};

export default function ProjectDemoPage({ slug }) {
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return <DemoIndex />;
  }

  if (project.sampleState !== 'available') {
    return <DemoUnavailableState project={project} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100 selection:bg-cyan-300 selection:text-ink">
      <DemoBackground />
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <DemoTopbar />

        <section className={`mt-8 overflow-hidden rounded-[2.5rem] border bg-gradient-to-br p-7 shadow-card md:p-12 ${accentClasses[project.accent] ?? accentClasses.cyan}`}>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-black text-white">
                <ShieldCheck size={17} className="text-cyan-200" />
                {demoDisclaimer.label} · {project.status}
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-7xl">
                {project.name}
              </h1>
              <p className="mt-5 text-xl font-bold text-cyan-100">{project.category}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{project.summary}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsAppUrl(`Hola Crohnoz Labs, quiero conversar sobre una solución parecida a ${project.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-black text-ink shadow-glow transition hover:-translate-y-1 hover:bg-cyan-200"
                >
                  Conversar por WhatsApp
                  <MessageCircle size={19} />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  Volver a Crohnoz Labs
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-ink/72 p-6 backdrop-blur-xl">
              <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-cyan-200">Ruta pública</p>
              <p className="break-all font-mono text-sm text-slate-300">{site.primaryDomain}{project.demoPath}</p>

              <div className="mt-6 rounded-[1.5rem] border border-amber-200/20 bg-amber-200/10 p-5">
                <div className="flex gap-3">
                  <LockKeyhole className="mt-1 shrink-0 text-amber-100" size={20} />
                  <div>
                    <p className="font-black text-white">Es una muestra, no el sistema real</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{demoDisclaimer.title}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <DemoMetric label="Madurez" value={project.maturity} />
                <DemoMetric label="Cliente / línea" value={project.client} />
                <DemoMetric label="Contacto" value={contact.whatsappDisplay} />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-3">
          <DemoPanel title="Qué mostraría esta muestra" items={project.demoBlueprint} />
          <DemoPanel title="Impacto esperado" items={project.impact} />
          <DemoPanel title="Módulos considerados" items={project.modules} />
        </section>

        <section className="lab-panel p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">Cómo usamos esta demo</p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">Una forma simple de entender la solución sin exponer nada sensible.</h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                La demo puede mostrar pantallas, flujo de trabajo y beneficios con datos ficticios. El sistema real vive aparte, con acceso privado, permisos y base de datos protegida.
              </p>
            </div>
            <div className="grid gap-3">
              {['Datos ficticios', 'Sin credenciales reales', 'Sin panel administrativo productivo', 'Sin base de datos del cliente'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-300">
                  <CheckCircle2 className="text-cyan-300" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="lab-panel p-6 text-center md:p-8">
            <h2 className="text-3xl font-black text-white">¿Tu negocio necesita algo parecido?</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">Conversemos el problema y vemos si conviene partir con una automatización, un MVP o una solución más completa.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-black text-ink transition hover:-translate-y-1 hover:bg-cyan-200">
                <MessageCircle size={18} /> WhatsApp {contact.whatsappDisplay}
              </a>
              <a href={getMailtoUrl()} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 font-bold text-white transition hover:border-cyan-300/35 hover:bg-cyan-300/10">
                <Mail size={18} /> {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function DemoUnavailableState({ project }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100 selection:bg-cyan-300 selection:text-ink">
      <DemoBackground />
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <DemoTopbar />
        <section className="cta-panel mt-10 p-7 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Muestra en preparación</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.055em] text-white md:text-7xl">{project.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">La ficha pública sigue disponible, pero la muestra pública aún no está lista.</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{project.sampleNote}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Ficha pública</p>
              <p className="mt-2 text-lg font-black text-white">Disponible</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">La propuesta, el alcance y el contexto pueden revisarse sin exponer el sistema real.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Sistema real</p>
              <p className="mt-2 text-lg font-black text-white">Privado</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Los accesos, permisos y bases de datos permanecen separados de la muestra pública.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={project.showcasePath} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-black text-ink transition hover:-translate-y-1 hover:bg-cyan-200">
              Ver ficha pública
            </a>
            <a href="/proyectos" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 font-bold text-white transition hover:border-cyan-300/35 hover:bg-cyan-300/10">
              Volver al hub de proyectos
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function DemoIndex() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100 selection:bg-cyan-300 selection:text-ink">
      <DemoBackground />
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <DemoTopbar />
        <section className="cta-panel mt-10 p-7 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Muestras públicas</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.055em] text-white md:text-7xl">Muestras públicas de Crohnoz Labs.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Las rutas de muestra se usan para explicar ideas con datos ficticios; cuando una demo aún no está lista, se marca como en preparación o interna.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {projects.map((project) => {
              const isAvailable = project.sampleState === 'available';
              const cardContent = (
                <>
                  <p className="text-sm font-semibold text-slate-400">{project.category}</p>
                  <p className="mt-1 text-2xl font-black text-white">{project.name}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.sampleNote}</p>
                </>
              );

              if (isAvailable) {
                return (
                  <a key={project.slug} href={project.demoPath} className="nav-card group p-5">
                    {cardContent}
                  </a>
                );
              }

              return (
                <div key={project.slug} className="nav-card cursor-not-allowed p-5 opacity-90">
                  {cardContent}
                  <span className="mt-4 inline-flex rounded-full border border-slate-400/25 bg-slate-400/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-200">
                    {project.sampleState === 'internal' ? 'Vista interna' : 'En preparación'}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

function DemoTopbar() {
  return (
    <header className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-ink/80 p-4 shadow-card backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
      <a href="/" className="inline-flex items-center gap-3 text-white">
        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-black text-cyan-100">C</span>
        <span>
          <span className="block font-black">{site.name}</span>
          <span className="block text-xs text-slate-400">{site.primaryDomain}</span>
        </span>
      </a>
      <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/10">
        <ArrowLeft size={16} /> Volver al sitio principal
      </a>
    </header>
  );
}

function DemoMetric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </div>
  );
}

function DemoPanel({ title, items }) {
  return (
    <article className="lab-card">
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

function DemoBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-radial-lab" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
    </>
  );
}
