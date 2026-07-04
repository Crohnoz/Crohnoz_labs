import {
  Blocks,
  BriefcaseBusiness,
  ClipboardCheck,
  Compass,
  Cpu,
  Hammer,
  HelpCircle,
  Home,
  Layers3,
  MessageCircle,
  MonitorPlay,
  Network,
  Palette,
  Rocket,
  Route,
  SearchCheck,
  Workflow,
} from 'lucide-react';

export const navItems = [
  { id: 'inicio', href: '#inicio', label: 'Inicio', icon: Home, type: 'anchor' },
  { id: 'marca', href: '/marca', label: 'Marca', icon: Palette, type: 'page' },
  { id: 'soluciones', href: '#soluciones', label: 'Soluciones', icon: Blocks, type: 'anchor' },
  { id: 'proyectos', href: '/proyectos', label: 'Proyectos', icon: Layers3, type: 'page' },
  { id: 'metodo', href: '#metodo', label: 'Método', icon: Route, type: 'anchor' },
  { id: 'contacto', href: '#contacto', label: 'Contacto', icon: MessageCircle, type: 'anchor' },
];

export const secondaryNavItems = [
  { id: 'muestras', href: '/muestras', label: 'Muestras públicas', icon: MonitorPlay, type: 'page' },
  { id: 'explorar', href: '/explorar', label: 'Explorar detalle', icon: SearchCheck, type: 'page' },
  { id: 'problemas', href: '/explorar#problemas', label: 'Problemas', icon: SearchCheck, type: 'page' },
  { id: 'clientes', href: '/explorar#clientes', label: 'Clientes', icon: BriefcaseBusiness, type: 'page' },
  { id: 'tecnologia', href: '/explorar#tecnologia', label: 'Tecnología', icon: Cpu, type: 'page' },
  { id: 'infraestructura', href: '/explorar#infraestructura', label: 'Infraestructura', icon: Network, type: 'page' },
  { id: 'modelos', href: '/explorar#modelos', label: 'Modelos', icon: Hammer, type: 'page' },
  { id: 'diagnostico', href: '/explorar#diagnostico', label: 'Diagnóstico', icon: ClipboardCheck, type: 'page' },
  { id: 'faq', href: '/explorar#faq', label: 'FAQ', icon: HelpCircle, type: 'page' },
];

export const primaryNavItems = navItems;

export const quickNavigationItems = [
  {
    href: '#soluciones',
    icon: Workflow,
    title: 'Resolver operación',
    description: 'Sistemas administrativos, automatización, trazabilidad y soporte.',
  },
  {
    href: '/proyectos',
    icon: Layers3,
    title: 'Hub de proyectos',
    description: 'Fichas, demos públicas y rutas futuras de cada solución.',
  },
  {
    href: '/marca',
    icon: Compass,
    title: 'Branding Cronhoz',
    description: 'Arquitectura de marca, familias de solución y tono comercial.',
  },
  {
    href: '#contacto',
    icon: Rocket,
    title: 'Partir ahora',
    description: 'Agenda un diagnóstico y baja tu problema a un plan concreto.',
  },
];
