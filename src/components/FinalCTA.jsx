import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { contact, getMailtoUrl, getWhatsAppUrl } from '../data/contact.js';

export default function FinalCTA() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="cta-panel">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-mintlab/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-emerald-100">Hablemos</p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              ¿Hay una parte de tu negocio que ya pide orden?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Puede ser una agenda, cobros, inventario, pedidos, reportes o simplemente un proceso que se volvió difícil de seguir. Partamos conversando y veamos qué solución tiene sentido.
            </p>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-3">
              <span className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">1. Problema</span>
              <span className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">2. Diagnóstico</span>
              <span className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">3. Sistema</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-ink/70 p-6 backdrop-blur-xl">
            <p className="text-xl font-black text-white">Agenda un primer diagnóstico</p>
            <p className="mt-3 leading-7 text-slate-300">
              Una primera conversación para entender qué está pasando, qué se puede mejorar y cuál sería el primer paso más realista.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="button-primary px-6 py-4"
              >
                <MessageCircle size={19} />
                Escribir por WhatsApp
                <ArrowRight size={18} />
              </a>
              <a
                href={getMailtoUrl()}
                className="button-secondary px-6 py-4"
              >
                <Mail size={18} />
                {contact.email}
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              También puedes escribir directo al WhatsApp comercial: <strong className="text-slate-300">{contact.whatsappDisplay}</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
