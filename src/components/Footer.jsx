import { contact } from '../data/contact.js';
import { site } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr] md:items-start">
        <div>
          <p className="text-lg font-black text-white">{site.name}</p>
          <p className="mt-1 text-sm text-slate-400">Laboratorio de soluciones digitales · {site.primaryDomain}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
            Sistemas administrativos, automatización, infraestructura práctica y continuidad para negocios reales.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-slate-500">Explorar</p>
          <div className="grid gap-2 text-sm text-slate-400">
            <a className="hover:text-emerald-200" href="/marca">Branding</a>
            <a className="hover:text-emerald-200" href="/#soluciones">Soluciones</a>
            <a className="hover:text-emerald-200" href="/proyectos">Hub de proyectos</a>
            <a className="hover:text-emerald-200" href="/muestras">Muestras públicas</a>
            <a className="hover:text-emerald-200" href="/explorar">Detalle extendido</a>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-slate-500">Contacto</p>
          <div className="grid gap-2 text-sm text-slate-400">
            <a className="hover:text-emerald-200" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="hover:text-emerald-200" href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer">{contact.whatsappDisplay}</a>
            <span>{site.locationLabel}</span>
            <span>© {year} {site.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
