---
id: KKO-IA-AGENTES-001
format_version: 0.1.0
version: 0.1.0
title: "Agentes de inteligencia artificial"
domain: artificial-intelligence
status: draft
created: 2026-10-20
updated: 2026-10-20
human_review_required: true
publication_approved: false
audiences: [citizen, professional, technical]
course_lessons: [L10]
book_chapters: [C10]
related_kko: []
related_kcr: []
---

# Agentes de inteligencia artificial

> **Estado:** borrador de conocimiento. Las fuentes están identificadas; falta revisión humana antes de tratarlo como contenido validado o publicarlo en derivados.

## Definición

Un **agente de IA** es un sistema que, dentro de un objetivo y límites definidos, puede seleccionar pasos y utilizar herramientas para realizar acciones, observar resultados y ajustar su ejecución. Su grado de autonomía depende del diseño y de los permisos concedidos; no implica independencia ni autoridad ilimitada.

## Explicación para cualquier persona

Un chatbot principalmente responde a preguntas. Un agente puede además **hacer tareas**: consultar información, operar una aplicación o preparar un resultado mediante varios pasos, siempre que disponga de las herramientas y autorizaciones necesarias.

**Ejemplo:** para elaborar un informe de ventas, un agente autorizado puede consultar datos, calcular indicadores, redactar un borrador y solicitar revisión antes de enviarlo.

## Funcionamiento básico

`Objetivo → planificación o selección del siguiente paso → herramienta/acción → observación → evaluación → finalización o nueva acción`

No todos los sistemas requieren planificación abierta: un flujo automatizado con pasos predeterminados puede ser más simple, predecible y adecuado. La distinción entre *workflow* y *agente* depende de quién controla dinámicamente el proceso.

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

**Destinos editoriales previstos:** Lección L10 de Academia y capítulo C10 del libro. KosmoWiki podrá mostrar una síntesis del mismo KKO. No se afirma que estos derivados ya estén generados.

## Fuentes de referencia

1. Anthropic, *Building effective agents* (2024): https://www.anthropic.com/engineering/building-effective-agents — distinción entre agentes y flujos de trabajo.
2. OpenAI, *A practical guide to building agents* (2026): https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/ — componentes, orquestación y controles.
3. NIST, *AI Risk Management Framework 1.0* (2023): https://doi.org/10.6028/NIST.AI.100-1 — gestión del riesgo de sistemas de IA (no es una definición específica de agente).

## Validación pendiente

- [ ] Revisión conceptual y editorial humana.
- [ ] Confirmación de enlaces y correspondencias con la matriz editorial.
- [ ] Aprobación para generar derivados desde esta versión.
- [ ] Definición posterior del esquema formal KKO y su validación automática.

**Regla:** la existencia de este archivo en GitHub no equivale a aprobación de publicación.
