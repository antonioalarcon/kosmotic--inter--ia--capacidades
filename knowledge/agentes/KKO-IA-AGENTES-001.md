---
id: KKO-IA-AGENTES-001
format_version: 0.1.0
version: 0.1.5
title: "Agentes de inteligencia artificial"
domain: artificial-intelligence
status: validated
created: "2026-10-20"
updated: "2026-10-20"
human_review_required: true
publication_approved: true
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

> **Estado: validado editorialmente y autorizada la publicación de sus tres derivados el 2026-10-20.** El KKO es la fuente canónica; su autorización no se extiende automáticamente a derivados futuros ni a un despliegue web externo.

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

## Representaciones publicadas

Las siguientes representaciones derivan del contenido editorial aprobado en la versión **0.1.4**; esta versión **0.1.5** incorpora exclusivamente la autorización y los enlaces de publicación:

- [Libro · Capítulo C10](../../docs/libro/C10-agentes-ia.md)
- [Academia · Lección L10](../../docs/academia/L10-agentes-ia.md)
- [KosmoWiki · Agentes de IA](../../docs/kosmowiki/agentes-ia.md)

Publicación autorizada por «OK» en respuesta a la pregunta expresa del paso 10 de la conversación KosmoTIC, 2026-10-20. Se publican archivos en el repositorio público de GitHub, no una web independiente. La licencia de reutilización permanece pendiente de decisión formal.

## Fuentes de referencia

1. Anthropic, *Building effective agents* (2024): https://www.anthropic.com/engineering/building-effective-agents — distinción entre agentes y flujos de trabajo. Fuente revisada el 2026-10-20; el propio artículo advierte que parte de las herramientas descritas han evolucionado desde 2024.
2. OpenAI, *A practical guide to building agents* (2026): https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/ — componentes, orquestación y controles. Fuente revisada el 2026-10-20.
3. NIST, *AI Risk Management Framework 1.0* (2023): https://doi.org/10.6028/NIST.AI.100-1 — gestión del riesgo de sistemas de IA; **no** es una definición específica de agente. La publicación original está confirmada en NIST y el marco 1.0 se encuentra en proceso de revisión a fecha 2026-10-20.

## Dictamen editorial y aprobación · 2026-10-20

**Dictamen asistido:** apto para uso introductorio; no equivale a auditoría científica exhaustiva ni valida su aplicación a entornos críticos.

- [x] Definición comprensible y compatible con las fuentes identificadas.
- [x] Diferencia entre agentes y flujos de trabajo sin absolutismos.
- [x] Ejemplo práctico, riesgos y relaciones KKO/KCR/Inter-IA.
- [x] Fuentes y advertencias de vigencia documentadas.
- [x] Correspondencias L10/C10 revisadas preliminarmente.
- [x] Aprobación editorial humana expresa de la versión 0.1.3 mediante «OK» en el paso 8, registrada en v0.1.4.
- [x] Autorización humana expresa de publicación de las tres representaciones mediante «OK» en el paso 10, registrada en v0.1.5.

**Regla:** cualquier nuevo derivado, despliegue externo o ampliación de permisos exige una decisión independiente conforme a la gobernanza aplicable.
