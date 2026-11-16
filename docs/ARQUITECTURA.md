# LoanPro365 — Arquitectura del nuevo sitio

Sitio bilingüe (EN/ES) para un corredor hipotecario del sur de Florida, con micro-herramientas y un embudo de precalificación propio.

## 1. Principios

- **Móvil primero.** Diseñar y probar a 375 px. Botón fijo de llamar/WhatsApp que nunca tapa contenido.
- **Herramienta antes que formulario.** Cada herramienta da su resultado sin pedir datos; el contacto solo se pide para “enviarme el resumen” o “hablar con Pablo”.
- **Paridad de idiomas.** Toda página, herramienta, aviso legal y correo existe en `/en/` y `/es/`.
- **Cumplimiento visible.** NMLS correcto (empresa 1486485, asesor 328337 — verificar en NMLS Consumer Access antes de publicar), Equal Housing Opportunity, licencia de Florida (OFR), avisos en cada herramienta.
- **Rápido y accesible.** HTML estático, JS solo en las herramientas (islas). WCAG 2.2 AA, Core Web Vitals en verde.

## 2. Monorepo

```
loanpro365/
├─ packages/calculators/   Lógica pura en TypeScript de todas las herramientas + pruebas (Vitest)
├─ apps/web/               Frontend Astro (estático, i18n por rutas, islas para herramientas)
├─ apps/api/               Backend Hono sobre Cloudflare Workers (leads, precalificación, PDF/correo)
└─ docs/                   Arquitectura, contenido, cumplimiento
```

La lógica de cálculo vive en un solo paquete que usan el front (resultado inmediato) y el back (validar y generar el resumen). Así el número que ve la persona y el que recibe el asesor son el mismo.

## 3. Frontend (`apps/web`)

**Stack:** Astro 5, TypeScript, CSS propio con tokens (sin framework de UI), islas en TS vanilla.

### Rutas (iguales en ambos idiomas, slug traducido)

| EN | ES | Contenido |
|---|---|---|
| `/en/` | `/es/` | Hero con propuesta, CTA único “See how much I can buy / Ver cuánto puedo comprar”, tipos de préstamo, herramientas destacadas, reseñas, perfil del broker |
| `/en/buy/` | `/es/comprar/` | Primera vivienda, FHA, VA, Convencional, HomeReady |
| `/en/refinance/` | `/es/refinanciar/` | Refinanciación y consolidación de deudas |
| `/en/credit-challenges/` | `/es/credito-dificil/` | Opciones con crédito bajo + simulador de crédito |
| `/en/investors/` | `/es/inversionistas/` | DSCR, comercial |
| `/en/florida-assistance/` | `/es/ayudas-florida/` | Programas de ayuda para el pago inicial + verificador |
| `/en/tools/` | `/es/herramientas/` | Índice de las 11 herramientas |
| `/en/tools/<slug>/` | `/es/herramientas/<slug>/` | Una página por herramienta (SEO propio) |
| `/en/learn/` | `/es/aprende/` | Blog/guías + glosario bilingüe |
| `/en/areas/<county>/` | `/es/zonas/<condado>/` | Broward, Miami-Dade, Palm Beach: impuestos, seguro, HOA típicos |
| `/en/about/` | `/es/sobre-pablo/` | Perfil del broker: foto, NMLS, licencia, “Hablo español”, agenda |
| `/en/prequalify/` | `/es/precalificacion/` | Precalificación propia en 4 pasos; al final, enlace al 1003 externo |
| `/en/contact/` | `/es/contacto/` | Teléfono, WhatsApp, correo único, dirección física |
| `/en/legal/*` | `/es/legal/*` | Privacidad, avisos, quejas, accesibilidad, NMLS |

`/` detecta `Accept-Language` solo para **sugerir** el idioma (banner), nunca redirige a la fuerza; por defecto sirve `/en/`.

### Micro-herramientas (en `packages/calculators`)

| Slug | Herramienta | Problema → beneficio |
|---|---|---|
| `payment` | Pago total PITI + HOA + seguro FL | La cuota real en Florida sube por seguro/HOA → pago realista |
| `affordability` | ¿Cuánto puedo comprar? (DTI) | No saber el presupuesto → rango de precio |
| `rent-vs-buy` | Rentar vs comprar | Duda → punto de equilibrio en años |
| `fl-assistance` | Verificador de ayudas en Florida | Desconocer programas → posibles ayudas (requisitos se cargan desde `data/`, con fecha y fuente) |
| `loan-compare` | FHA vs Convencional vs VA | Siglas → comparativa por perfil |
| `closing-costs` | Costos de cierre FL (doc stamps, intangible tax, título) | Costos ocultos → efectivo total |
| `refinance` | Refinanciación y punto de equilibrio | ¿Vale la pena? → meses para recuperar |
| `credit-plan` | Simulador “qué subir para calificar” | Crédito bajo → plan de acción |
| `dscr` | Calculadora DSCR | Inversionista sin W-2 → si califica |
| `documents` | Lista de documentos (W-2, autónomo, ITIN) | No saber qué preparar → cierre más rápido |
| `glossary` | Glosario bilingüe | Barrera del idioma → comprensión |

