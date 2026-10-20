# KosmoTIC · Registro Maestro

**ID:** KOS-MASTER-REGISTRY  
**Versión:** 0.1.1  
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
| Academia | Aprendizaje estructurado y accesible | Conceptual |
| KosmoWiki | Consulta y representación del conocimiento | Conceptual |
| Observatorio | Seguimiento de cambios, fuentes y señales | Conceptual |
| Laboratorio | Experimentos y evaluación reproducible | Conceptual |
| Inter-IA | Selección, contraste y coordinación de capacidades | Base existente; ampliación pendiente |
| Transformación | Aplicación práctica de resultados | Conceptual |
| Comunidad | Participación y revisión humana | Conceptual |
| KKO | Objetos canónicos de conocimiento, con evidencia y versiones | Esquema pendiente |
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

Las referencias a conversaciones son trazas descriptivas, no enlaces permanentes ni evidencia exportada. En una fase posterior deberán incorporarse actas o referencias verificables cuando corresponda.

## 4. Arquitectura de contenido prevista

- **Curso introductorio:** índice original de 25 lecciones.
- **Libro ampliado:** índice editorial provisional de 40 capítulos.
- **KKO:** fuente estructurada de afirmaciones, definiciones, fuentes, vigencia y relaciones.
- **Derivados:** Academia, KosmoWiki, libro, artículos y otros formatos, cada uno con estado de publicación.
- **Correspondencias:** matriz `lección ↔ capítulo ↔ KKO` pendiente de crear y validar.

Los índices existentes son planes editoriales, no prueba de que todo el contenido esté ya incorporado al repositorio.

## 5. Reglas de versionado y cambio

1. Cada decisión tendrá ID estable, fecha, responsable de aprobación, estado y referencia a su justificación.
2. Los cambios se propondrán mediante revisión de diferencias; las aprobaciones se registrarán antes de declararlos vigentes.
3. Las versiones seguirán `MAJOR.MINOR.PATCH`: incompatibilidad de contrato, ampliación compatible y corrección, respectivamente.
4. No se sobrescribirán decisiones históricas: se anotarán sustituciones, revocaciones y motivos.
5. KKO, KCR y experimentos conservarán sus propios registros y esquemas; este archivo solo los indexará.
6. Los permisos, licencias y política de publicación se resolverán explícitamente antes de distribuir nuevos materiales.

## 6. Ubicación y alcance

Este registro nace **provisionalmente** en el repositorio público `antonioalarcon/kosmotic-inter-ia-capacidades`, ya existente y accesible. Su presencia aquí **no decide** que ese repositorio sea la sede definitiva de todo KosmoTIC ni fusiona las responsabilidades de KKO y KCR. Una futura migración a un repositorio maestro requerirá decisión y trazabilidad.

## 7. Documentos y siguiente paso

- **Contrato arquitectónico v0.1 (borrador):** [`docs/arquitectura/KOS-ARCH-0.1.md`](docs/arquitectura/KOS-ARCH-0.1.md). Registrado en GitHub el 2026-10-20; pendiente de validación humana del contenido.
- **Siguiente paso propuesto (pendiente de OK):** preparar matriz de correspondencia entre las 25 lecciones y los 40 capítulos, y después pilotar `KKO-IA-AGENTES-001`.

**Criterio de cierre del paso 2:** contrato consultable en la ubicación de arquitectura existente, indexado aquí, sin duplicar el KCR ni presentar como implementadas funciones conceptuales.

---

**Principio rector:** la novedad no concede privilegios; la utilidad demostrada, sí.  
**Lema de proyecto:** comprender la tecnología para construir el futuro.  
**Lema recogido en el repositorio existente:** por un futuro más justo y un mundo mejor.
