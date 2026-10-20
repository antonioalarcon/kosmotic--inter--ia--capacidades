---
id: KKO-IA-AGENTES-001
format_version: 0.1.0
version: 0.1.3
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

> **Estado: en revisión.** La validación técnica y la revisión editorial asistida no equivalen a aprobación humana ni a autorización de publicación.

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

1. Anthropic, *Building effective agents* (2024): https://www.anthropic.com/engineering/building-effective-agents — distinción entre agentes y flujos de trabajo. Fuente revisada el 2026-10-20; el propio artículo advierte que parte de las herramientas descritas han evolucionado desde 2024.
2. OpenAI, *A practical guide to building agents* (2026): https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/ — componentes, orquestación y controles. Fuente revisada el 2026-10-20.
3. NIST, *AI Risk Management Framework 1.0* (2023): https://doi.org/10.6028/NIST.AI.100-1 — gestión del riesgo de sistemas de IA; **no** es una definición específica de agente. La publicación original está confirmada en NIST y el marco 1.0 se encuentra en proceso de revisión a fecha 2026-10-20.

## Dictamen editorial asistido · 2026-10-20

**Recomendación:** apto para someter a aprobación humana como objeto piloto introductorio; no se han detectado contradicciones conceptuales relevantes en el alcance de esta ficha. La revisión no constituye auditoría científica exhaustiva ni valida su aplicación a entornos críticos.

- [x] Definición comprensible para público general y compatible con fuentes consultadas.
- [x] Diferencia entre agentes y flujos de trabajo expresada sin absolutismos.
- [x] Ejemplo práctico, riesgos, límites y relaciones KKO/KCR/Inter-IA incluidos.
- [x] Fuentes técnicas y de gestión de riesgos identificadas; advertencias de vigencia incorporadas.
- [x] Correspondencias L10/C10 y contrato mínimo de metadatos revisados preliminarmente.
- [x] Validación automática de metadatos en CI completada en la versión anterior: [ejecución](https://github.com/antonioalarcon/kosmotic-inter-ia-capacidades/actions/runs/39355327384). Esta edición requiere su propia comprobación CI.
- [ ] Aprobación editorial humana expresa de esta versión.
- [ ] Autorización humana expresa para generar/publicar derivados.

**Regla:** el contenido permanece en `status: review` y `publication_approved: false` hasta registrar ambas decisiones; una revisión asistida por IA no se presenta como revisión humana.
