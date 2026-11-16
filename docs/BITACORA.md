# Bitácora de desarrollo — LoanPro365

Registro en postas: cada sesión (persona o IA) **lee esto al empezar** y **agrega una entrada al terminar**.
La entrada más reciente va arriba. No se borran entradas anteriores; si algo cambió, se corrige en una nueva.

## Estado actual (actualizar en cada posta)

- **Fase:** 1 — Base (ver `docs/ARQUITECTURA.md` §6)
- **Funciona:** paquete de calculadoras con 13 pruebas; web Astro EN/ES con home y 3 herramientas (pago, cuánto puedo comprar, costos de cierre FL); API Hono con `/v1/health` y `/v1/leads`.
- **Roto o pendiente conocido:** el menú enlaza a páginas que aún no existen (comprar, refinanciar, crédito, sobre Pablo, contacto) → 404. D1 sin crear. Sin CI.
- **Bloqueado por el cliente:** NMLS del asesor, correo oficial, dirección física, licencia OFR, tipo de consulta de crédito en precalificación.

## Siguiente posta (tareas en orden)

1. Páginas de contenido EN/ES: comprar, refinanciar, crédito difícil, inversionistas, sobre Pablo, contacto, legales.
2. Herramientas restantes en la web: rentar vs comprar, refinanciación, DSCR, plan de crédito (lógica ya en `packages/calculators`), comparador de préstamos, lista de documentos, glosario, verificador de ayudas FL (requiere datos con fuente).
3. Precalificación de 4 pasos + conexión a `/v1/leads` con consentimiento TCPA bilingüe.
4. CI en GitHub Actions: `npm test`, `astro check`, build.

## Entradas

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
