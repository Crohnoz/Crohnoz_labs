import { ArrowRight, CheckCircle2, Compass, Layers3 } from 'lucide-react';
import { brandPrinciples, brandPromise, solutionFamilies } from '../data/brand.js';
import SectionHeader from './SectionHeader.jsx';

export default function BrandSystem() {
  return (
    <section id="posicionamiento" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
        <SectionHeader eyebrow={brandPromise.eyebrow} title={brandPromise.title}>
          <p>{brandPromise.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/marca" className="button-primary button-compact">
              Ver branding
            </a>
            <a href="/proyectos" className="inline-flex items-center gap-2 text-sm font-black text-emerald-100 transition hover:text-emerald-200">
              Explorar proyectos <ArrowRight size={16} />
            </a>
          </div>
        </SectionHeader>

        <div className="grid gap-4">
          <div className="lab-card p-5 md:p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-mintlab/10 text-emerald-200 ring-1 ring-mintlab/20">
                <Layers3 size={21} />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">Arquitectura de marca</p>
                <h2 className="mt-1 text-2xl font-black text-white">Familias claras, links claros, sistemas separados.</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {solutionFamilies.map((family) => (
                <a key={family.name} href={family.route} className="brand-family-card">
                  <div>
                    <p className="font-black text-white">{family.name}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{family.focus}</p>
                  </div>
                  <Compass className="text-emerald-200" size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {brandPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="text-mintlab" size={18} />
                <h3 className="mt-3 font-black text-white">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