Todas las cifras de referencia (límites FHA del condado, tasas de impuestos, requisitos de programas) viven en `packages/calculators/src/data/*.ts` con `source` y `asOf`. Nada se inventa: si un dato no está verificado, la herramienta lo pide como entrada.

### Bilingüismo

- `astro.config.mjs` con `i18n: { locales: ['en','es'], defaultLocale: 'en', routing: { prefixDefaultLocale: true } }`.
- Diccionarios en `src/i18n/{en,es}.ts` con tipado: falta una clave → error de compilación.
- Mapa de rutas equivalentes en `src/i18n/routes.ts`; el selector EN | ES lleva a la página gemela.
- `<link rel="alternate" hreflang>` recíproco + `x-default`, canonical por idioma, sitemap con ambos.
- Preferencia guardada en `localStorage` (con try/catch); formatos `en-US` para $ y fechas en ambos idiomas.
- Español neutro y palabras clave nativas: “préstamo hipotecario Florida”, “hipoteca con ITIN”, “casa con mal crédito”.

### Tono, mensajes y confianza

- Tono cercano de asesor personal, sin jerga: “te acompaño de la precalificación al cierre”.
- Mensajes: “Comparo varios prestamistas por ti”, “Hablo tu idioma”, “Opciones aunque tu crédito no sea perfecto”, “Conozco los costos reales de Florida”.
- Confianza en cada página (pie y `TrustBar`): NMLS enlazado, OFR, Equal Housing, reseñas de Google con fecha (vía API, nunca escritas a mano), dirección física, aviso “estimación, no oferta de crédito”.

## 4. Backend (`apps/api`)

**Stack:** Hono en Cloudflare Workers, D1 (SQLite) para leads, Turnstile anti-bot, Resend/SMTP para correo.

| Método | Ruta | Uso |
|---|---|---|
| `POST` | `/v1/leads` | Contacto desde herramienta o formulario. Valida, guarda en D1, avisa al broker |
| `POST` | `/v1/prequal` | Precalificación de 4 pasos. Recalcula con `@loanpro365/calculators`, guarda, devuelve resumen y enlace al 1003 |
| `POST` | `/v1/summary` | Envía por correo el resumen de una herramienta (requiere consentimiento) |
| `GET` | `/v1/reviews` | Proxy cacheado de reseñas de Google Places |
| `GET` | `/v1/health` | Estado |

**Seguridad y cumplimiento**
- Nunca se piden SSN, número de cuenta ni fecha de nacimiento en el sitio; eso queda en el 1003 del prestamista.
- Consentimiento explícito (TCPA) para llamadas/SMS/WhatsApp, con texto en ambos idiomas y registro de fecha, IP e idioma.
- Rate limit por IP, Turnstile, CORS solo al dominio propio, secretos en `wrangler secret`.
- Retención: leads se borran a los 24 meses; endpoint interno de borrado a petición.

### Modelo de datos (D1)

```
leads(id, created_at, locale, source_tool, name, phone, email, consent_tcpa, consent_text_version, payload_json, status)
prequal(id, lead_id, step_data_json, result_json, created_at)
```

## 5. Despliegue

- Web: Cloudflare Pages (build de Astro). API: Cloudflare Workers.
- CI (GitHub Actions): `npm ci`, `npm test`, `astro check`, build, Lighthouse CI (móvil) y verificación de `hreflang`.

## 6. Fases

1. **Base**: paquete de calculadoras + pruebas, Astro i18n, layout, home, herramientas `payment`, `affordability`, `rent-vs-buy`, `closing-costs`. ✅ en este commit (esqueleto)
2. Precalificación + API de leads + correo.
3. Resto de herramientas, páginas de condado, perfil, legales.
4. Blog/aprende, reseñas, analítica sin cookies, Lighthouse en CI.

## 7. Pendiente de verificar con el cliente

- NMLS del asesor (encabezado actual dice “LS 328337”, pie “NMLS 328337”).
- Correo oficial único (hoy admin@ vs info@).
- Dirección física y licencia OFR.
- Si la precalificación hace consulta de crédito suave o dura.
- Programas de ayuda vigentes y sus requisitos (Florida Housing).
