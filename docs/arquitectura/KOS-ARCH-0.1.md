# KOS-ARCH-0.1 · Contrato arquitectónico mínimo

- **ID:** KOS-ARCH-0.1
- **Fecha:** 2026-10-20
- **Versión:** 0.1.0
- **Estado:** borrador registrado; pendiente de validación de contenido
- **Ámbito:** KosmoTIC, Inter-IA y sus interfaces; no sustituye los registros existentes.

## 1. Regla maestra

**Una responsabilidad, una fuente de referencia, múltiples representaciones.** La IA puede proponer cambios, pero no convertir por sí sola propuestas en conocimiento o decisiones aprobadas.

## 2. Componentes y límites

| Componente | Responsabilidad | No debe duplicar |
| --- | --- | --- |
| **KKO** (Knowledge Object) | Definiciones, afirmaciones, evidencia, fuentes, relaciones, vigencia y versiones del conocimiento | Catálogo operativo de herramientas |
| **KCR** (Capability Registry) | Capacidades, candidatos, pruebas, asignaciones, costes, permisos y revisiones | Contenido editorial del KKO |
| **Inter-IA** | Coordinar selección, contraste y ejecución de modelos/agentes según necesidad y permisos | Autoridad humana de aprobación |
| **PAE** | Evaluar admisión o retirada de capacidades según utilidad demostrada | Conceder permisos de ejecución |
| **PLAC** | Delimitar autoridad, permisos, prohibiciones y revocación de acciones | Sustituir revisión humana |
| **HITL** | Establecer y documentar aprobaciones humanas en puntos críticos | Validación automática de formatos |

PAE, PLAC y HITL son controles transversales. Sus especificaciones operativas detalladas están pendientes; este documento no afirma que ya estén implementados.

## 3. Contratos de referencia

- Cada KKO y cada capacidad KCR tendrá un **ID estable**, versión, estado, fecha de revisión y referencias de evidencia.
- Los KKO podrán **referenciar IDs de KCR**, sin copiar sus fichas. El KCR podrá enlazar los KKO que fundamenten su evaluación.
- Inter-IA **consulta KCR** para identificar capacidades admisibles y **consulta KKO/fuentes** para fundamentar respuestas; registra la misión y su resultado.
- PAE determina la **admisión evaluada**; PLAC determina **qué acciones están permitidas**; HITL determina **quién debe aprobarlas**.
- Ningún cambio de conocimiento canónico ni acción de alto impacto se publica o ejecuta sin los controles aplicables y trazabilidad.

## 4. Flujo mínimo verificable

`Necesidad → función → candidato KCR → experimento → evidencia → decisión PAE → permisos PLAC → ejecución Inter-IA (HITL cuando proceda) → resultado → revisión KKO/KCR → publicación aprobada`

La publicación del libro, Academia y KosmoWiki consume versiones **validadas** de KKO; los derivados indican qué versión utilizan.

## 5. Ubicación y relación con GitHub

- **Registro maestro:** [`../../KOSMOTIC-MASTER-REGISTRY.md`](../../KOSMOTIC-MASTER-REGISTRY.md).
- **Contrato arquitectónico:** este documento en `docs/arquitectura/`.
- **KCR existente:** se conserva en la estructura actual de este repositorio; no se crea un segundo registro.
- **Futuro KKO y libro:** ubicación definitiva pendiente de aprobación; este repositorio es custodia provisional del contrato, no necesariamente sede permanente del conocimiento.

## 6. Criterio de aceptación del piloto

El piloto `KKO-IA-AGENTES-001` debe demostrar: **una definición con fuente y versión → validación humana → dos representaciones coherentes (libro y Academia/KosmoWiki) → cambio trazable sin duplicación manual**.

## 7. Próximo paso propuesto

Preparar una **matriz mínima de equivalencias** entre las 25 lecciones originales y los 40 capítulos editoriales. Requiere OK antes de ejecutarse.

---

**Principio PAE:** la novedad no concede privilegios; la utilidad demostrada, sí.
