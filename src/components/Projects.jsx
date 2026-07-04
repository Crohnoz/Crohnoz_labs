import { ArrowRight, CheckCircle2, MonitorPlay } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import { projects } from '../data/projects.js';

const accentClasses = {
  cyan: 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100',
  mint: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100',
  blue: 'border-sky-300/25 bg-sky-300/10 text-sky-100',
};

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow="Proyectos enlazados" title="Una vitrina ordenada: ficha, muestra y ruta futura por proyecto.">
          <p>
            Cada proyecto tiene accesos públicos controlados. La ficha explica el alcance, la muestra enseña el concepto y la ruta futura queda reservada sin exponer el sistema privado.
          </p>
        </SectionHeader>
        <a href="/proyectos" className="button-secondary button-compact w-fit">
          Abrir hub de proyectos
        </a>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="lab-card group p-5">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{project.family}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white">{project.name}</h3>
                </div>
                <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${accentClasses[project.accent]}`}>
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-sm font-bold text-cyan-200">{project.category}</p>
              <p className="mt-4 line-clamp-4 leading-7 text-slate-300">{project.summary}</p>

              <div className="mt-5 grid gap-2">
                {project.impact.slice(0, 2).map((item) => (
                  <div key={item} className="flex gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.modules.slice(0, 3).map((module) => (
                  <span key={module} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
                    {module}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-400">
                    <MonitorPlay size={15} /> Links del proyecto
                  </span>
                  <a href={project.showcasePath} className="inline-flex items-center gap-1 text-xs font-black text-cyan-100 hover:text-cyan-200">
                    Ficha <ArrowRight size={14} />
                  </a>
                </div>
                <ProjectLinks project={project} compact />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
