import {
  Blocks,
  BriefcaseBusiness,
  ClipboardCheck,
  Compass,
  ArchiveRestore,
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
  { id: 'continuidad', href: '#continuidad', label: 'Continuidad', icon: ArchiveRestore, type: 'anchor' },
  { id: 'contacto', href: '#contacto', label: 'Contacto', icon: MessageCircle, type: 'anchor' },
];

export const secondaryNavItems = [
  { id: 'muestras', href: '/muestras', label: 'Muestras públicas', icon: MonitorPlay, type: 'page' },
  { id: 'explorar', href: '/explorar', label: 'Explorar más', icon: SearchCheck, type: 'page' },
  { id: 'problemas', href: '/explorar#problemas', label: 'Problemas', icon: SearchCheck, type: 'page' },
  { id: 'clientes', href: '/explorar#clientes', label: 'Clientes', icon: BriefcaseBusiness, type: 'page' },
  { id: 'tecnologia', href: '/explorar#tecnologia', label: 'Tecnología', icon: Cpu, type: 'page' },
  { id: 'infraestructura', href: '/explorar#infraestructura', label: 'Infraestructura', icon: Network, type: 'page' },
  { id: 'continuidad', href: '/explorar#continuidad', label: 'Continuidad', icon: ArchiveRestore, type: 'page' },
  { id: 'modelos', href: '/explorar#modelos', label: 'Modelos', icon: Hammer, type: 'page' },
  { id: 'diagnostico', href: '/explorar#diagnostico', label: 'Diagnóstico', icon: ClipboardCheck, type: 'page' },
  { id: 'faq', href: '/explorar#faq', label: 'FAQ', icon: HelpCircle, type: 'page' },
];

export const primaryNavItems = navItems;

export const quickNavigationItems = [
  {
    href: '#soluciones',
    icon: Workflow,
    title: 'Tengo un problema',
    description: 'Mira qué tipo de procesos podemos ordenar o automatizar.',
  },
  {
    href: '/proyectos',
    icon: Layers3,
    title: 'Ver proyectos',
    description: 'Ejemplos de soluciones, demos seguras y rutas reservadas.',
  },
  {
    href: '#continuidad',
    icon: ArchiveRestore,
    title: 'Continuidad',
    description: 'Cómo manejamos bases, respaldos y sistemas reales separados de las demos.',
  },
  {
    href: '/marca',
    icon: Compass,
    title: 'Conocer la marca',
    description: 'La identidad, el enfoque y las líneas de trabajo de Crohnoz.',
  },
  {
    href: '#contacto',
    icon: Rocket,
    title: 'Conversemos',
    description: 'Cuéntanos qué está fallando y vemos el primer paso.',
  },
];
