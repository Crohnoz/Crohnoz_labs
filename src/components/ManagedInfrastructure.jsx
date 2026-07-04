import { ArchiveRestore, Cloud, Database, HardDrive, LockKeyhole, ServerCog, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { continuityPrinciples, infrastructurePlans, productionPolicy } from '../data/solutions.js';

const iconByName = {
  Database,
  Cloud,
  ArchiveRestore,
  ShieldCheck,
  ServerCog,
  HardDrive,
  LockKeyhole,
};

export default function ManagedInfrastructure() {
  return (
    <section id="continuidad" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader eyebrow="Continuidad operativa" title="No basta con construir el sistema. También hay que mantenerlo vivo.">
            <p>
              La experiencia con FDR dejó una lección clara: una demo puede vivir en un entorno temporal, pero un sistema de cliente necesita base de datos, respaldo y una ruta de recuperación.
            </p>
            <p className="mt-4">
              En Crohnoz Labs queremos que cada proyecto tenga una separación sana: demo pública con datos ficticios, sistema real privado y respaldo administrado según el nivel de uso.
            </p>
          </SectionHeader>

          <div className="mt-8 rounded-[2rem] border border-emerald-300/20 bg-emerald-300/10 p-6">
            <div className="flex items-center gap-3 text-emerald-100">
              <Database size={22} />
              <p className="font-black">Base de datos administrada</p>
            </div>
            <p className="mt-3 leading-7 text-slate-300">
              El cliente no debería preocuparse por vencimientos, credenciales sueltas o servicios gratuitos que dejan de funcionar. Eso tiene que quedar dentro del servicio técnico de Crohnoz.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="lab-panel p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-200">Política interna</p>
            <h3 className="mt-3 text-3xl font-black text-white">Demo, producción y respaldo no son lo mismo.</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {productionPolicy.map((item) => {
                const Icon = iconByName[item.icon] ?? ShieldCheck;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-3 text-emerald-100">
                      <Icon size={19} />
                      <p className="font-black">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {infrastructurePlans.map((plan) => (
              <article key={plan.name} className="lab-card p-5">
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
                  {plan.tag}
                </span>
                <h3 className="mt-5 text-2xl font-black text-white">{plan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{plan.description}</p>
                <ul className="mt-5 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <ShieldCheck className="mt-0.5 shrink-0 text-emerald-300" size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="console-panel">
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-mintlab" />
              <span className="ml-3 font-mono text-xs text-slate-500">crohnoz-continuity-policy</span>
            </div>
            <div className="grid gap-3 font-mono text-sm">
              {continuityPrinciples.map((line) => (
                <div key={line} className="console-line">
                  <span className="text-emerald-300">&gt;</span> <span className="text-slate-300">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
