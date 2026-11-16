# Bitácora de desarrollo — LoanPro365

Registro en postas: cada sesión (persona o IA) **lee esto al empezar** y **agrega una entrada al terminar**.
La entrada más reciente va arriba. No se borran entradas anteriores; si algo cambió, se corrige en una nueva.

## Estado actual (actualizar en cada posta)

- **Fase:** 2 — Precalificación y API, desplegadas como vista previa (ver `docs/ARQUITECTURA.md` §6)
- **En línea (vista previa, `noindex`):** web https://loanpro365-web.francisco-buenano.workers.dev · API https://loanpro365-api.francisco-buenano.workers.dev
- **Funciona:** calculadoras (16 pruebas); web EN/ES con 47 páginas: home, 11 herramientas, índice, 9 páginas de contenido, legal y precalificación de 4 pasos; menú plegable en móvil; API `/v1/leads` validada (8 pruebas) que guarda en D1, con límite de 5 envíos/min por IP y campo trampa anti-bots; aviso al broker por correo (Resend) listo pero **inactivo** hasta configurar la clave; CI con pruebas, `astro check`, build, paridad EN/ES y hreflang.
- **Roto o pendiente conocido:** el broker aún no recibe avisos: falta crear la cuenta de Resend, guardar `RESEND_API_KEY` con `wrangler secret put` y definir `NOTIFY_TO`/`NOTIFY_FROM` en `[vars]` (requiere el correo oficial). Sin Turnstile. Políticas de privacidad, quejas y accesibilidad pendientes de redacción legal. El dominio loanpro365.com no apunta al sitio nuevo.
- **Bloqueado por el cliente:** NMLS del asesor, correo oficial, dirección física, licencia OFR, tipo de consulta de crédito, foto y biografía de Pablo, textos legales, revisión legal del texto de consentimiento TCPA, acceso al DNS de loanpro365.com.

## Infraestructura (Cloudflare)

- Cuenta compartida con SomosVitally por decisión del dueño (2026-11-15). Recursos **separados**, sin nada compartido: Worker `loanpro365-api`, Worker de archivos estáticos `loanpro365-web`, base D1 `loanpro365` (id `42086125-…`). **Nunca** usar ni tocar `somosvitally` ni la D1 `vitally`.
- Desplegar web: `npm run deploy -w @loanpro365/web` (build + `wrangler deploy`, solo archivos estáticos; no aceptar la autoconfiguración de wrangler que agrega `@astrojs/cloudflare`).
- Desplegar API: `cd apps/api && npx wrangler deploy`. Esquema: `npx wrangler d1 execute loanpro365 --remote --file=schema.sql`.
- Al pasar a producción: quitar `apps/web/public/_headers` (`noindex`), conectar el dominio y actualizar `ALLOWED_ORIGIN` y la URL de API en `Prequal.astro`.

## Siguiente posta (tareas en orden)

1. Activar el aviso al broker cuando el dueño cree la cuenta de Resend (ver "Roto o pendiente").
2. Turnstile en la precalificación (crear el widget en Cloudflare; clave secreta con `wrangler secret put`).
3. Reseñas de Google (`/v1/reviews`) y bloque de confianza en la home.
4. Páginas de condado (Broward, Miami-Dade, Palm Beach) y sección Aprende con guías.
5. Verificador de ayudas: añadir programas de condado solo con URL oficial verificada.

## Entradas

### 2026-11-15 — Sesión 6 (Claude Code)
- **Hecho:** aviso al broker por correo con Resend (`apps/api/src/notify.ts`), opcional: se activa solo con `RESEND_API_KEY`, `NOTIFY_TO` y `NOTIFY_FROM`; el correo lleva datos mínimos escapados y se envía en segundo plano (`waitUntil`), así que un fallo del correo no pierde el lead. Límite de envíos con el binding `LEADS_LIMITER` (5/min por IP). Campo trampa `website` en la precalificación.
- **Decisiones:** Resend por ser simple y sin SDK; el lead siempre se guarda en D1 primero. Las claves nunca van en el repo.
- **Verificado:** 16 + 8 pruebas; `astro check` 0 errores; API y web desplegadas; en vivo, 7 envíos seguidos con campo trampa → el 7.º devolvió 429 y la base quedó con 0 leads.
- **No verificado:** envío real de correo (no hay clave de Resend).
- **Notas:** el límite de Cloudflare es aproximado (dejó pasar 6, no 5).

### 2026-11-15 — Sesión 5 (Claude Code)
- **Hecho:** despliegue de vista previa en Cloudflare: D1 `loanpro365` con el esquema, API `loanpro365-api` (CORS con varios orígenes), web estática `loanpro365-web` (Workers Static Assets, `wrangler.jsonc` solo con `assets`). URL pública de la API en `Prequal.astro` (no es secreta). `_headers` con `X-Robots-Tag: noindex`.
- **Decisiones:** el dueño eligió mantener la misma cuenta de Cloudflare que SomosVitally con recursos separados. Se usan Workers Static Assets porque wrangler ya no publica Pages directamente.
- **Verificado:** `/v1/health` responde; la web devuelve 200 con `noindex`; precalificación real enviada desde la web publicada → registro en D1 con versión de consentimiento; el registro de prueba se borró (0 leads).
- **No verificado:** el CI tras este push.
- **Notas:** la autoconfiguración de wrangler intentó convertir la web en SSR (`@astrojs/cloudflare`); se revirtió.

