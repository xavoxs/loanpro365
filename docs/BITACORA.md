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

### 2026-11-17 — Sesión 14 (Claude Code)
- **Análisis:** la portada de Rocket Mortgage tiene 5 secciones (~4,300 px), una idea y una acción por sección, mucho blanco y un solo color de acento. La nuestra tenía 11 secciones (~6,600 px) con barra superior, franja de íconos, historia, servicios, 4 pasos, calculadoras, costos de Florida, formulario de llamada, FAQ, banda y blog: saturada y sin secuencia.
- **Hecho:** portada minimalista de 7 secciones (~4,300 px en escritorio): 1 hero con video, titular, una acción y 3 objetivos (comprar, refinanciar, comercial); 2 «Un préstamo para cada meta» (3 tarjetas + enlaces secundarios); 3 «Calcula tus posibilidades» (panel con el estimador en vivo); 4 «Por qué LoanPro365» (15+*, 98%*, 24/7); 5 «Aprende paso a paso» (3 rutas); 6 preguntas frecuentes; 7 cierre con una acción. Textos en `apps/web/src/i18n/landing.ts`. Se quitó la barra superior. El formulario de llamada pasó a la página de Contacto (`components/Callback.astro`).
- **Colores:** cromática del logo. Azul real «Loan» #1614B3 (acción), grafito «Pro» #4F4F4F (texto secundario), tinta #1C1C22, azul profundo #0B0A5C (pie y superficies oscuras). Favicon y monograma recoloreados. Se quitaron el azul #1F4FD8 y el marino #0C1F3F anteriores.
- **Verificado:** `astro check` 0 errores/advertencias, build 75 páginas sin enlaces rotos; navegador a 1440 y 375 px sin scroll horizontal; formulario presente en Contacto.
- **Regla:** mantener la portada en 7 secciones o menos; cualquier contenido nuevo va a páginas internas.

