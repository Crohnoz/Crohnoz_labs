import SectionHeader from './SectionHeader.jsx';
import { capabilities, solutions } from '../data/solutions.js';

export default function Solutions() {
  return (
    <section id="soluciones" className="border-y border-white/10 bg-white/[0.025] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Soluciones Crohnoz" title="Qué se puede pedir y por dónde empezar." align="center">
          <p>
            No hace falta tener la solución clara desde el inicio. Podemos partir con un diagnóstico, definir el alcance y construir una primera herramienta útil para el problema real.
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

        <div className="mt-10 rounded-[1.75rem] border border-cyan-300/15 bg-cyan-300/[0.06] p-6 text-center md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Lo que suele contratarse</p>
          <p className="mt-3 text-xl font-black text-white">Diagnóstico, sistema MVP, automatización, infraestructura o continuidad.</p>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">La idea es empezar donde el problema es más claro y crecer con el negocio, sin abrir un proyecto grande si lo que hace falta es ordenar una parte concreta del día a día.</p>
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
