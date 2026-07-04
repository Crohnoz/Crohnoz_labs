import { Laptop, Recycle, Server, TabletSmartphone, Wrench } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const items = [
  { icon: Laptop, title: 'Notebooks antiguos', text: 'Estaciones simples, pantallas internas o terminales livianas para trabajar sin comprar todo de nuevo.' },
  { icon: Server, title: 'Servidores locales', text: 'Respaldos, monitoreo y pruebas internas cuando conviene mantener una parte cerca del negocio.' },
  { icon: TabletSmartphone, title: 'Tablets y pantallas', text: 'Pantallas de consulta, comandas, formularios o paneles internos para que la información esté a la vista.' },
  { icon: Wrench, title: 'Equipos disponibles', text: 'PCs, impresoras, cámaras o redes que todavía pueden cumplir una función concreta.' },
];

export default function ReuseTech() {
  return (
    <section id="tecnologia" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="cta-panel p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300 text-ink shadow-glow">
              <Recycle size={28} />
            </div>
            <SectionHeader eyebrow="Reutilización tecnológica" title="A veces la primera inversión ya está sobre la mesa.">
              <p>
                Revisamos los equipos que ya tienes y vemos si pueden convertirse en algo útil: una estación de trabajo, una pantalla, un respaldo o un pequeño servidor local.
              </p>
              <p className="mt-4 font-bold text-cyan-100">Menos gasto inicial. Más provecho de lo que ya existe.</p>
            </SectionHeader>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-ink/60 p-5">
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/5 text-cyan-200 ring-1 ring-white/10">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-black text-white">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
