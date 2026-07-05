export const contact = {
  email: 'contacto@crohnozlabs.cl',
  whatsappNumber: '56935079652',
  whatsappDisplay: '+56 9 3507 9652',
  whatsappMessage: 'Hola Crohnoz Labs, quiero pedir un diagnóstico inicial. Tengo un proceso administrativo/operativo que quiero ordenar.\n\nProblema:\nCómo lo resolvemos hoy:\nQué se repite o toma mucho tiempo:\nQué me gustaría automatizar o mejorar:',
};

export function getWhatsAppUrl(message = contact.whatsappMessage) {
  const encodedMessage = encodeURIComponent(message);
  return contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}

export function getMailtoUrl() {
  const subject = encodeURIComponent('Diagnóstico Crohnoz Labs');
  const body = encodeURIComponent(`Hola Crohnoz Labs,

Quiero pedir un diagnóstico inicial para ordenar un proceso administrativo/operativo.

Problema:
Cómo lo resolvemos hoy:
Herramientas actuales:
Datos que manejamos:
Qué se repite o toma mucho tiempo:
Usuarios involucrados:
Urgencia:
Qué me gustaría lograr:

Gracias.`);

  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}
