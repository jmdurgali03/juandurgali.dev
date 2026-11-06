# juandurgali.dev

Portfolio personal bilingüe construido con Next.js, React, TypeScript y Tailwind CSS.

## Requisitos

- Node.js 20 o posterior
- Corepack habilitado (`corepack enable`)
- pnpm 10

## Desarrollo local

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

El sitio queda disponible en `http://localhost:3000`. La ruta raíz redirige a `/en`; también está disponible `/es`.

## Variables de entorno

Consulta `.env.example`. Las credenciales SMTP son necesarias para enviar el formulario de contacto. Nunca deben exponerse con el prefijo `NEXT_PUBLIC_` ni incorporarse al repositorio.

## Verificación

```bash
pnpm check
```

El comando ejecuta ESLint, TypeScript, pruebas unitarias y el build de producción.

## Despliegue

1. Configura las variables de `.env.example` en el proveedor de hosting.
2. Ejecuta `pnpm build` como verificación previa.
3. Comprueba `/robots.txt`, `/sitemap.xml`, `/opengraph-image` y un envío real del formulario.

El endpoint de contacto incluye validación, límite de payload y honeypot. Si aparece spam sostenido, el siguiente paso es agregar rate limiting distribuido en la infraestructura de despliegue.

## Certificaciones

La sección `#certificates` usa una galería curva de insignias inspirada en el prototipo aprobado (Circular Gallery de React Bits), implementada con DOM/CSS sin nuevas dependencias. Los datos y enlaces están en `src/components/sections/CertificatesSection.tsx`; los certificados y sus vistas previas están en `public/assets/certificates/`.

- UTN: Diplomatura en Programación Web Full Stack, 150 horas, 30/12/2024.
- Udemy / Fernando Herrera: Nest: Desarrollo backend escalable con Node, 24 horas, 31/03/2026.

El PDF público de UTN tiene el DNI redactado de forma irreversible; no sustituirlo por el original sin anonimizar. La vista previa se genera desde esa copia redactada. Las insignias son una representación visual propia, no badges oficiales del emisor.

La galería admite arrastre, scroll horizontal, un desplazamiento sutil al recorrer la página, flechas y teclado (←/→/Home/End). Con movimiento reducido muestra ambas insignias sin animación. El diálogo permite Escape, restaura el foco y enlaza el PDF y la verificación del emisor.
