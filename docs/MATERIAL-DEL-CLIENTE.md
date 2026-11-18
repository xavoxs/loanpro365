# Material del cliente para llegar al 9.5

Lo que falta no se puede hacer con código: necesita material real de LoanPro365. Este documento dice qué pedir, en qué formato y dónde va.

## 1. Reseñas (prioridad alta)

**Qué pedir**
- El enlace al perfil de Google Business de LoanPro365 (y Zillow o Yelp si existen).
- De 3 a 6 reseñas reales, de preferencia variadas: compra, refinanciación, comercial; en español y en inglés.
- Si son testimonios directos (no públicos): permiso escrito del cliente para publicar su nombre (o iniciales) y su texto.

**Dónde va:** `apps/web/src/data/reviews.ts`, en la lista `REVIEWS`. Ejemplo de una entrada:

```ts
{ name: 'María G.', city: 'Miramar, FL', rating: 5, text: 'Texto original de la reseña…', lang: 'es', source: 'Google', url: 'https://g.page/…', date: '2025-08', loanType: 'buy' }
```

Si hay una calificación promedio pública verificable, va en `REVIEW_SUMMARY` (por ejemplo `{ rating: 4.9, count: 37, source: 'Google', url: '…' }`).

La sección «Lo que dicen nuestros clientes» aparece sola en la portada en cuanto hay al menos una reseña.

**Nunca:** inventar reseñas, cambiar el sentido del texto, redondear la calificación hacia arriba o usar reseñas de otra empresa.

## 2. Fotos propias (prioridad alta)

**Qué pedir** (horizontal, mínimo 2000 px de ancho, JPG, buena luz, sin filtros):
- El equipo de LoanPro365 (grupal y retratos individuales).
- La oficina o el espacio de trabajo.
- Clientes en su casa nueva o en el cierre, **solo con permiso escrito** para uso web.
- Propiedades financiadas (fachadas), con permiso del dueño.

**Dónde van:** `apps/web/public/img/`. Reemplazan a las fotos de stock de la portada:
- `buy-family.jpg` → foto de clientes con su casa nueva.
- `refi-house.jpg` → fachada de una casa financiada.
- `biz-miami.jpg` → propiedad comercial financiada o la oficina.
- La foto del equipo puede ir en «Conócenos».

Al cambiarlas, anotar el origen en `.impeccable/media-origin.txt`.

## 3. Logo (prioridad media)

El logo oficial («LoanPro», JPG de 304×87 px con biselado) se usa tal cual por decisión del dueño. Si se aprueba actualizarlo:
- Pedir el archivo original en vector (AI, SVG o PDF) al diseñador que lo hizo.
- O aprobar una versión redibujada en SVG, fiel a los colores y proporciones del original (azul #1614B3 y grafito #4F4F4F, sin biselado).

## 4. Datos por confirmar

- Cifras «15+ años» y «98% de preaprobados cierran» (hoy marcadas con * como declaración de la empresa).
- Correo oficial (admin@ o info@), dirección física y licencia de Florida (OFR), si aplica.
- Prestamistas aliados que autoricen mostrar su logo.
