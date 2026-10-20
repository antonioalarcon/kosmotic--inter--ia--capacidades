---
id: KKO-IA-AGENTES-001
format_version: 0.1.0
version: 0.1.1
title: "Agentes de inteligencia artificial"
domain: artificial-intelligence
status: review
created: "2026-10-20"
updated: "2026-10-20"
human_review_required: true
publication_approved: false
audiences: [citizen, professional, technical]
course_lessons: [L10]
book_chapters: [C10]
source_refs:
  - https://www.anthropic.com/engineering/building-effective-agents
  - https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
  - https://doi.org/10.6028/NIST.AI.100-1
related_kko: []
related_kcr: []
---

# Agentes de inteligencia artificial

> **Estado: en revisión.** Se ha realizado una comprobación preliminar de coherencia, correspondencias y acceso a fuentes el 2026-10-20. Esto **no** equivale a revisión humana ni a aprobación para publicación.

## Definición

Un **agente de IA** es un sistema que, dentro de un objetivo y límites definidos, puede seleccionar pasos y utilizar herramientas para realizar acciones, observar resultados y ajustar su ejecución. Su grado de autonomía depende del diseño y de los permisos concedidos; no implica independencia ni autoridad ilimitada.

## Explicación para cualquier persona

Un chatbot principalmente responde a preguntas. Un agente puede además **hacer tareas**: consultar información, operar una aplicación o preparar un resultado mediante varios pasos, siempre que disponga de las herramientas y autorizaciones necesarias.

**Ejemplo:** para elaborar un informe de ventas, un agente autorizado puede consultar datos, calcular indicadores, redactar un borrador y solicitar revisión antes de enviarlo.

## Funcionamiento básico

`Objetivo → selección del siguiente paso → herramienta/acción → observación → evaluación → finalización o nueva acción`

No todos los sistemas requieren planificación abierta: un flujo automatizado con pasos predeterminados puede ser más simple, predecible y adecuado. La distinción entre *workflow* y *agente* depende de quién controla dinámicamente el proceso. La definición exacta de agente puede variar entre fuentes; esta ficha adopta un criterio operativo, no una taxonomía universal.

## Límites y riesgos

- Puede cometer errores, interpretar mal instrucciones o utilizar información inexacta.
- Una herramienta conectada amplía tanto la utilidad como el impacto potencial de los fallos.
- Las acciones sensibles requieren permisos mínimos, trazabilidad y puntos de aprobación humana según el riesgo.
- La evaluación debe considerar resultados, costes, seguridad y posibilidad de detener o revocar acciones.

## Relación con KosmoTIC

- **KKO:** documenta este concepto y sus fuentes; no asigna herramientas concretas.
- **KCR:** registra y evalúa capacidades operativas, sin duplicar esta definición.
- **Inter-IA:** coordina capacidades admitidas para una misión.
- **PAE / PLAC / HITL:** admisión basada en evidencia, permisos operativos y aprobación humana cuando corresponda; sus reglas detalladas siguen pendientes de formalización.

**Destinos editoriales previstos:** lección L10 de Academia y capítulo C10 del libro, según `docs/arquitectura/KOS-MAP-EDITORIAL-0.1.md`. KosmoWiki podrá mostrar una síntesis del mismo KKO. No se afirma que estos derivados ya estén generados.

## Fuentes de referencia

1. Anthropic, *Building effective agents* (2024): https://www.anthropic.com/engineering/building-effective-agents — distinción entre agentes y flujos de trabajo. Fuente accesible y revisada preliminarmente el 2026-10-20.
2. OpenAI, *A practical guide to building agents* (2026): https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/ — componentes, orquestación y controles. Fuente accesible y revisada preliminarmente el 2026-10-20.
3. NIST, *AI Risk Management Framework 1.0* (2023): https://doi.org/10.6028/NIST.AI.100-1 — gestión del riesgo de sistemas de IA; **no** es una definición específica de agente. Fuente accesible el 2026-10-20.

## Control de calidad y aprobación

- [x] Definición conceptual contrastada preliminarmente con fuentes técnicas identificadas.
- [x] Accesibilidad de las tres referencias comprobada el 2026-10-20.
- [x] Correspondencias L10/C10 comprobadas contra la matriz editorial existente.
- [x] Metadatos adaptados al contrato mínimo `schemas/kko.schema.json` (validación automática aún no implantada).
- [ ] Revisión y aprobación editorial humana del contenido.
- [ ] Validación automática del YAML contra JSON Schema en CI.
- [ ] Aprobación expresa para publicar derivados.

**Regla:** la existencia de este archivo en GitHub, incluso en estado `review`, no equivale a validación humana ni a autorización de publicación.
