import { ArrowRight, CheckCircle2, MonitorPlay } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import { projects } from '../data/projects.js';

const accentClasses = {
  cyan: 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100',
  mint: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100',
  blue: 'border-sky-300/25 bg-sky-300/10 text-sky-100',
};

function getSampleBadge(project) {
  if (project.sampleState === 'internal') {
    return {
      label: 'Vista interna',
      classes: 'border-amber-300/25 bg-amber-300/10 text-amber-100',
    };
  }

  if (project.sampleState === 'available') {
    return {
      label: 'Muestra disponible',
      classes: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100',
    };
  }

  return {
    label: 'Muestra en preparación',
    classes: 'border-slate-400/25 bg-slate-400/10 text-slate-200',
  };
}

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow="Proyectos" title="Soluciones nacidas desde problemas reales.">
          <p>
            Cada ficha muestra qué problema se está resolviendo, qué módulos contempla y qué se puede revisar públicamente. Las muestras solo se abren cuando son seguras y no exponen datos reales.
          </p>
        </SectionHeader>
        <a href="/proyectos" className="button-secondary button-compact w-full justify-center sm:w-fit">
          Ver todos los proyectos
        </a>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          const sampleBadge = getSampleBadge(project);

          return (
            <article key={project.name} className="lab-card group flex h-full flex-col p-5">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{project.family}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-white">{project.name}</h3>
                  </div>
                  <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${accentClasses[project.accent] ?? accentClasses.cyan}`}>
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-sm font-bold text-cyan-200">{project.category}</p>
                <p className="mt-4 line-clamp-3 leading-7 text-slate-300">{project.summary}</p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-slate-500">Estado público</p>
                    <span className={`rounded-full border px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] ${sampleBadge.classes}`}>
                      {sampleBadge.label}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">{project.sampleNote}</p>
                </div>

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

                <div className="mt-auto border-t border-white/10 pt-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-400">
                      <MonitorPlay size={15} /> Ficha pública
                    </span>
                    <a href={project.showcasePath} className="inline-flex items-center gap-1 text-xs font-black text-cyan-100 hover:text-cyan-200">
                      Revisar proyecto <ArrowRight size={14} />
                    </a>
                  </div>
                  <ProjectLinks project={project} compact />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
