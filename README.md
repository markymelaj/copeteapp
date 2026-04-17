# copete app

Landing de pre-lanzamiento para **copete app**.

## Qué incluye

- Next.js 16 + App Router + TypeScript
- Tailwind CSS 4
- Landing de una sola página con dirección visual nocturna y premium
- Formulario dinámico para público, negocios y alianzas
- API route server-side para guardar leads
- Supabase listo para waitlist, negocios y aliados
- Vercel Analytics integrado
- Open Graph image y manifest incluidos

## Estructura

```txt
src/
  app/
    api/leads/route.ts
    globals.css
    layout.tsx
    manifest.ts
    not-found.tsx
    opengraph-image.tsx
    page.tsx
  components/
    brand-mark.tsx
    lead-form.tsx
  lib/
    site.ts
    supabase-admin.ts
    validations.ts
supabase/
  migrations/
    001_launch_leads.sql
```

## 1) Variables de entorno

Copia `.env.example` a `.env.local` y completa:

```bash
cp .env.example .env.local
```

Variables:

- `NEXT_PUBLIC_SITE_URL`: URL pública del sitio, por ejemplo `https://copete.app`
- `SUPABASE_URL`: URL del proyecto Supabase
- `SUPABASE_SECRET_KEY`: usa la **secret key** del proyecto. Si tu proyecto todavía usa el modelo antiguo, puedes usar la legacy `service_role`.

## 2) Crear la tabla en Supabase

Ejecuta el SQL de `supabase/migrations/001_launch_leads.sql` en el SQL Editor de Supabase.

Eso crea:

- tabla `launch_leads`
- índice único por `lead_type + email`
- columnas de status y UTM
- vistas separadas para usuarios, negocios y alianzas

## 3) Instalar dependencias

```bash
npm install
```

## 4) Desarrollo local

```bash
npm run dev
```

Abre `http://localhost:3000`.

## 5) Subir a GitHub

```bash
git init
git add .
git commit -m "Initial landing for copete app"
```

Luego crea el repo y empuja:

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

## 6) Desplegar en Vercel

1. Importa el repo desde GitHub en Vercel.
2. Agrega las variables de entorno del `.env.local`.
3. Deploy.
4. Conecta el dominio `copete.app`.
5. Activa Analytics en el panel de Vercel.

## Campos que se guardan

### Público general
- email

### Negocios
- business_name
- commune
- whatsapp
- email

### Alianzas
- name
- company
- role
- email
- message

### Meta adicional
- lead_type
- status
- source
- utm_source
- utm_medium
- utm_campaign
- created_at
- updated_at

## Notas

- El formulario usa inserción **server-side**, no directo desde el navegador a Supabase.
- Hay honeypot básico para frenar spam sencillo.
- La lista queda lista para mailing y seguimiento comercial sin necesidad de panel admin en esta primera etapa.

## Siguiente mejora recomendada

- favicon final de marca
- imagen social final si quieres otra pieza más editorial
- Cloudflare Turnstile si el spam llega a ser problema
- integración con email marketing o CRM
