---
id: KKO-IA-LLM-001
format_version: 0.1.0
version: 0.1.1
title: "Modelos de lenguaje de gran tamaño (LLM)"
domain: artificial-intelligence
status: review
created: "2026-10-22"
updated: "2026-10-25"
human_review_required: true
publication_approved: false
audiences: [citizen, professional, technical]
course_lessons: [L05]
book_chapters: [C05]
source_refs:
  - https://arxiv.org/abs/1706.03762
  - https://arxiv.org/abs/2005.14165
  - https://arxiv.org/abs/2108.07258
related_kko:
  - KKO-IA-AGENTES-001
related_kcr: []
---

# Modelos de lenguaje de gran tamaño (LLM)

> **Piloto del paso 16. Estado: en revisión editorial humana.** El archivo es visible en el repositorio público, pero no está aprobado como contenido editorial definitivo ni autorizado para generar publicaciones derivadas o desplegar una web.

## Definición

Un **modelo de lenguaje de gran tamaño** (LLM) es un modelo de aprendizaje automático entrenado con grandes colecciones de texto y, en algunos casos, otros tipos de datos, para procesar y generar lenguaje. Muchos LLM generativos producen texto prediciendo sucesivamente *tokens* condicionados por el contexto; no todos los modelos de lenguaje emplean exactamente ese mecanismo.

## Explicación para cualquier persona

Un LLM puede redactar, resumir, traducir y ayudar a programar porque aprende regularidades y relaciones complejas durante su entrenamiento. Puede resolver ciertas tareas de razonamiento, pero su rendimiento varía según la tarea y no garantiza que los datos sean ciertos o estén actualizados.

**Ejemplo:** puede explicar un contrato en lenguaje sencillo, pero las cláusulas importantes deben comprobarse en el documento original y, cuando corresponda, por un profesional.

## Funcionamiento básico

En un LLM generativo autorregresivo típico:

`Texto de entrada → tokens → representaciones numéricas → procesamiento del contexto → predicción del siguiente token → respuesta`

La arquitectura *Transformer* introdujo mecanismos de atención que son fundamentales para muchos LLM modernos. El preentrenamiento y el postentrenamiento influyen en el comportamiento del modelo. Las herramientas externas y la recuperación de documentos pueden ampliar las capacidades del **sistema** que utiliza el LLM, pero no equivalen por sí mismas a modificar sus parámetros. No todos los modelos comparten exactamente la misma arquitectura ni las mismas capacidades.

## Límites y riesgos

- Puede producir afirmaciones incorrectas o referencias inexistentes.
- Su comportamiento depende de datos, entrenamiento, instrucciones y contexto.
- Puede reproducir sesgos y exponer información si se usa sin controles adecuados.
- La evaluación debe distinguir calidad lingüística, exactitud factual, seguridad y adecuación a la tarea.

## Relación con KosmoTIC

- **KKO:** mantiene la definición y las referencias conceptuales del LLM.
- **KCR:** evalúa capacidades de modelos concretos para misiones; no duplica la definición.
- **Inter-IA:** selecciona y coordina capacidades según evidencia, coste y permisos.
- **PAE / PLAC / HITL:** admisión, límites operativos y revisión humana cuando corresponda.

## Fuentes de referencia

1. Vaswani et al., *Attention Is All You Need* (2017): https://arxiv.org/abs/1706.03762 — propuesta original de la arquitectura Transformer.
2. Brown et al., *Language Models are Few-Shot Learners* (2020): https://arxiv.org/abs/2005.14165 — ejemplo de modelado generativo autorregresivo a gran escala y aprendizaje con pocos ejemplos.
3. Bommasani et al., *On the Opportunities and Risks of Foundation Models* (2021): https://arxiv.org/abs/2108.07258 — capacidades, riesgos y contexto de los modelos fundacionales, categoría más amplia que los LLM.

## Control editorial · paso 16 (2026-10-25)

- [x] Revisión conceptual asistida: precisada la diferencia entre LLM y sistema con herramientas; evitadas generalizaciones sobre predicción de tokens y razonamiento.
- [x] Comprobación bibliográfica asistida: los tres enlaces identifican los trabajos citados y sus resúmenes respaldan los temas atribuidos. No constituye auditoría científica exhaustiva.
- [ ] Aprobación editorial humana para pasar de `review` a `validated`.
- [ ] Autorización separada de cualquier representación derivada o despliegue web.

**Alcance del piloto:** L05 ↔ C05. El generador puede crear una vista temporal de revisión sin modificar `docs/` ni desplegar una web.
