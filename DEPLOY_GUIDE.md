# Guía rápida de despliegue — Crohnoz Labs

## 1. Abrir proyecto

```bash
cd crohnozlabs-site
npm install
npm run dev
```

## 2. Probar rutas locales

Sitio principal:

```txt
http://localhost:5173/
```

Muestras públicas:

```txt
http://localhost:5173/muestras
http://localhost:5173/muestras/sweetops
http://localhost:5173/muestras/fdr-centro-podologico
http://localhost:5173/muestras/kronos-trace
http://localhost:5173/muestras/sistema-arriendos
http://localhost:5173/muestras/homelab
http://localhost:5173/muestras/inclume
```

## 3. Probar build local

```bash
npm run build
npm run preview
```

## 4. Subir a GitHub

```bash
git init
git add .
git commit -m "Crohnoz Labs landing with public demo routes"
git branch -M main
git remote add origin https://github.com/Crohnoz/crohnozlabs-site.git
git push -u origin main
```

Ajusta el nombre del repositorio si vas a usar otro.

## 5. Conectar con Netlify

1. Entrar a Netlify.
2. New site from Git.
3. Seleccionar el repositorio.
4. Build command: `npm run build`.
5. Publish directory: `dist`.
6. Deploy.

El archivo `netlify.toml` ya contiene:

```txt
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Esto permite que rutas internas como `/muestras/sweetops` funcionen al refrescar la página.

## 6. Conectar dominio

Dominio principal actualmente documentado:

```txt
crohnozlabs.cl
```

Si el dominio definitivo será `cronoslab.cl`, cambia primero:

```txt
src/data/site.js
index.html
public/robots.txt
public/sitemap.xml
```

En Netlify:

1. Site configuration.
2. Domain management.
3. Add custom domain.
4. Escribir el dominio final.
5. Agregar también `www.`.

Luego en NIC Chile puedes elegir una de dos rutas:

### Opción A: Usar DNS de Netlify

Netlify te entregará servidores DNS. En NIC Chile eliges servicio DNS y pones los nameservers que entregue Netlify.

### Opción B: Mantener DNS externo

Crear registros:

```txt
A     @      75.2.60.5
CNAME www    <tu-sitio>.netlify.app
```

Netlify irá indicando si falta algún registro. Cuando el dominio propague, activar HTTPS desde Netlify.

## 7. Antes de publicar oficialmente

- Confirmar dominio final.
- Confirmar correo real.
- Revisar textos de proyectos públicos.
- Mantener demos separadas de los sistemas productivos.
- Nunca conectar muestras públicas a bases de datos reales de clientes.
- Agregar capturas simuladas cuando existan.
- Confirmar ortografía pública final: Crohnoz Labs / crohnozlabs.cl.
