import { site } from './site.js';

function displayUrl(url) {
  if (!url) return 'Pendiente';
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function buildLinks({
  slug,
  plannedSubdomain,
  githubUrl,
  deployUrl,
  deployLabel,
  repoStatus = 'Conectado',
  deployStatus = 'Próximamente',
  plannedLabel = 'Deploy dedicado',
  plannedDescription,
  demoAvailable = false,
  demoStatus = 'En preparación',
  demoDescription = 'Aún no hay una demo pública segura disponible.',
  sampleState = 'preparing',
  sampleNote = 'La muestra pública aún está en preparación.',
}) {
  const demoPath = `${site.demoBasePath}/${slug}`;
  const showcasePath = `/proyectos/${slug}`;
  const futureUrl = `https://${plannedSubdomain}.${site.primaryDomain}`;

  const demoLink = demoAvailable
    ? {
        label: 'Muestra pública',
        description: 'Demo pública con datos ficticios, separada del sistema real.',
        href: demoPath,
        status: 'Disponible',
        kind: 'demo',
      }
    : {
        label: 'Muestra pública',
        description: demoDescription,
        href: '#',
        status: demoStatus,
        kind: 'demo',
        disabled: true,
      };

  const items = [
    {
      label: 'Ficha del proyecto',
      description: 'Vista pública para entender el problema, el alcance y los módulos principales.',
      href: showcasePath,
      status: 'Disponible',
      kind: 'internal',
    },
    demoLink,
    githubUrl
      ? {
          label: 'Repositorio GitHub',
          description: displayUrl(githubUrl),
          href: githubUrl,
          status: repoStatus,
          kind: 'github',
          external: true,
        }
      : {
          label: 'Repositorio GitHub',
          description: 'Pendiente de publicar o conectar. Se mostrará cuando exista una versión presentable.',
          href: '#',
          status: 'Pendiente',
          kind: 'github',
          disabled: true,
        },
    deployUrl
      ? {
          label: deployLabel ?? 'Deploy público',
          description: displayUrl(deployUrl),
          href: deployUrl,
          status: 'Online',
          kind: 'deploy',
          external: true,
        }
      : {
          label: plannedLabel,
          description: plannedDescription ?? `${plannedSubdomain}.${site.primaryDomain} queda reservado para una demo o producto público futuro.`,
          href: futureUrl,
          status: deployStatus,
          kind: 'planned',
          disabled: true,
        },
  ];

  const routeConfig = {
    demoPath,
    showcasePath,
    futureUrl,
    githubUrl,
    deployUrl,
    items,
  };

  return {
    sampleState,
    sampleNote,
    ...routeConfig,
    links: routeConfig,
  };
}

export const projects = [
  {
    name: 'SweetOps',
    shortName: 'SweetOps',
    slug: 'sweetops',
    family: 'Crohnoz Ops',
    plannedSubdomain: 'sweetops',
    repository: {
      label: 'Crohnoz/sweetops',
      url: 'https://github.com/Crohnoz/sweetops',
      visibility: 'Público',
      status: 'Conectado',
    },
    deploy: {
      label: 'Deploy dedicado',
      url: null,
      status: 'Próximamente',
      note: 'Por ahora se muestra mediante demo segura dentro de Crohnoz Labs.',
    },
    ...buildLinks({
      slug: 'sweetops',
      plannedSubdomain: 'sweetops',
      githubUrl: 'https://github.com/Crohnoz/sweetops',
      demoAvailable: false,
      demoStatus: 'En preparación',
      demoDescription: 'La muestra pública está en preparación y aún no se ha publicado una demo segura.',
      sampleState: 'preparing',
      sampleNote: 'La muestra pública de SweetOps todavía está en preparación.',
    }),
    demoLabel: 'Ver muestra pública SweetOps',
    client: 'Isis Cakes',
    category: 'Sistema operacional gastronómico',
    status: 'En desarrollo',
    maturity: 'MVP comercial',
    accent: 'cyan',
    summary:
      'Sistema para ayudar a una pastelería a ordenar comandas, producción, inventario, recetas, mermas y reportes sin depender de mensajes sueltos.',
    impact: ['Menos pérdida de información', 'Control de producción', 'Operación por estaciones', 'Base para costos y márgenes'],
    modules: ['Comandas', 'Inventario', 'Recetas', 'Vitrina', 'Reportes', 'Usuarios'],
    demoBlueprint: ['Vista de comandas por estación', 'Panel de producción diaria', 'Resumen de inventario y mermas'],
  },
  {
    name: 'FDR Centro Podológico',
    shortName: 'FDR',
    slug: 'fdr-centro-podologico',
    family: 'Crohnoz Admin',
    plannedSubdomain: 'fdr',
    repository: {
      label: 'Repositorio pendiente',
      url: null,
      visibility: 'Privado / pendiente',
      status: 'Pendiente',
    },
    deploy: {
      label: 'Render',
      url: null,
      status: 'Plataforma online / BD caída',
      note: 'La aplicación en Render todavía carga, pero la conexión a la base de datos quedó fuera de servicio. Lo crítico a reconstruir es agenda y horarios; el resto puede levantarse con datos demo.',
    },
    ...buildLinks({
      slug: 'fdr-centro-podologico',
      plannedSubdomain: 'fdr',
      deployStatus: 'BD por reconstruir',
      plannedLabel: 'Deploy Render',
      plannedDescription: 'La plataforma carga, pero la base de datos está caída. Se publicará cuando exista una base demo segura, sin datos clínicos reales.',
      demoAvailable: false,
      demoStatus: 'En preparación',
      demoDescription: 'La plataforma es recuperable, pero la base de datos está por reconstruir. No hay una demo segura con datos ficticios disponible aún.',
      sampleState: 'preparing',
      sampleNote: 'FDR mantiene su ficha pública disponible, pero la muestra pública aún no está lista.',
    }),
    demoLabel: 'Ver muestra pública FDR',
    client: 'FDR Podología',
    category: 'Sistema clínico-administrativo',
    status: 'En recuperación técnica',
    maturity: 'Plataforma viva · base por reconstruir',
    accent: 'mint',
    summary:
      'Herramienta para ordenar agenda, pacientes, fichas, historial, servicios y fotografías de seguimiento en un centro podológico. La plataforma carga, pero la base de datos debe reconstruirse con una demo segura.',
    impact: ['Agenda centralizada', 'Reconstrucción de horarios', 'Historial clínico ordenado', 'Menos administración manual'],
    modules: ['Pacientes', 'Reservas', 'Servicios', 'Fichas', 'Fotografías', 'Panel administrativo'],
    demoBlueprint: ['Agenda demo sin pacientes reales', 'Horarios reconstruidos', 'Ficha clínica simulada', 'Base de datos demo separada'],
  },
  {
    name: 'Kronos Trace',
    shortName: 'Trace',
    slug: 'kronos-trace',
    family: 'Crohnoz Trace',
    plannedSubdomain: 'trace',
    repository: {
      label: 'Crohnoz/Crohnoz_Trace',
      url: 'https://github.com/Crohnoz/Crohnoz_Trace',
      visibility: 'Público',
      status: 'Conectado',
    },
    deploy: {
      label: 'Deploy dedicado',
      url: null,
      status: 'Próximamente',
      note: 'El producto se mostrará primero como flujo comercial y evidencia ficticia.',
    },
    ...buildLinks({
      slug: 'kronos-trace',
      plannedSubdomain: 'trace',
      githubUrl: 'https://github.com/Crohnoz/Crohnoz_Trace',
      demoAvailable: false,
      demoStatus: 'En preparación',
      demoDescription: 'La muestra pública está en preparación y aún no se ha publicado una demo segura.',
      sampleState: 'preparing',
      sampleNote: 'La idea está bien definida, pero la muestra pública se prepara con alcance limitado.',
    }),
    demoLabel: 'Ver muestra pública Kronos Trace',
    client: 'Laboratorio interno',
    category: 'Trazabilidad y control antifraude',
    status: 'Concepto avanzado',
    maturity: 'Diseño de producto',
    accent: 'blue',
    summary:
      'Idea de trazabilidad para dejar evidencia clara en entregas, reclamos, despachos y eventos importantes de una operación.',
    impact: ['Evidencia verificable', 'Reducción de reclamos dudosos', 'Control por evento', 'Trazabilidad por operación'],
    modules: ['Fotos', 'Bitácora', 'Validación', 'Alertas', 'Panel de revisión'],
    demoBlueprint: ['Flujo de evidencia simulada', 'Estados de entrega', 'Panel de revisión antifraude'],
  },
  {
    name: 'Sistema Administrativo de Arriendos',
    shortName: 'Arriendos',
    slug: 'sistema-arriendos',
    family: 'Crohnoz Admin',
    plannedSubdomain: 'arriendos',
    repository: {
      label: 'Crohnoz/sistema_gestion_de_arriendos',
      url: 'https://github.com/Crohnoz/sistema_gestion_de_arriendos',
      visibility: 'Público',
      status: 'Conectado',
    },
    deploy: {
      label: 'Deploy dedicado',
      url: null,
      status: 'Próximamente',
      note: 'Se mostrará como demo administrativa sin datos reales de propiedades o pagos.',
    },
    ...buildLinks({
      slug: 'sistema-arriendos',
      plannedSubdomain: 'arriendos',
      githubUrl: 'https://github.com/Crohnoz/sistema_gestion_de_arriendos',
      demoAvailable: false,
      demoStatus: 'En preparación',
      demoDescription: 'La muestra pública se prepara con datos ficticios y alcance limitado.',
      sampleState: 'preparing',
      sampleNote: 'La ficha pública está disponible; la muestra pública sigue en preparación.',
    }),
    demoLabel: 'Ver muestra pública arriendos',
    client: 'Administración local',
    category: 'Administración financiera',
    status: 'Prototipo',
    maturity: 'Modelo operativo',
    accent: 'cyan',
    summary:
      'Sistema para llevar arriendos, pagos, deudas, luz, vouchers y liquidaciones sin perder el hilo de cada departamento.',
    impact: ['Cuentas claras', 'Voucher correlativo', 'Control de deuda', 'Liquidaciones consistentes'],
    modules: ['Arriendos', 'Pagos', 'Luz', 'Deuda', 'Liquidaciones', 'Reportes'],
    demoBlueprint: ['Estado de deuda simulado', 'Voucher correlativo de muestra', 'Liquidación de salida demo'],
  },
  {
    name: 'Crohnoz Labs Homelab',
    shortName: 'Homelab',
    slug: 'homelab',
    family: 'Crohnoz Core',
    plannedSubdomain: 'core',
    repository: {
      label: 'Infraestructura interna',
      url: null,
      visibility: 'Interno',
      status: 'No expuesto',
    },
    deploy: {
      label: 'Panel interno',
      url: null,
      status: 'Privado',
      note: 'La infraestructura sostiene pruebas y soporte, pero no se publica como sistema abierto.',
    },
    ...buildLinks({
      slug: 'homelab',
      plannedSubdomain: 'core',
      deployStatus: 'Privado',
      demoAvailable: false,
      demoStatus: 'Vista interna',
      demoDescription: 'Esta vista se mantiene interna y no se publica como muestra pública.',
      sampleState: 'internal',
      sampleNote: 'La infraestructura es real, pero su vista se conserva interna y privada.',
    }),
    demoLabel: 'Ver muestra pública Homelab',
    client: 'Infraestructura Crohnoz',
    category: 'Infraestructura interna',
    status: 'Activo',
    maturity: 'Operación experimental',
    accent: 'mint',
    summary:
      'Base técnica de Crohnoz Labs: servidores locales, monitoreo, respaldos, despliegues y pruebas para sostener proyectos reales.',
    impact: ['Pruebas reales', 'Monitoreo de servicios', 'Base de soporte técnico', 'Infraestructura progresiva'],
    modules: ['Linux', 'Docker', 'Portainer', 'Uptime Kuma', 'Backups', 'Red local'],
    demoBlueprint: ['Mapa de servicios internos', 'Panel de monitoreo simulado', 'Bitácora de infraestructura'],
  },
  {
    name: 'IncluMe',
    shortName: 'IncluMe',
    slug: 'inclume',
    family: 'Crohnoz Access',
    plannedSubdomain: 'inclume',
    repository: {
      label: 'Crohnoz/IncluMe',
      url: 'https://github.com/Crohnoz/IncluMe',
      visibility: 'Público',
      status: 'Conectado',
    },
    deploy: {
      label: 'Deploy dedicado',
      url: null,
      status: 'Próximamente',
      note: 'La demo pública usará registros simulados y sin datos personales.',
    },
    ...buildLinks({
      slug: 'inclume',
      plannedSubdomain: 'inclume',
      githubUrl: 'https://github.com/Crohnoz/IncluMe',
      demoAvailable: false,
      demoStatus: 'En preparación',
      demoDescription: 'La muestra pública aún no está lista y se prepara con alcance limitado.',
      sampleState: 'preparing',
      sampleNote: 'IncluMe mantiene su ficha pública activa, pero la muestra pública sigue en preparación.',
    }),
    demoLabel: 'Ver muestra pública IncluMe',
    client: 'Impacto social',
    category: 'Accesibilidad e inclusión',
    status: 'Concepto',
    maturity: 'Idea validable',
    accent: 'blue',
    summary:
      'Concepto social para visibilizar problemas de accesibilidad, registrar evidencia y apoyar a personas con movilidad reducida.',
    impact: ['Visibilidad ciudadana', 'Registro con evidencia', 'Enfoque inclusivo', 'Utilidad pública'],
    modules: ['Denuncias', 'Mapa', 'Noticias', 'Evidencia', 'Comunidad'],
    demoBlueprint: ['Registro ciudadano simulado', 'Mapa demo sin datos reales', 'Ficha de evidencia pública'],
  },
];

export const featuredMetrics = [
  { value: '4', label: 'repositorios públicos conectados a la vitrina' },
  { value: '6+', label: 'proyectos y conceptos listos para mostrar' },
  { value: '0', label: 'datos reales expuestos en demos públicas' },
];

export const ecosystemSummary = [
  { label: 'Sitio principal', value: 'Crohnoz/Crohnoz_labs', href: 'https://github.com/Crohnoz/Crohnoz_labs' },
  { label: 'Deploy principal', value: site.primaryDomain, href: site.primaryUrl },
  { label: 'Netlify preview', value: 'crohnozlabs.netlify.app', href: site.netlifyUrl },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
