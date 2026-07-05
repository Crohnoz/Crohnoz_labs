import { CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { serviceModels } from '../data/solutions.js';

export default function CommercialModels() {
  return (
    <section id="modelos" className="border-y border-white/10 bg-white/[0.025] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Formas de trabajo" title="Distintas maneras de empezar, según lo que ya está pasando." align="center">
          <p>
            No todos llegan con el mismo problema ni con la misma urgencia. Algunas personas necesitan ordenar el proceso; otras necesitan una primera herramienta útil, una recuperación o una continuidad más seria.
          </p>
        </SectionHeader>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceModels.map((model) => (
            <article key={model.name} className="lab-card flex flex-col">
              <span className="mb-5 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                {model.tag}
              </span>
              <h3 className="text-2xl font-black text-white">{model.name}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-300">{model.description}</p>
              <ul className="mt-6 space-y-3">
                {model.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 text-center">
          <p className="text-lg font-black text-white">El primer paso suele ser diagnóstico.</p>
          <p className="mt-2 text-slate-300">
            A partir de ahí se define si conviene ordenar el proceso, construir un MVP, recuperar algo existente o sostenerlo con continuidad.
          </p>
        </div>
      </div>
    </section>
  );
}
