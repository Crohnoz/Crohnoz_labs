import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { contact, getMailtoUrl, getWhatsAppUrl } from '../data/contact.js';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      <div className="hidden rounded-2xl border border-white/10 bg-ink/80 p-2 shadow-card backdrop-blur-xl md:flex md:gap-2">
        <a
          href={getMailtoUrl()}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
          aria-label={`Enviar correo a ${contact.email}`}
        >
          <Mail size={19} />
        </a>
        <a
          href="#inicio"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
          aria-label="Volver al inicio"
        >
          <ArrowUp size={19} />
        </a>
      </div>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-ink shadow-glow transition hover:-translate-y-1 hover:bg-cyan-200"
      >
        <MessageCircle size={19} />
        <span className="hidden sm:inline">Hablar con Cronhoz</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
