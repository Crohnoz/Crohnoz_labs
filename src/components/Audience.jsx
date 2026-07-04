import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { audiences } from '../data/solutions.js';

export default function Audience() {
  return (
    <section id="clientes" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow="Para quiénes" title="Clientes que necesitan orden antes de seguir creciendo." align="center">
        <p>
          La mejor oportunidad para Cronhoz Labs está donde ya existe una operación funcionando, pero las herramientas actuales no alcanzan para sostenerla.
        </p>
      </SectionHeader>

      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {audiences.map((audience) => (
          <article key={audience.title} className="lab-card group flex min-h-full flex-col">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-cyan-200 ring-1 ring-white/10 transition group-hover:bg-cyan-300/10">
              <ArrowRight size={21} />
            </div>
            <h3 className="text-xl font-black text-white">{audience.title}</h3>
            <p className="mt-3 flex-1 leading-7 text-slate-300">{audience.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {audience.examples.map((example) => (
                <span key={example} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
                  {example}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
