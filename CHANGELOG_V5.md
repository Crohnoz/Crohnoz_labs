# Cronhoz Labs V5 — mejora visual e index robusto

## Objetivo

Esta versión eleva la landing desde una estética oscura plana hacia una identidad visual más premium: fondo con profundidad, auroras suaves, textura técnica, superficies tipo vidrio, mejores botones y tarjetas con mayor presencia.

## Cambios principales

- `index.html` reforzado con metadata SEO, Open Graph, Twitter Card, manifest mobile y JSON-LD más completo.
- `src/styles/index.css` reconstruido con tokens visuales, gradientes, profundidad, efectos de borde, glow controlado y componentes reutilizables.
- `src/App.jsx` ahora incluye skip link accesible y wrapper visual centralizado.
- Navbar con mejor superficie, marca más visible, dropdown premium y CTA más potente.
- Hero con spotlight, chips más vivos, botones premium, métricas mejoradas y panel tipo consola con mayor profundidad.
- Cards principales migradas a clases visuales reutilizables: `lab-card`, `lab-panel`, `metric-card`, `nav-card`, `cta-panel`.
- Paleta ampliada: ink, midnight, cyan, sky, mint, violet y amber, manteniendo identidad técnica/profesional.

## Archivos más importantes modificados

- `index.html`
- `tailwind.config.js`
- `src/styles/index.css`
- `src/App.jsx`
- `src/components/Hero.jsx`
- `src/components/Navbar.jsx`
- `src/components/QuickNavigation.jsx`
- `src/components/Projects.jsx`
- `src/components/FinalCTA.jsx`
- componentes secundarios con aplicación de nuevas clases visuales

## Nota de instalación

Este ZIP fuente no incluye `node_modules` ni `package-lock.json`. En Windows, ejecutar:

```bash
npm config set registry https://registry.npmjs.org/
npm install
npm run dev
```

