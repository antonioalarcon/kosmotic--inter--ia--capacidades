# CHANGELOG

## 2026-10-29 · KosmoTIC City: estados exactos, funciones transversales, retos AUTI y biblioteca transversal (borrador en PR #16, sin publicación)

- `web/city/index.html`: taxonomía de contenido unificada a los cuatro estados exactos (Disponible / En investigación o experimentación / En preparación / 🚧 En obras), con leyenda visible y distinción frente al eje de evidencia (inventariada / probada / homologada).
- Nueva sección `#principios` con las siete funciones transversales (identidad, soberanía digital, gobernanza, observatorio, resiliencia, memoria y legado) como marco del ecosistema, sin presentarlas como servicios; solo se enlazan derivados públicos verificados.
- Nueva subárea `#retos` en Academia con la ficha AUTI-F001 («Evalúa tu propio ordenador», programa AUTI V1.1) marcada En preparación: estructura funcional sin contenido, equipos ni resultados inventados.
- Tarjeta de Biblioteca convertida en índice transversal con estados por elemento, sin duplicar fuentes canónicas.
- Buscador del inventario: el número canónico de cada referencia (01–24) permanece visible al filtrar (corrección de la renumeración detectada el 26/10).
- Navegación: enlace «Transversal» y «↑ Volver al inicio» permanente en el pie.
- `scripts/check-city.cjs`: nuevas comprobaciones de numeración canónica al filtrar, presencia de los cuatro estados exactos, ausencia del marcador de obras anterior y existencia de las secciones nuevas; se conservan las comprobaciones previas (24 referencias, sin desborde horizontal, anclas, IDs, búsqueda con tildes, reflow 200 %, fallback sin JS).
- Sin fusión en main, sin despliegue, sin cambios de permisos ni de Drive. Los cuatro estados aplicados son los autorizados por la orden operativa 02. Nota editorial: el marcador 👷🏽‍♂️🏗️⚒️ se sustituye por 🚧 En obras en toda la página.

---

## 2026-10-23 · Réplica documental N+N de formación (sin cambio de versión de plataforma)

- Integrado el borrador curricular `KOS-CITY-FORM-ATG` V0.1 en `docs/academia/arquitecto-tecnologico-global/`, con metadatos YAML para validación.
- El contenido curricular coincide con el original de Google Drive (BERO); los metadatos son exclusivos de su representación técnica GitHub.
- Revisión [PR #9](https://github.com/antonioalarcon/kosmotic-inter-ia-capacidades/pull/9), validación automática correcta y registro de decisión `KOS-DEC-016`.
- No se habilita portal, academia pública operativa, matrícula ni acreditación; no hay sincronización automática.

---


## v0.2 · Estructural · 2026-10-06

Estado: **ESTRUCTURA DE GOBERNANZA Y VALIDACIÓN**

### Añadido

- `.github/` con plantillas de issues, pull requests y workflow de validación JSON.
- `schemas/` con contratos para capacidades, herramientas, enlaces y fuentes.
- `meta/` con visión, roadmap, principios y glosario.
- `knowledge/protocolos/` y `knowledge/gobernanza/`.
- ADR-0003: arquitectura capability-centric.
- ADR-0004: evidencia como entidad de primer nivel.

### Decisiones

- No clasificar físicamente capacidades como humanas/IA/híbridas en esta fase.
- No organizar herramientas físicamente por proveedor.
- No crear `registry/` hasta definir una frontera clara con `data/`.
- Mantener los datos actuales en colecciones JSON con schemas compatibles con su envolvente real.
- Verificar CI antes de activar GitHub Pages.

---


## v0.1 · Canónica · 2026-10-06

Estado: **BASE PÚBLICA · EN EVOLUCIÓN**

### Añadido

- Base pública del repositorio `kosmotic-inter-ia-capacidades`.
- README canónico con propósito, principios y estructura.
- Capa `web/` para landing inicial.
- Capa `knowledge/` para conocimiento modular.
- Capa `data/` para datos estructurados reutilizables.
- Capa `docs/` para arquitectura, referencias y decisiones.
- Capa `integrations/` para conectores, APIs y herramientas externas.
- Capa `experiments/` para pruebas controladas.
- Capa `archive/` para histórico y versiones congeladas.

### Criterio rector

No integrar tecnología por acumulación. Cada componente debe justificar su existencia por valor neto, trazabilidad, reversibilidad y contribución real.
