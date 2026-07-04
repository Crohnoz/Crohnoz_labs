import SectionHeader from './SectionHeader.jsx';
import { processSteps } from '../data/solutions.js';

export default function Method() {
  return (
    <section id="metodo" className="border-y border-white/10 bg-white/[0.025] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <SectionHeader eyebrow="Método de trabajo" title="Antes de construir, entendemos cómo trabaja el negocio.">
            <p>
              El objetivo no es llenar todo de software. Es resolver primero lo que más duele, probarlo con uso real y hacerlo crecer cuando tenga sentido.
            </p>
            <div className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-base font-black text-white">Criterio simple</p>
              <p className="mt-2 text-base leading-7 text-slate-300">
                Si una función no ahorra tiempo, evita errores o mejora una decisión, no parte como prioridad.
              </p>
            </div>
          </SectionHeader>

          <div className="relative space-y-4 before:absolute before:left-6 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-cyan-300/20">
            {processSteps.map((item) => (
              <div key={item.step} className="lab-card relative grid grid-cols-[3rem_1fr] gap-5 rounded-[1.75rem] p-5">
                <div className="z-10 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-sm font-black text-ink shadow-glow">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
