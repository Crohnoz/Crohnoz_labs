import SectionHeader from './SectionHeader.jsx';
import { focusPillars } from '../data/solutions.js';

export default function StrategicPositioning() {
  return (
    <section id="posicionamiento" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <SectionHeader eyebrow="Posicionamiento" title="Una forma simple de explicar qué hacemos y por qué importa.">
          <p>
            Crohnoz Labs escucha el problema, ordena el proceso y construye una herramienta que pueda usarse en el día a día.
          </p>
          <p className="mt-4 font-bold text-cyan-100">
            No se trata de sumar tecnología porque sí. Se trata de recuperar tiempo, claridad y control.
          </p>
        </SectionHeader>

        <div className="grid gap-4 sm:grid-cols-2">
          {focusPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="lab-card rounded-[1.75rem]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
                  <Icon size={23} />
                </div>
                <h3 className="text-xl font-black text-white">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
