import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { faqItems } from '../data/solutions.js';

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeader eyebrow="Preguntas frecuentes" title="Preguntas que conviene resolver antes de empezar.">
          <p>
            Mientras más claro esté el punto de partida, mejor se puede estimar qué construir, cuánto avanzar y qué dejar para después.
          </p>
        </SectionHeader>

        <div className="grid gap-4">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="lab-card group rounded-[1.75rem] open:border-cyan-300/30 open:bg-cyan-300/10"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-black text-white marker:hidden">
                <span>{item.question}</span>
                <ChevronDown size={22} className="shrink-0 text-cyan-200 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
