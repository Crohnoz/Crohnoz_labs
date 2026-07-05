import { ClipboardCheck, Send } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { diagnosticChecklist } from '../data/solutions.js';

export default function DiagnosticIntake() {
  return (
    <section id="diagnostico" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader eyebrow="Diagnóstico inicial" title="Partimos conversando, no a ciegas.">
            <p>
              No necesitas llegar con un documento perfecto. Puedes llegar con una molestia, una idea a medias o un proceso que ya no está dando abasto.
            </p>
          </SectionHeader>

          <div className="lab-panel mt-8 p-6">
            <p className="font-black text-white">Qué debería salir de esa conversación</p>
            <p className="mt-3 leading-7 text-slate-300">
              Un mapa simple del problema, cómo se resuelve hoy, qué datos maneja, qué se repite y qué forma de solución tendría más sentido empezar.
            </p>
          </div>
        </div>

        <div className="lab-card">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-ink shadow-glow">
              <ClipboardCheck size={24} />
            </div>
            <div>
              <p className="text-xl font-black text-white">Qué miramos juntos</p>
              <p className="text-sm text-slate-400">Puntos para aterrizar la idea</p>
            </div>
          </div>

          <div className="grid gap-3">
            {diagnosticChecklist.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <span className="mt-1 h-4 w-4 rounded border border-cyan-300/50 bg-cyan-300/10" />
                <span className="leading-7 text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-black text-ink transition hover:-translate-y-1 hover:bg-cyan-200"
          >
            Contar mi problema
            <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
