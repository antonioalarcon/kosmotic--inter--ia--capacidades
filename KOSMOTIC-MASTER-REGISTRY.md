# KosmoTIC · Registro Maestro

**ID:** KOS-MASTER-REGISTRY  
**Versión:** 0.1.11  
**Fecha de alta:** 2026-10-20  
**Estado:** inicial · en evolución  
**Custodia inicial:** repositorio `antonioalarcon/kosmotic-inter-ia-capacidades`  

> Este archivo es el índice de decisiones y referencias del ecosistema KosmoTIC. No sustituye las especificaciones, las fuentes de evidencia ni los registros operativos especializados.

## 1. Propósito

Mantener una referencia versionada y auditable de la visión, decisiones aprobadas, propuestas pendientes, componentes y próximos pasos. Facilitar la consulta y evolución del proyecto sin depender exclusivamente del historial de conversaciones.

**Visión de trabajo:** KosmoTIC es un ecosistema vivo de conocimiento, experimentación y transformación tecnológica. Inter-IA es su arquitectura de inteligencia distribuida. El conocimiento debe ser accesible, verificable, reutilizable y gobernado por personas.

## 2. Componentes y responsabilidades (modelo conceptual)

| Componente | Función | Estado de definición |
| --- | --- | --- |
| Academia | Aprendizaje estructurado y accesible | Primera representación L10 publicada como Markdown |
| KosmoWiki | Consulta y representación del conocimiento | Primera ficha publicada como Markdown; generación de borrador automatizada y comparada |
| Observatorio | Seguimiento de cambios, fuentes y señales | Conceptual |
| Laboratorio | Experimentos y evaluación reproducible | Conceptual |
| Inter-IA | Selección, contraste y coordinación de capacidades | Base existente; ampliación pendiente |
| Transformación | Aplicación práctica de resultados | Conceptual |
| Comunidad | Participación y revisión humana | Conceptual |
| KKO | Objetos canónicos de conocimiento, con evidencia y versiones | Primer piloto validado y tres derivados publicados; controles de vínculos en CI; generación automática de borrador revisada |
| KCR | Registro vivo de capacidades, misiones y validaciones | Normalización con estructura existente pendiente |
| PAE | Admisión de tecnologías basada en utilidad demostrada | Formalización pendiente |
| PLAC | Límites, permisos y autoridad operativa | Especificación pendiente |
| HITL | Puntos de revisión y decisión humana | Reglas de implementación pendientes |

**Regla de gobierno:** ningún contenido o resultado propuesto por IA se considera conocimiento validado por el mero hecho de generarse. Los cambios canónicos requieren evidencia y revisión según el riesgo.

## 3. Registro de decisiones

