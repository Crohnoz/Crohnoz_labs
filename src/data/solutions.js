import {
  Archive,
  Bot,
  ClipboardList,
  DatabaseZap,
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
  'Cobros manuales y cuentas poco claras',
  'Inventarios hechos en cuadernos o planillas eternas',
  'Agendas desordenadas y pérdida de información',
  'Procesos que dependen de WhatsApp, memoria o una sola persona',
  'Equipos antiguos sin uso productivo',
  'Falta de reportes para decidir con datos',
  'Reclamos sin evidencia ni trazabilidad',
  'Negocios que crecieron más rápido que sus herramientas',
  'Clientes, pacientes o pedidos sin historial confiable',
  'Operaciones donde nadie sabe el estado real hasta que aparece el problema',
];

export const solutions = [
  {
    icon: ClipboardList,
    title: 'Sistemas administrativos',
    description:
      'Cobros, pagos, abonos, clientes, deudas, vouchers correlativos, reportes y control mensual para operaciones que necesitan orden.',
  },
  {
    icon: Workflow,
    title: 'Automatización de procesos',
    description:
      'Flujos, formularios, alertas, bitácoras, tareas repetitivas y reportes automáticos para reducir fricción operativa.',
  },
  {
    icon: Gauge,
    title: 'Sistemas operacionales',
    description:
      'Comandas, estaciones de trabajo, inventario, producción, mermas, trazabilidad, paneles por área y estados en tiempo real.',
  },
  {
    icon: Stethoscope,
    title: 'Soluciones clínicas y profesionales',
    description:
      'Agenda, pacientes, fichas, historial, servicios, seguimiento, fotografías y administración interna para centros de atención.',
  },
  {
    icon: HardDrive,
    title: 'Reutilización tecnológica',
    description:
      'Convertimos notebooks, PCs, tablets, redes locales y equipos disponibles en infraestructura útil y de bajo costo inicial.',
  },
  {
    icon: Network,
    title: 'Infraestructura y soporte',
    description:
      'Despliegues, monitoreo, respaldos, servidores locales, soporte remoto y continuidad básica para proyectos activos.',
  },
];

export const capabilities = [
  { icon: DatabaseZap, label: 'Bases de datos y paneles administrativos' },
  { icon: Bot, label: 'Automatizaciones internas y flujos de trabajo' },
  { icon: Archive, label: 'Respaldos, registros y trazabilidad' },
  { icon: ShieldCheck, label: 'Buenas prácticas de seguridad operativa' },
];

export const focusPillars = [
  {
    icon: FileCheck2,
    title: 'Ordenar la información',
    description: 'Estructuramos datos, clientes, pagos, pedidos, pacientes, inventario y documentos para que la operación deje de depender de la memoria.',
  },
  {
    icon: Bot,
    title: 'Automatizar lo repetitivo',
    description: 'Detectamos tareas que consumen tiempo y las llevamos a formularios, paneles, alertas, reportes o flujos simples de ejecutar.',
  },
  {
    icon: Recycle,
    title: 'Aprovechar lo disponible',
    description: 'Antes de exigir compras nuevas, evaluamos notebooks, PCs, tablets, impresoras, redes y servidores básicos que puedan volver a producir valor.',
  },
  {
    icon: LineChart,
    title: 'Medir para decidir',
    description: 'Diseñamos reportes y tableros con información útil: deuda, producción, mermas, citas, ventas, estados, riesgos y próximos pasos.',
  },
];

