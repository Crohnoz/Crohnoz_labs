import { ArrowRight, CheckCircle2, Cpu, Database, GitBranch, ShieldCheck, TerminalSquare, Workflow } from 'lucide-react';
import { brand } from '../data/brand.js';
import { featuredMetrics } from '../data/projects.js';
import BrandMark from './BrandMark.jsx';

const systemNodes = [
  { icon: Workflow, title: 'Entender', text: 'Primero miramos cómo se trabaja hoy.' },
  { icon: Database, title: 'Ordenar', text: 'Juntamos datos, historial y estados en un flujo claro.' },
  { icon: GitBranch, title: 'Construir', text: 'Convertimos ese flujo en una herramienta usable.' },
];

export default function Hero() {
  return (
    <section id="inicio" className="hero-spotlight relative mx-auto max-w-7xl px-5 pb-16 pt-14 md:pb-24 md:pt-24 lg:px-8">
      <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-mintlab/10 blur-3xl" />
      <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
        <div>
          <div className="status-pill mb-6">
            <TerminalSquare size={16} className="text-mintlab" />
            Taller digital · procesos · automatización · soporte
          </div>

          <div className="mb-8 hidden md:block">
            <BrandMark />
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
            {brand.claim.split(' ').slice(0, 3).join(' ')} <span className="text-gradient">{brand.claim.split(' ').slice(3).join(' ')}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Crohnoz Labs transforma problemas operativos en sistemas simples, útiles y mantenibles. Ayudamos a negocios reales a ordenar procesos, automatizar tareas y sostener herramientas que realmente sirven.
          </p>

          <div className="mt-7 flex flex-wrap gap-2 text-sm font-bold text-slate-300">
            <span className="accent-chip">Sistemas administrativos</span>
            <span className="accent-chip">Automatización</span>
            <span className="accent-chip">Base de datos</span>
            <span className="accent-chip">Recuperación y continuidad</span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="button-primary w-full justify-center sm:w-auto">
              Pedir diagnóstico inicial
              <ArrowRight size={19} />
            </a>
            <a href="/proyectos" className="button-secondary w-full justify-center sm:w-auto">
              Ver cómo trabajamos
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {featuredMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="text-2xl font-black text-white">{metric.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-mintlab/10 blur-3xl" />
          <div className="console-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,.18),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(56,189,246,.12),transparent_25%)]" />
            <div className="relative mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-mintlab" />
              <span className="ml-3 font-mono text-xs text-slate-400">crohnoz@labs:~/operacion</span>
            </div>

            <div className="relative space-y-4">
              <div className="rounded-3xl border border-mintlab/20 bg-black/25 p-5">
                <p className="font-mono text-sm text-mintlab">&gt; cronhoz --ordenar operacion</p>
                <p className="mt-3 text-2xl font-black text-white">A veces no hace falta empezar grande.</p>
                <p className="mt-2 leading-7 text-slate-300">
                  A veces basta con escuchar bien, ordenar el flujo y construir la primera herramienta correcta para resolver el problema real.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {systemNodes.map((node) => (
                  <ConsoleLine key={node.title} icon={node.icon} label={node.title} text={node.text} />
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="console-line">
                  <div className="mb-2 flex items-center gap-2 text-mintlab">
                    <CheckCircle2 size={17} />
                    <span className="font-bold">Resultado</span>
                  </div>
                  <p className="leading-7 text-slate-300">Menos búsqueda, menos doble trabajo y más claridad para decidir.</p>
                </div>
                <div className="console-line">
                  <div className="mb-2 flex items-center gap-2 text-mintlab">
                    <ShieldCheck size={17} />
                    <span className="font-bold">Separación</span>
                  </div>
                  <p className="leading-7 text-slate-300">Las fichas y estados de muestra ayudan a entender la idea sin exponer datos ni accesos reales.</p>
                </div>
              </div>
            </div>

            <div className="relative mt-5 rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                <Cpu className="text-mintlab" size={18} />
                <span>Primero la operación. Después la tecnología.</span>
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                Así evitamos construir de más y enfocamos el esfuerzo donde realmente mueve la aguja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsoleLine({ icon: Icon, label, text }) {
  return (
    <div className="console-line">
      <div className="mb-2 flex items-center gap-2 text-mintlab">
        <Icon size={17} />
        <span className="font-bold">{label}</span>
      </div>
      <p className="leading-7 text-slate-300">{text}</p>
    </div>
  );
}
