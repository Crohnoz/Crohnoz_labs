import { ArrowLeft, ArrowRight, CheckCircle2, Compass, Palette, ShieldCheck, Sparkles } from 'lucide-react';
import { brand, brandApplications, brandPrinciples, brandTone, solutionFamilies, visualIdentity } from '../data/brand.js';
import { site } from '../data/site.js';
import BrandMark from './BrandMark.jsx';
import Footer from './Footer.jsx';
import FloatingActions from './FloatingActions.jsx';

export default function BrandPage() {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden text-slate-100 selection:bg-mintlab selection:text-ink">
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <header className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-ink/80 p-4 shadow-card backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="inline-flex items-center gap-3 text-white">
            <BrandMark />
          </a>
          <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-mintlab/35 hover:bg-mintlab/10">
            <ArrowLeft size={16} /> Volver al sitio principal
          </a>
        </header>

        <section className="brand-hero mt-10 p-7 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <div>
              <div className="status-pill mb-6 w-fit">
                <Sparkles size={16} /> Identidad de trabajo
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-7xl">
                {brand.name}: <span className="text-gradient">tecnología práctica con los pies en la tierra.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{brand.positioning}</p>
            </div>
            <div className="lab-panel p-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-200">Frase central</p>
              <p className="mt-3 text-3xl font-black text-white">{brand.claim}</p>
              <p className="mt-4 leading-7 text-slate-300">{brand.promise}</p>
              <p className="mt-5 rounded-2xl border border-mintlab/20 bg-mintlab/10 p-4 text-sm font-bold text-emerald-100">{site.primaryDomain}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-4">
          {brandPrinciples.map((principle) => (
            <article key={principle.title} className="lab-card p-5">
              <CheckCircle2 className="text-mintlab" size={20} />
              <h2 className="mt-4 text-xl font-black text-white">{principle.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{principle.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 py-6 lg:grid-cols-[.95fr_1.05fr]">
          <div className="lab-panel p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Compass className="text-emerald-200" size={24} />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">Arquitectura</p>
                <h2 className="text-3xl font-black text-white">Familias de solución</h2>
              </div>
            </div>
            <div className="grid gap-3">
              {solutionFamilies.map((family) => (
                <a key={family.name} href={family.route} className="brand-family-card">
                  <div>
                    <p className="font-black text-white">{family.name}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{family.focus}</p>
                  </div>
                  <ArrowRight className="text-emerald-200" size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lab-panel p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Palette className="text-emerald-200" size={24} />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">Sistema visual</p>
                <h2 className="text-3xl font-black text-white">Paleta y uso</h2>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {visualIdentity.map((color) => (
                <article key={color.value} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <div className="mb-4 h-16 rounded-2xl ring-1 ring-white/10" style={{ background: color.value }} />
                  <p className="font-black text-white">{color.name}</p>
                  <p className="mt-1 font-mono text-xs text-emerald-100">{color.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{color.use}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-10 lg:grid-cols-2">
          <div className="lab-card p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">Voz de marca</p>
            <h2 className="mt-3 text-3xl font-black text-white">Cómo queremos sonar</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {brandTone.map((tone) => (
                <div key={tone.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-black text-white">{tone.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{tone.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lab-card p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">Aplicación práctica</p>
            <h2 className="mt-3 text-3xl font-black text-white">Dónde se aplica</h2>
            <div className="mt-6 grid gap-3">
              {brandApplications.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-300">
                  <ShieldCheck className="text-mintlab" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