export const audiences = [
  {
    title: 'Emprendimientos y pymes',
    description: 'Negocios que ya venden, pero sienten que la operación se volvió difícil de controlar con herramientas improvisadas.',
    examples: ['Inventario', 'Cobros', 'Pedidos', 'Reportes'],
  },
  {
    title: 'Centros profesionales',
    description: 'Consultas, centros de atención o servicios que necesitan agenda, fichas, historial y seguimiento más ordenado.',
    examples: ['Agenda', 'Pacientes', 'Fichas', 'Servicios'],
  },
  {
    title: 'Operaciones gastronómicas',
    description: 'Pastelerías, cocinas, cafeterías o negocios con producción, vitrina, comandas, mermas y control por área.',
    examples: ['Comandas', 'Producción', 'Mermas', 'Recetas'],
  },
  {
    title: 'Administradores locales',
    description: 'Personas o equipos que gestionan pagos, arriendos, deuda, documentos, liquidaciones y trazabilidad financiera.',
    examples: ['Arriendos', 'Vouchers', 'Deuda', 'Liquidaciones'],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico del problema',
    description:
      'Escuchamos cómo funciona hoy tu operación, qué duele, qué se repite, qué se pierde y qué decisión se está tomando sin datos claros.',
  },
  {
    step: '02',
    title: 'Mapa de proceso',
    description:
      'Transformamos el desorden en flujo: actores, tareas, datos, pantallas, permisos, riesgos, prioridades y primera versión viable.',
  },
  {
    step: '03',
    title: 'Prototipo funcional',
    description:
      'Construimos una versión usable, enfocada en resolver el núcleo del problema sin inflar el sistema ni aumentar costos innecesarios.',
  },
  {
    step: '04',
    title: 'Implementación real',
    description:
      'Instalamos, probamos, capacitamos y ajustamos con casos reales del negocio: usuarios reales, datos reales y operación real.',
  },
  {
    step: '05',
    title: 'Mantención y evolución',
    description:
      'Monitoreamos, respaldamos, corregimos y agregamos funciones según crecimiento, aprendizaje operacional y nuevas necesidades.',
  },
];

export const serviceModels = [
  {
    name: 'Diagnóstico Digital',
    tag: 'Entrada simple',
    description:
      'Revisión del problema, mapa de oportunidad y propuesta clara de solución. Ideal para negocios que no saben por dónde partir.',
    deliverables: ['Reunión de diagnóstico', 'Mapa de proceso', 'Propuesta de solución', 'Priorización MVP'],
  },
  {
    name: 'Sistema MVP',
    tag: 'Producto funcional',
    description:
      'Primera versión operativa para resolver el problema principal: usuarios, datos, flujo central, panel base y despliegue usable.',
    deliverables: ['Diseño funcional', 'Desarrollo inicial', 'Pruebas reales', 'Deploy y capacitación'],
  },
  {
    name: 'Sistema Operacional',
    tag: 'Mayor profundidad',
    description:
      'Plataforma con módulos, roles, reportes, trazabilidad y soporte de procesos más complejos para operaciones que ya requieren estructura.',
    deliverables: ['Módulos por área', 'Reportes', 'Permisos', 'Soporte y mejoras'],
  },
  {
    name: 'Mantención Cronhoz',
    tag: 'Continuidad',
    description:
      'Acompañamiento mensual para sistemas activos: respaldo, soporte, monitoreo, correcciones, nuevas funciones y evolución controlada.',
    deliverables: ['Soporte remoto', 'Backups', 'Monitoreo', 'Mejoras progresivas'],
  },
];

export const diagnosticChecklist = [
  'Qué proceso genera más pérdida de tiempo',
  'Dónde se pierde información o evidencia',
  'Qué datos se repiten en Excel, WhatsApp o cuadernos',
  'Qué usuarios participan y qué permisos necesitan',
  'Qué equipo o tecnología disponible puede reutilizarse',
  'Qué versión mínima entregaría valor en menos tiempo',
];

export const faqItems = [
  {
    question: '¿Cronhoz Labs hace solo páginas web?',
    answer:
      'No. Una landing puede ser parte de la solución, pero el foco principal son sistemas administrativos, automatización, operación, trazabilidad, infraestructura práctica y herramientas internas.',
  },
  {
    question: '¿Necesito comprar equipos nuevos para empezar?',
    answer:
      'No necesariamente. Primero se evalúa lo que ya existe: notebooks, computadores, tablets, red local o servidores básicos. Si algo se puede reutilizar de forma segura y útil, se considera en la solución.',
  },
  {
    question: '¿Puedo partir con algo pequeño?',
    answer:
      'Sí. El enfoque recomendado es partir con un MVP funcional: una primera versión que resuelve el problema central y luego crece según uso real.',
  },
  {
    question: '¿Trabajan con sistemas locales o en la nube?',
    answer:
      'Depende del caso. Algunas soluciones pueden vivir en la nube, otras en red local y otras en un modelo híbrido. La decisión se toma según presupuesto, conectividad, continuidad y operación real.',
  },
];
