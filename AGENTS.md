# Instrucciones para agentes (y personas)

## Regla de inicio y cierre de sesión (obligatoria)

1. **Al iniciar** cualquier sesión, antes de tocar código: lee `docs/BITACORA.md` completo (estado actual, siguiente posta y la última entrada) y `docs/ARQUITECTURA.md`. Trabaja sobre la "Siguiente posta" salvo que el usuario pida otra cosa.
2. **Al terminar** la sesión, o antes de un commit que cierre trabajo: agrega una entrada en `docs/BITACORA.md` con la plantilla (hecho, decisiones, verificado, no verificado, notas) y actualiza "Estado actual" y "Siguiente posta". La bitácora se commitea junto con el código.
3. No borres entradas anteriores; corrige con una entrada nueva.

## Reglas del proyecto

- Bilingüe siempre: toda página, texto, herramienta y aviso legal existe en `en` y `es` (`apps/web/src/i18n`). Una clave faltante es un error.
- Móvil primero: diseña y prueba a 375 px; el botón fijo de contacto no tapa contenido.
- Estilo sobrio: sin elementos llamativos.
- Cifras de referencia (impuestos, límites, programas) solo en `packages/calculators/src/data/` con `source` y `asOf`. Nunca inventes datos ni reseñas.
- Toda herramienta muestra el aviso "estimación, no oferta de crédito" y funciona sin pedir datos personales.
- Nunca pidas SSN, fecha de nacimiento ni números de cuenta en el sitio.
- Antes de commitear: `npm test` y `npm run build` deben pasar. No subas `.env`, `.dev.vars` ni secretos.
