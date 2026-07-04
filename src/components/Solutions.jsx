import SectionHeader from './SectionHeader.jsx';
import { capabilities, solutions } from '../data/solutions.js';

export default function Solutions() {
  return (
    <section id="soluciones" className="border-y border-white/10 bg-white/[0.025] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Soluciones Cronhoz" title="Orden administrativo, automatización e implementación práctica." align="center">
          <p>
            Desarrollamos herramientas que nacen desde la operación real: qué se cobra, qué se registra, quién lo usa, qué se pierde y qué decisión necesita mejores datos.
          </p>
        </SectionHeader>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <article key={solution.title} className="lab-card rounded-[1.75rem]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
                  <Icon size={23} />
                </div>
                <h3 className="text-xl font-black text-white">{solution.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{solution.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div key={capability.label} className="rounded-3xl border border-cyan-300/15 bg-cyan-300/10 p-5">
                <Icon className="text-cyan-200" size={22} />
                <p className="mt-4 text-sm font-bold leading-6 text-slate-100">{capability.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
