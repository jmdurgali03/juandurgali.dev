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