| ID | Fecha | Decisión o acuerdo | Estado | Evidencia de aprobación |
| --- | --- | --- | --- | --- |
| KOS-DEC-001 | 2026-10-02 | Orientar KosmoTIC a un ecosistema vivo de conocimiento, aplicación y evolución, con Inter-IA como arquitectura de coordinación | Acuerdo conceptual expresado en la conversación del proyecto | Conversación KosmoTIC, 2026-10-02 |
| KOS-DEC-002 | 2026-10-08 | Diseñar el libro como publicación modular y versionada, vinculada a objetos de conocimiento y GitHub | Diseño propuesto; implementación no aprobada por separado | Conversación KosmoTIC, 2026-10-08 |
| KOS-DEC-003 | 2026-10-19 | Normalizar arquitectura y probar un primer KKO antes de migrar los 40 capítulos | Propuesta de siguiente fase | Conversación KosmoTIC, 2026-10-19 |
| KOS-DEC-004 | 2026-10-20 | Adoptar y registrar `KOSMOTIC-MASTER-REGISTRY.md` como referencia inicial en GitHub | Aprobado para ejecución | OK explícito en la conversación, 2026-10-20 |
| KOS-DEC-005 | 2026-10-20 | Registrar borrador del contrato arquitectónico `KOS-ARCH-0.1` en la carpeta existente de arquitectura | Escritura aprobada; contenido pendiente de validación | OK para el paso 2 en la conversación, 2026-10-20 |
| KOS-DEC-006 | 2026-10-20 | Crear matriz editorial mínima L01–L25 ↔ C01–C40, sin duplicación de contenidos | Escritura aprobada; correspondencias pendientes de validación editorial | OK para el paso 3 en la conversación, 2026-10-20 |
| KOS-DEC-007 | 2026-10-20 | Crear el piloto `KKO-IA-AGENTES-001` en la carpeta existente de conocimiento, sin duplicar KCR | Escritura ejecutada; contenido pendiente de validación humana | OK para el paso 4 en la conversación, 2026-10-20 |
| KOS-DEC-008 | 2026-10-20 | Prevalidar fuentes y correspondencias del KKO piloto y definir metadatos mínimos reutilizables | Ejecutado; revisión humana pendiente | OK para el paso 5 en la conversación, 2026-10-20 |
| KOS-DEC-009 | 2026-10-20 | Automatizar comprobación de metadatos KKO en GitHub Actions sin publicar automáticamente | Implementado; primera ejecución CI correcta; revisión humana pendiente | OK para el paso 6 en la conversación, 2026-10-20; [ejecución CI](https://github.com/antonioalarcon/kosmotic-inter-ia-capacidades/actions/runs/39355327384) |
| KOS-DEC-010 | 2026-10-20 | Preparar dictamen editorial asistido del KKO piloto, con fuentes contrastadas y recomendación de aprobación | Ejecutado; aprobación humana recibida en paso 8 | OK para iniciar el paso 7 en la conversación, 2026-10-20; [KKO](knowledge/agentes/KKO-IA-AGENTES-001.md) |
| KOS-DEC-011 | 2026-10-20 | Aprobar editorialmente KKO-IA-AGENTES-001 v0.1.3 y autorizar preparación de representaciones para Libro C10, Academia L10 y KosmoWiki, SIN autorizar su publicación | Aprobación editorial registrada en KKO v0.1.4; derivados preparados | «OK» en respuesta expresa a la solicitud del paso 8, conversación KosmoTIC, 2026-10-20 |
| KOS-DEC-012 | 2026-10-20 | Autorizar la publicación en el repositorio público de las tres representaciones aprobadas de KKO-IA-AGENTES-001 | Ejecutado: tres archivos Markdown publicados; KKO actualizado a v0.1.5 | «OK» en respuesta expresa a la pregunta del paso 10, conversación KosmoTIC, 2026-10-20 |
| KOS-DEC-013 | 2026-10-21 | Comprobar automáticamente enlaces locales y relaciones bidireccionales KKO ↔ derivados, ampliando la CI existente | Implementado; resultado de ejecución CI debe comprobarse en el último commit | «OK, el paso 11», conversación KosmoTIC, 2026-10-21; [flujo CI](.github/workflows/validacion-kko.yml) |
| KOS-DEC-014 | 2026-10-22 | Generar automáticamente una vista KosmoWiki temporal desde KKO-IA-AGENTES-001, sin commit ni publicación web automática | Implementado; primer trabajo GitHub Actions correcto; artefacto de revisión disponible 7 días | «OK paso 12», conversación KosmoTIC, 2026-10-21 (UTC); [ejecución](https://github.com/antonioalarcon/kosmotic-inter-ia-capacidades/actions/runs/39689054916) |
| KOS-DEC-015 | 2026-10-22 | Comparar vista automática con ficha KosmoWiki publicada y conservar la generación como borrador extendido, sin sustituir ni publicar automáticamente | Revisión estructural completada; no se requieren cambios de código para el piloto; validación de equivalencia editorial exhaustiva pendiente | «OK» para el paso 13, conversación KosmoTIC, 2026-10-22; [generador](scripts/generate_kko_preview.py), [ficha publicada](docs/kosmowiki/agentes-ia.md) |
| KOS-DEC-016 | 2026-10-23 | Publicar como réplica documental N+N el borrador curricular `KOS-CITY-FORM-ATG` V0.1 en `docs/academia/arquitecto-tecnologico-global/`, manteniendo Google Drive/BERO como fuente canónica; no activar sitio, matriculación ni acreditación | Ejecutado en GitHub; texto curricular conservado y metadatos YAML técnicos añadidos; CI superada | Autorización expresa de Antonio Alarcón Izquierdo ✔️ en conversación 23/10/2026; [PR #9](https://github.com/antonioalarcon/kosmotic-inter-ia-capacidades/pull/9); [fuente Drive](https://drive.google.com/file/d/1LXAy1xhRMEjcElvMHx09FxoEpaDZ2Xuu/view) |

Las referencias a conversaciones son trazas descriptivas, no enlaces permanentes ni evidencia exportada. En una fase posterior deberán incorporarse actas o referencias verificables cuando corresponda.

## 4. Arquitectura de contenido prevista

- **Curso introductorio:** índice original de 25 lecciones.
- **Libro ampliado:** índice editorial provisional de 40 capítulos.
- **KKO:** fuente estructurada de afirmaciones, definiciones, fuentes, vigencia y relaciones.
- **Derivados:** Academia, KosmoWiki, libro, artículos y otros formatos, cada uno con estado de publicación.
- **Correspondencias:** [matriz editorial v0.1](docs/arquitectura/KOS-MAP-EDITORIAL-0.1.md), registrada como borrador para revisión humana.
- **Piloto KKO:** [agentes de IA v0.1.5](knowledge/agentes/KKO-IA-AGENTES-001.md), aprobado editorialmente y con publicación de tres representaciones autorizada.
- **Derivado Libro C10:** [capítulo sobre agentes](docs/libro/C10-agentes-ia.md).
- **Derivado Academia L10:** [lección del chatbot al agente](docs/academia/L10-agentes-ia.md).
- **Derivado KosmoWiki:** [ficha agentes de IA](docs/kosmowiki/agentes-ia.md).
- **Contrato mínimo de metadatos KKO:** [`schemas/kko.schema.json`](schemas/kko.schema.json). Aplica al YAML frontmatter extraído; la comprobación automática está implantada en [GitHub Actions](.github/workflows/validacion-kko.yml) mediante [`scripts/validate_kko.py`](scripts/validate_kko.py).
- **Control de relaciones:** [`scripts/validate_kko_links.py`](scripts/validate_kko_links.py) comprueba enlaces Markdown locales, existencia de KKO de origen, vínculo de ida y vuelta y permiso de publicación en derivados; integrado en el mismo flujo de CI.
- **Generación editorial piloto:** [`scripts/generate_kko_preview.py`](scripts/generate_kko_preview.py) extrae secciones del KKO canónico y produce una ficha KosmoWiki temporal en `dist/preview/`. El [flujo de generación](.github/workflows/generar-vista-kko.yml) conserva el borrador como artefacto de Actions durante 7 días; no hace commits, despliegues ni cambios en las tres representaciones ya publicadas.
- **Comparación editorial (paso 13):** la ficha publicada es una síntesis breve basada en KKO v0.1.4; el generador toma secciones completas del KKO actual v0.1.5 y crea una vista más extensa. Comparten tema, definición operativa, riesgos, gobernanza y referencia al KKO, pero **no son textualmente equivalentes**. Diferencias esperadas: longitud, encabezados, versión de origen, fuentes desplegadas y metadatos `draft`/`published`. No se ha detectado necesidad de cambiar el generador para el piloto; la vista automática sigue siendo un borrador, no una actualización aprobada de la ficha pública. Esta es una comparación estructural de los textos y la lógica de generación, no una certificación de equivalencia semántica de todas las afirmaciones.

Los índices existentes son planes editoriales, no prueba de que todo el contenido esté ya incorporado al repositorio. La publicación de Markdown en GitHub no equivale al despliegue de una web o una plataforma educativa. El control de enlaces locales no verifica URLs externas ni exactitud científica.

## 5. Reglas de versionado y cambio

1. Cada decisión tendrá ID estable, fecha, responsable de aprobación, estado y referencia a su justificación.
2. Los cambios se propondrán mediante revisión de diferencias; las aprobaciones se registrarán antes de declararlos vigentes.
3. Las versiones seguirán `MAJOR.MINOR.PATCH`: incompatibilidad de contrato, ampliación compatible y corrección, respectivamente.
4. No se sobrescribirán decisiones históricas: se anotarán sustituciones, revocaciones y motivos.
5. KKO, KCR y experimentos conservarán sus propios registros y esquemas; este archivo solo los indexará.
6. Los permisos, licencias y política de publicación se resolverán explícitamente antes de distribuir nuevos materiales bajo licencias abiertas.

## 6. Ubicación y alcance

Este registro nace **provisionalmente** en el repositorio público `antonioalarcon/kosmotic-inter-ia-capacidades`, ya existente y accesible. Su presencia aquí **no decide** que ese repositorio sea la sede definitiva de todo KosmoTIC ni fusiona las responsabilidades de KKO y KCR. Una futura migración a un repositorio maestro requerirá decisión y trazabilidad.

## 7. Documentos y siguiente paso

- **Contrato arquitectónico v0.1 (borrador):** [`docs/arquitectura/KOS-ARCH-0.1.md`](docs/arquitectura/KOS-ARCH-0.1.md). Pendiente de validación humana.
- **Matriz editorial v0.1 (borrador):** [`docs/arquitectura/KOS-MAP-EDITORIAL-0.1.md`](docs/arquitectura/KOS-MAP-EDITORIAL-0.1.md). Correspondencias de 25 lecciones y 40 capítulos; pendiente de validación humana.
- **Piloto KKO v0.1.5:** [`knowledge/agentes/KKO-IA-AGENTES-001.md`](knowledge/agentes/KKO-IA-AGENTES-001.md). Contenido editorial aprobado y derivados publicados en GitHub.
- **Representaciones públicas:** [Libro C10](docs/libro/C10-agentes-ia.md), [Academia L10](docs/academia/L10-agentes-ia.md) y [KosmoWiki](docs/kosmowiki/agentes-ia.md).
- **Contrato mínimo KKO:** [`schemas/kko.schema.json`](schemas/kko.schema.json). Estructura de metadatos, no validación científica.
- **Validación CI:** [flujo GitHub Actions](.github/workflows/validacion-kko.yml), [metadatos](scripts/validate_kko.py) y [enlaces/trazabilidad](scripts/validate_kko_links.py). Consultar la [ejecución del paso 11](https://github.com/antonioalarcon/kosmotic-inter-ia-capacidades/actions/runs/39630733190) antes de declarar el cierre técnico.
- **Generación automática de borrador (paso 12):** [script](scripts/generate_kko_preview.py), [flujo](.github/workflows/generar-vista-kko.yml) y [ejecución correcta](https://github.com/antonioalarcon/kosmotic-inter-ia-capacidades/actions/runs/39689054916). Solo produce un artefacto temporal para revisión, no publica una nueva ficha.
- **Resultado paso 13:** revisión estructural del borrador frente a la ficha pública; se mantiene el generador y el control humano. No se altera la ficha publicada ni se crean nuevos derivados.
- **Siguiente paso propuesto (14):** probar el mismo generador con un segundo KKO, para comprobar reutilización antes de automatizar más formatos. Requiere nueva aprobación humana; no hay autorización para publicación automática.

**Criterio de cierre del paso 13:** comparación documentada, decisión de mantener una vista extendida como borrador, sin cambios en el contenido canónico ni en publicaciones existentes.

---

**Principio rector:** la novedad no concede privilegios; la utilidad demostrada, sí.  
**Lema de proyecto:** comprender la tecnología para construir el futuro.  
**Lema recogido en el repositorio existente:** por un futuro más justo y un mundo mejor.
