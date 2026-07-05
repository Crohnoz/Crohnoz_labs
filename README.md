# Crohnoz Labs Website

Landing comercial para **Crohnoz Labs** (`crohnozlabs.cl`): laboratorio de soluciones digitales, sistemas administrativos, automatización, infraestructura práctica, reutilización tecnológica y muestras públicas de proyectos.

## Objetivo

Presentar Crohnoz Labs como una carta de presentación profesional para captar clientes que necesitan resolver problemas administrativos, operativos o tecnológicos mediante sistemas funcionales.

Claim principal:

> Trae tu problema. Lo convertimos en sistema.

## Stack

- Vite
- React
- TailwindCSS
- Lucide React
- Framer Motion listo para futuras animaciones
- Netlify

## Instalación

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy en Netlify

El proyecto ya incluye `netlify.toml` con fallback SPA para que funcionen rutas como `/muestras/sweetops`.

Configuración esperada:

- Build command: `npm run build`
- Publish directory: `dist`

## Dominio

Dominio principal usado en el proyecto:

```txt
crohnozlabs.cl
```

También se dejó documentado `crohnozlabs.cl` como alias mencionado en conversación. La configuración visible del dominio está centralizada en:

```txt
src/data/site.js
```

Para SEO, si se cambia el dominio principal, también reemplazarlo en:

```txt
index.html
public/robots.txt
public/sitemap.xml
```

## WhatsApp

WhatsApp comercial ya configurado:

```txt
+56 9 3507 9652
```

Archivo:

```txt
src/data/contact.js
```

Formato usado para `wa.me`:

```txt
56935079652
```

## Rutas públicas de muestra

Las muestras están pensadas para mostrar conceptos comerciales sin exponer bases de datos reales ni sistemas privados de clientes.

```txt
/muestras
/muestras/sweetops
/muestras/fdr-centro-podologico
/muestras/kronos-trace
/muestras/sistema-arriendos
/muestras/homelab
/muestras/inclume
```

Estas rutas funcionan por el fallback de Netlify:

```txt
/* -> /index.html
```

## Estructura

```txt
src/
├── components/
│   ├── DemoRoutes.jsx
│   ├── ProjectDemoPage.jsx
│   ├── CommercialModels.jsx
│   ├── FinalCTA.jsx
│   ├── FloatingActions.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── LabInfrastructure.jsx
│   ├── Method.jsx
│   ├── Navbar.jsx
│   ├── PainPoints.jsx
│   ├── Projects.jsx
│   ├── QuickNavigation.jsx
│   ├── ReuseTech.jsx
│   ├── SectionHeader.jsx
│   └── Solutions.jsx
├── data/
│   ├── contact.js
│   ├── navigation.js
│   ├── projects.js
│   ├── site.js
│   └── solutions.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Editar proyectos

Los proyectos públicos están en:

```txt
src/data/projects.js
```

Cada proyecto tiene:

- `slug`
- `demoPath`
- `demoLabel`
- `demoBlueprint`
- módulos
- impacto
- resumen comercial

Catita/KatYta Studio fue excluido intencionalmente de la vitrina pública.

## Editar servicios, dolores y planes

```txt
src/data/solutions.js
```

## Pendientes recomendados

1. Confirmar dominio final definitivo: `crohnozlabs.cl` o `crohnozlabs.cl`.
2. Confirmar correo real o redirección para `contacto@crohnozlabs.cl`.
3. Agregar capturas simuladas o mockups para cada muestra pública.
4. Crear demos visuales más completas por proyecto sin usar datos reales.
5. Agregar Google Search Console cuando el dominio esté propagado.
6. Agregar analytics liviano si se necesita medir conversiones.


## V7: Branding y links de proyectos

Rutas nuevas:

```txt
/marca
/proyectos
/proyectos/sweetops
/proyectos/fdr-centro-podologico
/proyectos/kronos-trace
/proyectos/sistema-arriendos
/proyectos/homelab
/proyectos/inclume
```

Cada proyecto tiene tres niveles de enlace:

1. **Ficha del proyecto**: página comercial pública.
2. **Muestra segura**: demo pública con datos ficticios.
3. **Ruta futura**: subdominio reservado para cuando exista una landing o producto separado.

La regla estratégica es: la demo vende la solución; el sistema real queda privado, protegido y separado.

## V8 — Branding C_

Esta versión aplica el branding aprobado con símbolo **C_**, paleta verde terminal y claim principal:

> Sistemas que hacen funcionar tu negocio.

Archivos principales de marca:

```txt
public/favicon.svg
public/logo-crohnozlabs.svg
public/og-crohnozlabs.svg
src/components/BrandMark.jsx
src/data/brand.js
src/styles/index.css
```

## V10.2 — Continuidad e infraestructura administrada

La web incorpora una nueva línea de servicio: **Infraestructura administrada Crohnoz**.

Esto cubre bases de datos por cliente, respaldos, separación entre demo pública y sistema real, credenciales privadas, monitoreo y ruta mínima de recuperación.

El caso FDR queda marcado como recuperación técnica: la plataforma carga, pero la base de datos debe reconstruirse con una demo segura antes de volver a mostrar un deploy público.
