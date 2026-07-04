import { AlertTriangle } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { painPoints } from '../data/solutions.js';

export default function PainPoints() {
  return (
    <section id="problemas" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <SectionHeader eyebrow="Señales comunes" title="Cuando el negocio empieza a crecer, algunas cosas se empiezan a escapar.">
          <p>
            No siempre falta trabajo. Muchas veces sobra esfuerzo y falta una forma más clara de guardar, revisar y compartir la información.
          </p>
          <p className="mt-4">
            Ahí es donde una herramienta bien hecha puede devolver tiempo, orden y control.
          </p>
        </SectionHeader>

        <div className="grid gap-3 sm:grid-cols-2">
          {painPoints.map((point) => (
            <div key={point} className="metric-card group p-5">
              <AlertTriangle className="mb-4 text-cyan-300" size={22} />
              <p className="font-semibold leading-7 text-slate-200">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
