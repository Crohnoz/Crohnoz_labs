import { ArrowRight } from 'lucide-react';
import { quickNavigationItems } from '../data/navigation.js';

export default function QuickNavigation() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8" aria-label="Accesos rápidos">
      <div className="lab-panel">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Lectura rápida</p>
            <p className="mt-1 text-sm text-slate-400">La portada queda compacta. Branding, proyectos y demos viven en rutas de exploración.</p>
          </div>
          <a href="/proyectos" className="inline-flex items-center gap-2 text-sm font-black text-cyan-100 transition hover:text-cyan-200">
            Abrir hub de proyectos
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {quickNavigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.href} href={item.href} className="nav-card group">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20 transition group-hover:bg-cyan-300 group-hover:text-ink">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h2 className="font-black text-white">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
