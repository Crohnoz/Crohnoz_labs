import {
  Archive,
  Bot,
  ClipboardList,
  DatabaseZap,
  ArchiveRestore,
  FileCheck2,
  Gauge,
  HardDrive,
  LineChart,
  Network,
  Recycle,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from 'lucide-react';

export const painPoints = [
  'Cuentas que se revisan más de una vez porque nadie está completamente seguro',
  'Inventarios que viven entre cuadernos, Excel y memoria',
  'Agendas que funcionan, pero a costa de estar encima todo el día',
  'Pedidos, pagos o pacientes repartidos entre chats y fotos sueltas',
  'Equipos antiguos guardados que todavía podrían servir',
  'Decisiones tomadas sin reportes claros',
  'Reclamos difíciles de resolver porque falta evidencia',
  'Negocios que crecieron más rápido que sus herramientas',
  'Historiales incompletos de clientes, pacientes, pedidos o pagos',
  'Operaciones donde el problema aparece antes que la alerta',
];

export const solutions = [
  {
    icon: ClipboardList,
    title: 'Administración ordenada',
    description:
      'Pagos, cobros, clientes, deuda, vouchers y reportes en un solo flujo, para que la información deje de depender de revisar todo a mano.',
  },
  {
    icon: Workflow,
    title: 'Automatización útil',
    description:
      'Formularios, alertas, bitácoras y tareas repetitivas que se ejecutan con menos fricción y más consistencia.',
  },
  {
    icon: Gauge,
    title: 'Operación diaria',
    description:
      'Comandas, inventario, producción, estados por área y trazabilidad para saber qué está pasando sin perseguir la información.',
  },
  {
    icon: Stethoscope,
    title: 'Gestión profesional',
    description:
      'Agenda, fichas, historial, servicios y seguimiento para centros de atención que necesitan trabajar con más orden y confianza.',
  },
  {
    icon: HardDrive,
    title: 'Tecnología reutilizada',
    description:
      'Antes de comprar más, revisamos lo que ya existe: notebooks, PCs, tablets, redes o servidores que pueden volver a ser útiles.',
  },
  {
    icon: Network,
    title: 'Soporte e infraestructura',
    description:
      'Despliegues, monitoreo, respaldos y soporte remoto para que el sistema no sea solo una entrega, sino una herramienta viva.',
  },
  {
    icon: ArchiveRestore,
    title: 'Bases y continuidad',
    description:
      'Bases de datos separadas, respaldos y recuperación pensada desde el inicio, para que el cliente no dependa de servicios temporales o cuentas dispersas.',
  },
];

export const capabilities = [
  { icon: DatabaseZap, label: 'Datos ordenados y paneles simples de entender' },
  { icon: Bot, label: 'Automatizaciones que reducen trabajo repetido' },
  { icon: Archive, label: 'Historial, respaldo y trazabilidad' },
  { icon: ShieldCheck, label: 'Separación entre demo pública y sistema real' },
];

export const focusPillars = [
  {
    icon: FileCheck2,
    title: 'Ordenar primero',
    description: 'Partimos por entender qué información importa, dónde se pierde y quién necesita verla.',
  },
  {
    icon: Bot,
    title: 'Automatizar con criterio',
    description: 'No todo debe automatizarse. Elegimos lo que realmente ahorra tiempo o evita errores.',
  },
  {
    icon: Recycle,
    title: 'Aprovechar lo disponible',
    description: 'Si un equipo antiguo puede convertirse en estación, servidor o pantalla, lo consideramos antes de comprar más.',
  },
  {
    icon: LineChart,
    title: 'Medir lo importante',
    description: 'El sistema debe ayudar a decidir: deuda, citas, ventas, mermas, producción, riesgos o próximos pasos.',
  },
];

export const audiences = [
  {
    title: 'Emprendimientos y pymes',
    description: 'Negocios que ya se mueven, venden y atienden, pero sienten que el orden quedó atrás.',
    examples: ['Inventario', 'Cobros', 'Pedidos', 'Reportes'],
  },
  {
    title: 'Centros profesionales',
    description: 'Servicios que necesitan agenda, historial y seguimiento sin perder tiempo buscando datos.',
    examples: ['Agenda', 'Pacientes', 'Fichas', 'Servicios'],
  },
  {
    title: 'Operaciones gastronómicas',
    description: 'Pastelerías, cocinas y cafeterías donde producción, comandas y mermas deben conversar entre sí.',
    examples: ['Comandas', 'Producción', 'Mermas', 'Recetas'],
  },
  {
    title: 'Administradores locales',
    description: 'Personas que gestionan pagos, arriendos, documentos y cuentas que necesitan quedar claras.',
    examples: ['Arriendos', 'Vouchers', 'Deuda', 'Liquidaciones'],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Escuchar el problema',
    description:
      'Partimos conversando. Qué molesta, qué se repite, qué se pierde y qué parte de la operación ya no da abasto.',
  },
  {
    step: '02',
    title: 'Dibujar el flujo',
    description:
      'Ordenamos el proceso en pasos simples: personas, datos, pantallas, permisos, prioridades y riesgos.',
  },
  {
    step: '03',
    title: 'Construir lo esencial',
    description:
      'Creamos una primera versión usable, enfocada en resolver el núcleo del problema sin inflar el proyecto.',
  },
  {
    step: '04',
    title: 'Probar con uso real',
    description:
      'El sistema se ajusta con casos reales, porque la operación siempre enseña detalles que no aparecen en la teoría.',
  },
  {
    step: '05',
    title: 'Mantener y mejorar',
    description:
      'Después de publicar, seguimos corrigiendo, respaldando y agregando mejoras según lo que el negocio necesita.',
  },
];

export const serviceModels = [
  {
    name: 'Diagnóstico Digital',
    tag: 'Para partir bien',
    description:
      'Una conversación guiada para entender el problema, ordenar prioridades y decidir si vale la pena construir una solución.',
    deliverables: ['Reunión inicial', 'Mapa del proceso', 'Propuesta clara', 'Prioridades del MVP'],
  },
  {
    name: 'Sistema MVP',
    tag: 'Primera versión usable',
    description:
      'Una versión pequeña pero funcional, pensada para probar el flujo principal y empezar a generar valor rápido.',
    deliverables: ['Diseño funcional', 'Desarrollo inicial', 'Pruebas reales', 'Deploy y capacitación'],
  },
  {
    name: 'Sistema Operacional',
    tag: 'Más estructura',
    description:
      'Para operaciones que ya necesitan roles, módulos, reportes y control por áreas.',
    deliverables: ['Módulos por área', 'Reportes', 'Permisos', 'Soporte y mejoras'],
  },
  {
    name: 'Mantención Crohnoz',
    tag: 'Acompañamiento',
    description:
      'Soporte mensual para que el sistema siga funcionando, se respalde y evolucione con el negocio.',
    deliverables: ['Soporte remoto', 'Backups', 'Monitoreo', 'Mejoras progresivas'],
  },
  {
    name: 'Infraestructura administrada',
    tag: 'Continuidad',
    description:
      'Alojamiento, base de datos, respaldos y monitoreo para proyectos que ya no pueden depender de servicios gratuitos o temporales.',
    deliverables: ['Base por cliente', 'Variables protegidas', 'Backup programado', 'Ruta de recuperación'],
  },
];

export const diagnosticChecklist = [
  'Qué parte del trabajo te quita más tiempo',
  'Dónde se pierde información, evidencia o historial',
  'Qué se repite entre Excel, WhatsApp, cuadernos o fotos',
  'Quiénes usan el proceso y qué permisos necesitarían',
  'Qué equipos disponibles podrían aprovecharse',
  'Qué primera versión daría valor sin hacerlo enorme',
];

export const faqItems = [
  {
    question: '¿Crohnoz Labs hace páginas web?',
    answer:
      'Sí, cuando sirven a un objetivo. Pero el foco no es hacer una página bonita y nada más: buscamos resolver procesos, ordenar información y crear herramientas útiles para la operación.',
  },
  {
    question: '¿Tengo que comprar equipos nuevos?',
    answer:
      'No necesariamente. Primero revisamos lo que ya tienes. A veces un notebook antiguo, una tablet o un PC disponible pueden transformarse en una estación, pantalla o servidor local.',
  },
  {
    question: '¿Podemos empezar con algo pequeño?',
    answer:
      'Sí. De hecho, suele ser lo más sano. Partimos con una primera versión que resuelva lo más urgente y después crecemos con aprendizaje real.',
  },
  {
    question: '¿El sistema puede ser local, web o mixto?',
    answer:
      'Sí. La decisión depende del negocio: conectividad, presupuesto, continuidad, seguridad y forma de trabajo. No hay una sola respuesta correcta para todos.',
  },
  {
    question: '¿Crohnoz Labs puede administrar la base de datos?',
    answer:
      'Sí. Para producción, la idea es que cada cliente tenga una base separada, respaldos y una configuración documentada. Las demos pueden ser simples; los sistemas reales necesitan continuidad.',
  },
];


export const productionPolicy = [
  {
    icon: 'Database',
    title: 'Base separada',
    description: 'Cada cliente debe tener una base propia o una separación clara por entorno. La demo nunca toca datos reales.',
  },
  {
    icon: 'ArchiveRestore',
    title: 'Respaldo definido',
    description: 'El proyecto debe tener una forma concreta de recuperar información si una base falla, vence o se corrompe.',
  },
  {
    icon: 'LockKeyhole',
    title: 'Credenciales privadas',
    description: 'Variables de entorno, claves y accesos quedan fuera de GitHub y se documentan solo donde corresponde.',
  },
  {
    icon: 'Cloud',
    title: 'Producción estable',
    description: 'Los servicios gratuitos sirven para probar. Los clientes productivos necesitan infraestructura estable y cobrada como parte del servicio.',
  },
];

export const infrastructurePlans = [
  {
    name: 'Demo segura',
    tag: 'Presentación',
    description: 'Para vender la idea sin exponer información sensible. Puede usar datos ficticios y rutas públicas.',
    includes: ['Datos simulados', 'Sin credenciales reales', 'Muestra comercial', 'Sin dependencia crítica'],
  },
  {
    name: 'Base administrada',
    tag: 'Cliente activo',
    description: 'Para sistemas que ya se usan en operación diaria y necesitan continuidad básica.',
    includes: ['Base separada', 'Backup programado', 'Monitoreo básico', 'Soporte remoto'],
  },
  {
    name: 'Continuidad operativa',
    tag: 'Sistema crítico',
    description: 'Para clientes que dependen del sistema para atender, cobrar, producir o coordinar trabajo real.',
    includes: ['Ambiente privado', 'Plan de recuperación', 'Revisión periódica', 'Mejoras evolutivas'],
  },
];

export const continuityPrinciples = [
  'no usar bases gratuitas que expiran para producción',
  'mantener demo pública separada del sistema real',
  'guardar backups antes de tocar datos de clientes',
  'documentar deploy, variables y recuperación mínima',
  'cobrar infraestructura y mantención como parte del servicio',
];
