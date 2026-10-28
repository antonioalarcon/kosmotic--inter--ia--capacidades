# Arquitectura del repositorio

## Criterio principal

Separar **presentación**, **conocimiento**, **datos**, **documentación**, **integraciones**, **experimentos** y **archivo**.

Esto evita que la landing pública se convierta en la fuente maestra de todo. La web representa. GitHub versiona código, artefactos técnicos y representaciones públicas derivadas. Las normas institucionales ratificadas conservan sus fuentes canónicas en Google Drive; este repositorio no les atribuye autoridad paralela. Los datos estructurados permiten reutilización.

## Capas

### `/web`

Capa pública. Contiene la landing, estilos, JavaScript y contratos de consumo de datos.

### `/knowledge`

Conocimiento modular en Markdown. Aquí viven explicaciones, patrones, capacidades, agentes, herramientas y principios.

### `/data`

Datos estructurados reutilizables por la web, agentes, APIs o futuras automatizaciones.

### `/docs`

Arquitectura, referencias, metodología y decisiones. Es la capa de trazabilidad documental.

### `/integrations`

Base para conectores, APIs y herramientas externas autorizadas.

### `/experiments`

Pruebas controladas antes de convertir tecnología en dependencia.

### `/archive`

Histórico, versiones congeladas y elementos retirados.

## Incorporación Inter-IA · Carta Fundacional

- **Fuente institucional ratificada (Drive):** [Carta Fundacional de Propósito y Legado V1.0](https://docs.google.com/document/d/1KJZV0rvDYFz64tAVglgD0USfSJJg5zucLewa3_2kCNo/edit) (acceso restringido; esta referencia no concede acceso).
- **Ficha pública derivada:** [`docs/inter-ia/carta-fundacional-v1.0.md`](../inter-ia/carta-fundacional-v1.0.md), versión y estado explicitados.
- **Índice y trazabilidad:** [Registro Maestro](../../KOSMOTIC-MASTER-REGISTRY.md), decisión KOS-DEC-017.
- **No equivalencias:** representación ≠ fuente normativa; copia ≠ sincronización automática; inclusión en el censo ≠ conexión o permiso acreditado.

## Regla N+1

Todo elemento crítico debe poder ser consultado, actualizado, sincronizado, portado y recuperado desde más de un punto operativo.
