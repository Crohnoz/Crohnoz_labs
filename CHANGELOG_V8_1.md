# Cronhoz Labs V8.1

Corrección de rutas de proyecto.

## Cambios

- Se corrigió `ProjectLinks.jsx` para no romper cuando un proyecto no trae `links.items`.
- Se actualizó `src/data/projects.js` para exponer rutas tanto a nivel raíz como dentro de `project.links`.
- Se mantiene compatibilidad con componentes existentes que usan `project.demoPath`, `project.showcasePath` y `project.futureUrl`.

## Error corregido

```txt
Cannot read properties of undefined (reading 'items')
```
