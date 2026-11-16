# Bitácora de desarrollo — LoanPro365

Registro en postas: cada sesión (persona o IA) **lee esto al empezar** y **agrega una entrada al terminar**.
La entrada más reciente va arriba. No se borran entradas anteriores; si algo cambió, se corrige en una nueva.

## Estado actual (actualizar en cada posta)

- **Fase:** 1 — Base (ver `docs/ARQUITECTURA.md` §6)
- **Funciona:** calculadoras (16 pruebas); web EN/ES con 47 páginas: home, las 11 herramientas, índice de herramientas y 10 páginas de contenido (comprar, refinanciar, crédito difícil, inversionistas, ayudas FL, aprende, sobre Pablo, precalificación provisional, contacto, legal); API con `/v1/health` y `/v1/leads`; CI en GitHub Actions (pruebas, build, paridad EN/ES y hreflang).
- **Roto o pendiente conocido:** sin enlaces internos rotos. La precalificación es provisional (lleva a WhatsApp). Políticas de privacidad, quejas y accesibilidad pendientes de redacción legal. D1 sin crear. En móvil el menú ocupa 3 líneas: conviene un menú plegable.
- **Bloqueado por el cliente:** NMLS del asesor, correo oficial, dirección física, licencia OFR, tipo de consulta de crédito en precalificación, foto y biografía de Pablo, textos legales.

## Siguiente posta (tareas en orden)

1. Menú plegable en móvil y, en herramientas largas, mostrar el resultado arriba o fijo (en móvil queda bajo 6–10 campos).
2. Precalificación de 4 pasos + conexión a `/v1/leads` con consentimiento TCPA bilingüe.
3. Añadir `astro check` al CI.
4. Verificador de ayudas: añadir programas de condado solo con URL oficial verificada.

## Entradas

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
