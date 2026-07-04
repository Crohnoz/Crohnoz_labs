import { AlertTriangle } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { painPoints } from '../data/solutions.js';

export default function PainPoints() {
  return (
    <section id="problemas" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <SectionHeader eyebrow="Problemas reales" title="Cuando el negocio crece, el desorden también crece.">
          <p>
            Muchos negocios no fallan por falta de esfuerzo. Fallan porque la información queda repartida entre cuadernos, planillas, WhatsApp, fotos y memoria humana.
          </p>
          <p className="mt-4">
            Cronhoz Labs convierte esa operación diaria en sistemas simples, medibles y funcionales.
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
