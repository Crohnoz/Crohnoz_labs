import { ExternalLink, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { projects } from '../data/projects.js';
import ProjectLinks from './ProjectLinks.jsx';
import { demoDisclaimer } from '../data/site.js';

export default function DemoRoutes() {
  return (
    <section id="muestras" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader eyebrow="Rutas públicas" title="Muestras comerciales sin exponer sistemas reales.">
            <p>
              Cada proyecto tiene una ficha, una demo segura y una ruta futura reservada para que el cliente explore sin entrar al producto privado.
            </p>
          </SectionHeader>

          <div className="lab-panel mt-8 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-ink">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-100">{demoDisclaimer.label}</p>
                <p className="font-black text-white">Separación segura</p>
              </div>
            </div>
            <p className="leading-7 text-slate-300">{demoDisclaimer.description}</p>
          </div>
        </div>

        <div className="grid gap-4">
          {projects.map((project) => (
            <article key={project.slug} className="lab-card p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{project.family}</p>
                  <h3 className="mt-1 text-2xl font-black text-white">{project.name}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{project.category}</p>
                </div>
                <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100">
                  {project.maturity}
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <ProjectLinks project={project} compact />
              </div>
            </article>
          ))}

          <div className="lab-panel p-5 text-sm leading-7 text-slate-400">
            <ExternalLink className="mb-3 text-cyan-200" size={20} />
            Las rutas futuras quedan reservadas como subdominios o rutas internas, pero siempre separadas de los sistemas productivos.
          </div>
        </div>
      </div>
    </section>
  );
}
