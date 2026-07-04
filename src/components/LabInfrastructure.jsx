import { Activity, Cloud, Database, Lock, Network, ServerCog, TerminalSquare } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const labStack = [
  { icon: TerminalSquare, label: 'Linux, terminal y automatización' },
  { icon: Database, label: 'Django, APIs y bases de datos por cliente' },
  { icon: Cloud, label: 'Deploys web y servicios en la nube' },
  { icon: ServerCog, label: 'Docker, Portainer y servicios internos' },
  { icon: Activity, label: 'Monitoreo, backups y recuperación' },
  { icon: Lock, label: 'Seguridad operativa básica' },
];

export default function LabInfrastructure() {
  return (
    <section id="infraestructura" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div className="lab-panel p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-mintlab" />
            <span className="ml-3 font-mono text-xs text-slate-500">cronhoz-lab-status</span>
          </div>

          <div className="space-y-3 font-mono text-sm">
            <Status label="homelab" value="active" />
            <Status label="deploy pipeline" value="ready" />
            <Status label="monitoring" value="enabled" />
            <Status label="database policy" value="separate · backed up" />
            <Status label="legacy hardware" value="reusable" />
            <Status label="business focus" value="administrative solutions" />
            <Status label="delivery model" value="local · cloud · hybrid" />
          </div>

          <div className="mt-6 rounded-3xl border border-cyan-300/15 bg-cyan-300/10 p-5">
            <div className="flex items-center gap-3 text-cyan-100">
              <Network size={21} />
              <p className="font-black">Infraestructura progresiva</p>
            </div>
            <p className="mt-3 leading-7 text-slate-300">
              Partimos simple y escalamos solo cuando el uso y el presupuesto lo justifican.
            </p>
          </div>
        </div>

        <div>
          <SectionHeader eyebrow="Infraestructura real" title="Un laboratorio pequeño, real y preparado para probar soluciones.">
            <p>
              Detrás del sitio hay un entorno de pruebas: servidores locales, monitoreo, respaldos, despliegues y equipos reutilizados. No es lujo; es una base práctica para construir y sostener proyectos con presupuesto realista.
            </p>
          </SectionHeader>

          <div className="mt-8 grid gap-3">
            {labStack.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
                  <Icon className="text-cyan-200" size={20} />
                  <span className="font-semibold text-slate-200">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Status({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-black/20 px-4 py-3 ring-1 ring-white/10">
      <span className="text-slate-400">{label}</span>
      <span className="text-cyan-200">{value}</span>
    </div>
  );
}
