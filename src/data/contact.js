export const contact = {
  email: 'contacto@crohnozlabs.cl',
  whatsappNumber: '56935079652',
  whatsappDisplay: '+56 9 3507 9652',
  whatsappMessage: 'Hola Crohnoz Labs, tengo un problema administrativo/operativo y quiero evaluar una solución digital.',
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

Tengo un problema administrativo/operativo que quiero ordenar.

Problema:
Herramientas actuales:
Usuarios involucrados:
Urgencia:

Gracias.`);

  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}
