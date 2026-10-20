# KosmoTIC · Registro Maestro

**ID:** KOS-MASTER-REGISTRY  
**Versión:** 0.1.8  
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
| KosmoWiki | Consulta y representación del conocimiento | Primera ficha publicada como Markdown |
| Observatorio | Seguimiento de cambios, fuentes y señales | Conceptual |
| Laboratorio | Experimentos y evaluación reproducible | Conceptual |
| Inter-IA | Selección, contraste y coordinación de capacidades | Base existente; ampliación pendiente |
| Transformación | Aplicación práctica de resultados | Conceptual |
| Comunidad | Participación y revisión humana | Conceptual |
| KKO | Objetos canónicos de conocimiento, con evidencia y versiones | Primer piloto validado y tres derivados publicados |
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

Los índices existentes son planes editoriales, no prueba de que todo el contenido esté ya incorporado al repositorio. La publicación de Markdown en GitHub no equivale al despliegue de una web o una plataforma educativa.

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
- **Validación CI:** [flujo GitHub Actions](.github/workflows/validacion-kko.yml) y [script Python](scripts/validate_kko.py). Revisar el estado de la CI del último commit antes de declarar validación técnica final.
- **Siguiente paso propuesto:** verificar enlaces y validación CI del piloto publicado; después evaluar generación automática de derivados desde KKO, sin introducir infraestructura adicional innecesaria.

**Criterio de cierre del paso 10:** publicación de tres archivos aprobados, enlaces cruzados y registro de la decisión, sin despliegue externo ni concesión de licencia abierta.

---

**Principio rector:** la novedad no concede privilegios; la utilidad demostrada, sí.  
**Lema de proyecto:** comprender la tecnología para construir el futuro.  
**Lema recogido en el repositorio existente:** por un futuro más justo y un mundo mejor.
