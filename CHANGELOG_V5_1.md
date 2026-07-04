# Cronhoz Labs V5.1

Corrección rápida para Tailwind/PostCSS:

- Se removió `group` desde `@apply` en `.nav-card`, porque Tailwind no permite aplicar la utility `group` dentro de CSS.
- Se movió `group` directamente a los elementos JSX que usan `group-hover`.
- Se mantiene la estética V5 sin cambios visuales relevantes.

Archivos modificados:

- `src/styles/index.css`
- `src/components/QuickNavigation.jsx`
- `src/components/ProjectDemoPage.jsx`