### 2026-11-15 — Sesión 4 (Claude Code)
- **Hecho:** menú plegable en móvil (`<details>`, sin JS); en herramientas el resultado va arriba en móvil y fijo a la derecha en escritorio; tabla de rentar o comprar plegable. Precalificación en 4 pasos (`components/Prequal.astro`, `/en/prequalify/` y `/es/precalificacion/`) con resultado (rango de precio + programas) antes de pedir datos, consentimiento TCPA bilingüe versionado (`tcpa-2026-11-v1`) y envío a `/v1/leads`, con respaldo a WhatsApp. API: validación de teléfono, correo y tamaño, pruebas con Vitest. `astro check` en CI.
- **Decisiones:** el texto de consentimiento lleva versión y se guarda con cada lead. Si la API falla, nunca se pierde el contacto: se ofrece WhatsApp con un resumen sin datos sensibles.
- **Verificado:** `npm test` (16 + 4 pruebas), `npm run check` (0 errores), build (47 páginas); en el navegador a 375 px: validación de campos, pasos 1 a 4, respaldo de WhatsApp, menú plegable, resultado arriba del formulario, sin scroll horizontal.
- **No verificado:** envío real a la API (no está desplegada); vista de escritorio en detalle.
- **Notas:** se corrigió un error por el que los pasos ocultos se mostraban (`[hidden]` ahora gana sobre el CSS). El texto TCPA es un borrador: requiere revisión legal.

### 2026-11-15 — Sesión 3 (Claude Code)
- **Hecho:** las 11 herramientas están en la web en EN/ES (47 páginas). Nuevas: rentar vs comprar, refinanciación, DSCR, plan de crédito, comparador FHA/convencional/VA (`loanPrograms` en calculators), verificador de ayudas FL, lista de documentos (W-2, independiente, ITIN) y glosario bilingüe. Textos y campos en `apps/web/src/i18n/tools.ts`; un solo componente `Tool.astro`. Herramientas enlazadas desde las páginas de contenido.
- **Decisiones:** el verificador de ayudas solo enlaza a Florida Housing (URL conocida); se quitaron los enlaces de condados porque no se pudieron verificar. Requisitos del comparador con fuente en el código (HUD 4000.1, Fannie Mae B3-5.1-01; VA sin mínimo oficial).
- **Verificado:** `npm test` (16 pruebas), build de 47 páginas, sin enlaces internos rotos, rentar vs comprar / comparador / documentos funcionando a 375 px sin errores de consola.
- **No verificado:** CI en GitHub, `astro check`.
- **Notas:** los requisitos y listas de documentos son generales; el broker debe revisarlos antes de publicar.

### 2026-11-15 — Sesión 2 (Claude Code)
- **Hecho:** contenido EN/ES en `apps/web/src/i18n/pages.ts` renderizado por `components/Content.astro` y la ruta `pages/[lang]/[page].astro`; índice de herramientas; ruta `legal`; enlaces en el pie; CI en `.github/workflows/ci.yml`.
- **Decisiones:** el contenido de páginas vive en un archivo tipado por idioma (misma estructura obligatoria). Solo se citan requisitos generales con fuente (HUD 4000.1, VA, Fannie Mae); nada de tasas ni cifras inventadas.
- **Verificado:** `npm run build` (31 páginas); script sin enlaces internos rotos; `/es/comprar/` a 375 px sin scroll horizontal.
- **No verificado:** CI en GitHub (primera ejecución tras este push), `astro check`.
- **Notas:** los requisitos de programas citados deben revisarse con el broker antes de publicar.

### 2026-11-15 — Sesión 1 (Claude Code)
- **Hecho:** auditoría de loanpro365.com y benchmarking (Total Mortgage, Rocket, Bank of America, Pregúntale al Lender, Motto/Chase). Arquitectura en `docs/ARQUITECTURA.md`. Monorepo npm: `packages/calculators`, `apps/web`, `apps/api`.
- **Decisiones:** Astro estático con rutas `/en/` y `/es/` y slugs traducidos; la lógica de cálculo vive en un solo paquete compartido por web y API; los datos de referencia de Florida llevan `source` y `asOf`; el sitio nunca pide SSN, fecha de nacimiento ni cuentas.
- **Verificado:** `npm test` (13 pruebas pasan) y `npm run build` (9 páginas).
- **No verificado:** vista en navegador a 375 px, `astro check`, `wrangler dev`.
- **Notas:** el repo remoto `xavoxs/loanpro365` estaba vacío; la cuenta `gh` local (xbuenano) solo tiene permiso de lectura.

<!-- Plantilla para nuevas entradas (copiar arriba de la última):
### AAAA-MM-DD — Sesión N (quién)
- **Hecho:**
- **Decisiones:**
- **Verificado:** (comandos y resultado)
- **No verificado:**
- **Notas / riesgos:**
Y actualizar "Estado actual" y "Siguiente posta".
-->