### 2026-11-17 — Sesión 13 (Claude Code)
- **Hecho:** Pablo deja de ser tema principal de la portada (pedido del dueño). La sección de historia habla en voz de la empresa («LoanPro365 Mortgages nació para…») y en lugar de su foto muestra datos de la empresa (15+ años*, 98%*, 6 tipos de préstamo, NMLS #1486485). Pablo aparece solo en la página «Conócenos» (antes «Nosotros», ahora `/es/conocenos/`) con una ficha de equipo (foto, rol, NMLS) y en la línea legal del pie.
- **Regla para próximas sesiones:** la marca protagonista es LoanPro365 Mortgages; no volver a centrar la portada en Pablo.
- **Verificado:** `astro check` 0 errores/advertencias, build 75 páginas sin enlaces rotos; portada a 1280 y 375 px sin scroll horizontal; ficha de Pablo visible en Conócenos.

### 2026-11-17 — Sesión 12 (Claude Code)
- **Hecho:** portada reorganizada con la estructura del modelo nero.jipjip.com (plantilla Astro de servicio local), en el diseño de LoanPro365: barra superior con asistencia 24/7 y teléfono (todas las páginas); hero con video y estimador (se mantiene); franja oscura de confianza con 6 íconos; historia de la empresa con foto de Pablo; «Qué hacemos» en rejilla de 6 servicios; «Cómo funciona» en 4 pasos; bloque «Sin adivinanzas» con lista de ventajas + formulario «¿Quieres que te llamemos?» (nombre, teléfono, condado, mejor hora, qué necesitas, mensaje, consentimiento TCPA, campo trampa) que envía a `/v1/leads` con `sourceTool: callback` y respaldo a WhatsApp; FAQ en dos columnas; banda final oscura con dos botones (Precalifícate + Llamar); tarjetas del blog por ruta. Textos en `apps/web/src/i18n/sections.ts`.
- **Decisiones:** sin sección de testimonios ni calificación con estrellas del modelo: no hay reseñas reales (no se inventan). Se conservan calculadoras y costos de Florida entre «Cómo funciona» y «te llamamos».
- **Verificado:** `astro check` 0 errores/advertencias, build 75 páginas; revisión a 1440 y 375 px sin scroll horizontal; envío real del formulario desde la vista previa → registro en D1 con `source_tool = callback`; registro de prueba borrado (0 leads).
- **Siguiente:** cuando existan reseñas reales (Google), agregar la sección de testimonios con `/v1/reviews`.

### 2026-11-17 — Sesión 11 (Claude Code)
- **Hecho:** dos rutas nuevas en el blog, EN/ES. Refinanciación (3 pasos): cuándo conviene y punto de equilibrio, tipos (tasa y plazo, cash-out, FHA Streamline, IRRRL de VA, convencional para quitar seguro), costos/documentos/proceso en Florida (incluye derecho de rescisión de 3 días). Comercial (3 pasos): residencial vs comercial (regla 1–4 unidades, DSCR), cómo evalúan (NOI, DSCR, LTV, experiencia, documentos), financiamiento para negocios (equipos, inventario, flooring, cuentas por cobrar, líneas de crédito). Metadatos de rutas en `apps/web/src/i18n/series.ts`: cada ruta termina en su acción (comprador y refinanciación → precalificación; comercial → asesor por WhatsApp). Índice del blog con las 3 rutas y saltos; la portada muestra el primer paso de cada ruta.
- **Decisiones:** sin cifras de DSCR o LTV mínimos comerciales (varían por prestamista); impuestos de Florida en refinanciación descritos como «pueden aplicar, confirmar en el Loan Estimate».
- **Verificado:** `astro check` 0 errores, build 75 páginas sin enlaces rotos; final de cada ruta con la acción correcta (comercial → wa.me, refinanciación → /es/precalificacion/); portada muestra las 3 rutas.
- **Siguiente:** que el broker revise los 12 artículos nuevos; la precalificación podría abrir directo en «Refinanciar» cuando se llega desde la ruta de refinanciación.

### 2026-11-17 — Sesión 10 (Claude Code)
- **Hecho (datos):** auditoría de cifras contra fuentes oficiales. Corregido: (1) doc stamps de la escritura en Miami-Dade para propiedades que no son unifamiliares: $1.05 por $100 ($0.60 + recargo $0.45, Fla. Stat. §201.031); la calculadora daba $0.70. (2) Préstamos convencionales: Fannie Mae eliminó el mínimo de 620 en Desktop Underwriter desde el 16-nov-2025 (SEL-2025-09); ahora 620 se presenta como mínimo habitual de los prestamistas, no como regla. Prueba nueva para Miami-Dade (17 pruebas). «15+ años» también marcado con * como dato de la empresa.
- **Hecho (avisos legales):** pie con aviso de corredor (no prestamista), «no es compromiso de préstamo / sujeto a aprobación», no afiliación con HUD/FHA/VA/USDA/Fannie/Freddie, calculadoras educativas y cifras * de la empresa, enlace a NMLS Consumer Access. Página legal completa EN/ES: licencias, corredor, programas del gobierno, contenido, igualdad de vivienda (clases protegidas), privacidad (datos, 24 meses, STOP), quejas (OFR de Florida y CFPB) y accesibilidad. Aviso al pie de cada artículo.
- **Hecho (blog):** «Ruta del comprador» de 6 pasos en EN/ES: 1 rentar o comprar, 2 crédito y presupuesto, 3 FHA/VA/USDA/convencional, 4 mercado y programas de Florida, 5 costos de cierre, 6 los 8 pasos hasta las llaves. Campos `series`, `order`, `tool` en el esquema. Cada artículo: «Paso X de 6», bloque «Ponlo en práctica» con su calculadora y precalificación, «Siguiente paso» y lista de la ruta; el último cierra con la precalificación. Índice del blog con la ruta ordenada y botón «Empezar la ruta».
- **Verificado:** 17 + 8 pruebas, `astro check` 0 errores, build 63 páginas sin enlaces rotos; calculadora Miami-Dade no unifamiliar = $4,200 en $400,000; ruta y pie revisados en navegador.
- **No verificado:** NMLS Consumer Access bloquea consultas automáticas (403): los números NMLS 1486485 / 328337 y la licencia LO23103 se tomaron del sitio del cliente sin verificar. Falta el número de licencia de Florida de la empresa (OFR) para el pie, si aplica. El correo oficial sigue sin confirmar (admin@ vs info@).
- **Siguiente:** rutas para refinanciación y préstamos comerciales en el blog.

### 2026-11-17 — Sesión 9 (Claude Code)
- **Hecho:** cambio de enfoque: la empresa primero, no Pablo como agente. Portada nueva con datos del sitio real (about-us): hero con video de fondo (Pexels 32491588, 1280 px 780 KB y 720 px 256 KB, póster, botón pausar; no se reproduce con «reducir movimiento» o ahorro de datos), titular «Una compañía hipotecaria diferente en Florida», cifras de la empresa (15+ años, 98% de preaprobados cerrados*, 24/7, ES·EN) con nota de origen, «Por qué nosotros» (tasas mayoristas, rapidez, resolución de problemas, cierre seguro, 24/7, proceso explicado), 6 tipos de préstamo, sección de liderazgo y realtors, blog. Nuevas páginas: Préstamos comerciales y Blog (2 guías del blog real adaptadas en EN y ES: 8 pasos y mercado/programas de Florida). «Sobre Pablo» pasa a «Nosotros» (`/es/nosotros/`). Logo oficial «LoanPro» (sin 365) tal cual, una sola vez en la cabecera; se quitó el monograma LP de la cabecera (sigue como favicon).
- **Decisiones:** las cifras de la empresa se muestran como afirmaciones suyas con nota «*Cifras de la empresa publicadas en loanpro365.com». Los artículos se reescribieron sin cifras dudosas del original (seguro de $1,000–2,500, montos de Hometown Heroes); se remite a floridahousing.org.
- **Verificado:** `astro check` 0 errores, build 55 páginas; navegador a 375, 1280 y 1440 px: logo visible, sin solapes ni scroll horizontal, video reproduciéndose (720 en móvil, 1280 en escritorio), CTA del estimador dentro de la primera pantalla en móvil.
- **No verificado:** los artículos antiguos sindicados de remtgs.com no se migraron (solo enlazaban afuera). El cliente debe confirmar las cifras 15+ años y 98%.

### 2026-11-17 — Sesión 8 (Claude Code)
- **Hecho:** logos originales adaptados al nuevo diseño: wordmark «LoanPro» en dos tonos (Loan azul de acción, Pro tinta) con «365» y el lema original «residential and commercial financing» traducido; monograma LP del favicon redibujado en vector (`public/brand/mark.svg`, `public/favicon.svg`); símbolo de Igualdad de Vivienda redibujado en el pie. Sin biselado ni sombra del logo antiguo.
- **Verificado:** `astro check` 0 errores; en navegador a 375, 1280 y 1440 px sin desbordes ni solapes (el lema se oculta donde no cabe).
- **No verificado:** ícono para iPhone (`apple-touch-icon` PNG) aún no existe; solo favicon SVG.

### 2026-11-15 — Sesión 7 (Claude Code, rediseño con /impeccable)
- **Hecho:** rediseño completo del sistema visual. `PRODUCT.md` creado con el dueño (acción principal: precalificación; prueba disponible: foto real de Pablo; identidad libre). Dirección elegida por el dueño: el estándar de la categoría al nivel de Better.com y Rocket Mortgage (contrato en `apps/web/.impeccable/surfaces/`). Nueva portada: titular, estimador en vivo (ingreso + ahorros → rango de precio, con conteo animado), tarjeta de Pablo con NMLS, franja de confianza, 3 pasos, caminos de préstamo, herramientas, costos de Florida con fuente, sobre Pablo, preguntas frecuentes y cierre con CTA. Cabecera fija con CTA «Precalifícate», selector EN/ES y menú móvil con panel; pie de 4 columnas con NMLS e igualdad de vivienda; barra fija móvil (Precalifícate + WhatsApp) que en la portada aparece al pasar el botón del hero. Manrope autoalojada, íconos Lucide. La precalificación hereda el sistema, con barra de progreso y datos precargados desde el estimador (sessionStorage, nunca en la URL).
- **Decisiones:** sin testimonios ni cifras (no existen). La foto de Pablo se usa sola si existe `public/img/pablo.jpg`.
- **Verificado:** 16 + 8 pruebas, `astro check` 0 errores, build 47 páginas, detector de diseño sin hallazgos; revisión en navegador a 1280, 1440 y 375 px (sin scroll horizontal; barra fija oculta arriba y visible al bajar). Desplegado en la vista previa.
- **No verificado:** revisión final por un agente revisor independiente (no se pudieron guardar capturas en archivo); páginas de contenido revisadas solo en la herramienta de pago.
- **Notas:** foto real de Pablo descargada del sitio actual con permiso del dueño, optimizada (105 KB) en `public/img/pablo.jpg` con su origen incrustado. Se corrigió un error de `Icon.astro` que borraba las medidas de las figuras internas de los íconos. `DESIGN.md` y `.impeccable/design.json` documentan el sistema.

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
