import { site } from './site.js';

function buildLinks(slug, plannedSubdomain) {
  const demoPath = `${site.demoBasePath}/${slug}`;
  const showcasePath = `/proyectos/${slug}`;
  const futureUrl = `https://${plannedSubdomain}.${site.primaryDomain}`;

  const routeConfig = {
    demoPath,
    showcasePath,
    futureUrl,
    items: [
      {
        label: 'Ficha del proyecto',
        description: 'Vista comercial con alcance, módulos y enfoque de solución.',
        href: showcasePath,
        status: 'Activo',
        kind: 'internal',
      },
      {
        label: 'Muestra segura',
        description: 'Demo pública con datos ficticios y sin acceso al sistema real.',
        href: demoPath,
        status: 'Activo',
        kind: 'demo',
      },
      {
        label: 'Ruta futura',
        description: futureUrl.replace('https://', ''),
        href: futureUrl,
        status: 'Reservada',
        kind: 'planned',
        disabled: true,
      },
    ],
  };

  return {
    ...routeConfig,
    links: routeConfig,
  };
}

export const projects = [
  {
    name: 'SweetOps',
    shortName: 'SweetOps',
    slug: 'sweetops',
    family: 'Cronhoz Ops',
    plannedSubdomain: 'sweetops',
    ...buildLinks('sweetops', 'sweetops'),
    demoLabel: 'Ver muestra pública SweetOps',
    client: 'Isis Cakes',
    category: 'Sistema operacional gastronómico',
    status: 'En desarrollo',
    maturity: 'MVP comercial',
    accent: 'cyan',
    summary:
      'Plataforma para comandas por sector, inventario, producción diaria, vitrina, recetas, costos, mermas y reportes operacionales para pastelerías y negocios gastronómicos.',
    impact: ['Menos pérdida de información', 'Control de producción', 'Operación por estaciones', 'Base para costos y márgenes'],
    modules: ['Comandas', 'Inventario', 'Recetas', 'Vitrina', 'Reportes', 'Usuarios'],
    demoBlueprint: ['Vista de comandas por estación', 'Panel de producción diaria', 'Resumen de inventario y mermas'],
  },
  {
    name: 'FDR Centro Podológico',
    shortName: 'FDR',
    slug: 'fdr-centro-podologico',
    family: 'Cronhoz Admin',
    plannedSubdomain: 'fdr',
    ...buildLinks('fdr-centro-podologico', 'fdr'),
    demoLabel: 'Ver muestra pública FDR',
    client: 'FDR Podología',
    category: 'Sistema clínico-administrativo',
    status: 'En desarrollo',
    maturity: 'Base funcional',
    accent: 'mint',
    summary:
      'Sistema para gestión de pacientes, agenda, servicios, fichas clínicas, historial de atención, fotografías de seguimiento y administración interna de un centro podológico.',
    impact: ['Agenda centralizada', 'Historial clínico ordenado', 'Mejor seguimiento', 'Menos administración manual'],
    modules: ['Pacientes', 'Reservas', 'Servicios', 'Fichas', 'Fotografías', 'Panel administrativo'],
    demoBlueprint: ['Agenda demo sin pacientes reales', 'Ficha clínica simulada', 'Panel administrativo de ejemplo'],
  },
  {
    name: 'Kronos Trace',
    shortName: 'Trace',
    slug: 'kronos-trace',
    family: 'Cronhoz Trace',
    plannedSubdomain: 'trace',
    ...buildLinks('kronos-trace', 'trace'),
    demoLabel: 'Ver muestra pública Kronos Trace',
    client: 'Laboratorio interno',
    category: 'Trazabilidad y control antifraude',
    status: 'Concepto avanzado',
    maturity: 'Diseño de producto',
    accent: 'blue',
    summary:
      'Solución de validación fotográfica, bitácora de eventos y evidencia operacional para negocios que necesitan controlar entregas, reclamos, despacho y responsabilidad por etapa.',
    impact: ['Evidencia verificable', 'Reducción de reclamos dudosos', 'Control por evento', 'Trazabilidad por operación'],
    modules: ['Fotos', 'Bitácora', 'Validación', 'Alertas', 'Panel de revisión'],
    demoBlueprint: ['Flujo de evidencia simulada', 'Estados de entrega', 'Panel de revisión antifraude'],
  },
  {
    name: 'Sistema Administrativo de Arriendos',
    shortName: 'Arriendos',
    slug: 'sistema-arriendos',
    family: 'Cronhoz Admin',
    plannedSubdomain: 'arriendos',
    ...buildLinks('sistema-arriendos', 'arriendos'),
    demoLabel: 'Ver muestra pública arriendos',
    client: 'Administración local',
    category: 'Administración financiera',
    status: 'Prototipo',
    maturity: 'Modelo operativo',
    accent: 'cyan',
    summary:
      'Gestión de arriendos, cobros, abonos, deudas, consumo eléctrico, vouchers correlativos, liquidaciones de salida y estado financiero por departamento.',
    impact: ['Cuentas claras', 'Voucher correlativo', 'Control de deuda', 'Liquidaciones consistentes'],
    modules: ['Arriendos', 'Pagos', 'Luz', 'Deuda', 'Liquidaciones', 'Reportes'],
    demoBlueprint: ['Estado de deuda simulado', 'Voucher correlativo de muestra', 'Liquidación de salida demo'],
  },
  {
    name: 'Cronhoz Labs Homelab',
    shortName: 'Homelab',
    slug: 'homelab',
    family: 'Cronhoz Core',
    plannedSubdomain: 'core',
    ...buildLinks('homelab', 'core'),
    demoLabel: 'Ver muestra pública Homelab',
    client: 'Infraestructura Cronhoz',
    category: 'Infraestructura interna',
    status: 'Activo',
    maturity: 'Operación experimental',
    accent: 'mint',
    summary:
      'Laboratorio local de servidores, monitoreo, respaldos, despliegues, soporte remoto y pruebas de continuidad para proyectos propios y clientes iniciales.',
    impact: ['Pruebas reales', 'Monitoreo de servicios', 'Base de soporte técnico', 'Infraestructura progresiva'],
    modules: ['Linux', 'Docker', 'Portainer', 'Uptime Kuma', 'Backups', 'Red local'],
    demoBlueprint: ['Mapa de servicios internos', 'Panel de monitoreo simulado', 'Bitácora de infraestructura'],
  },
  {
    name: 'IncluMe',
    shortName: 'IncluMe',
    slug: 'inclume',
    family: 'Cronhoz Access',
    plannedSubdomain: 'inclume',
    ...buildLinks('inclume', 'inclume'),
    demoLabel: 'Ver muestra pública IncluMe',
    client: 'Impacto social',
    category: 'Accesibilidad e inclusión',
    status: 'Concepto',
    maturity: 'Idea validable',
    accent: 'blue',
    summary:
      'Plataforma orientada a visibilizar problemas de accesibilidad, denuncias ciudadanas, estacionamientos PMR y apoyo informativo para personas con movilidad reducida.',
    impact: ['Visibilidad ciudadana', 'Registro con evidencia', 'Enfoque inclusivo', 'Utilidad pública'],
    modules: ['Denuncias', 'Mapa', 'Noticias', 'Evidencia', 'Comunidad'],
    demoBlueprint: ['Registro ciudadano simulado', 'Mapa demo sin datos reales', 'Ficha de evidencia pública'],
  },
];

export const featuredMetrics = [
  { value: '6+', label: 'líneas de solución con rutas públicas separadas' },
  { value: '4', label: 'familias de marca: Admin, Ops, Trace y Core' },
  { value: '0', label: 'datos reales expuestos en muestras comerciales' },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
