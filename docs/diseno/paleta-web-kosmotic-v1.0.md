# KosmoTIC · Sistema cromático y reglas visuales web V1.0

**Referencia:** KOS-WEB-CROMATICA-20261101-V1.0  
**Fecha:** 01/11/2026  
**Estado:** Propuesta aplicada en rama de diseño; pendiente revisión y aprobación para publicar  
**Fuente visual:** KOS-WEB-FUENTES-VISUALES-20261101-V0.1 (registro en 00_KOSMOTIC_SYSTEM; imágenes originales y vídeos bajo identificación/revisión)  
**Ámbito:** web pública KosmoTIC / Inter-IA / KosmoTIC City. No sustituye la paleta del personaje Kosmo ni los documentos institucionales en Drive.

## Paleta fija
| Token | HEX | Función |
|---|---|---|
| azul-profundo | #07162D | Base, confianza, fondos |
| azul-electrico | #143D8D | Tecnología, paneles |
| cian-luminoso | #16D9F0 | Conexión, IA, acciones |
| turquesa | #28C9A3 | Evolución, equilibrio |
| violeta | #7444C5 | Conocimiento |
| magenta | #D946B6 | Creatividad |
| ambar | #FFAD62 | Humano, energía |
| claro | #F4F7FB | Texto sobre oscuro y fondos claros |
| aguamarina-neon | #00E6FF | Transiciones y flujo |
| lavanda-luminosa | #8A6FFF | Armonía y puentes |

## Normas
1. Sobre fondos oscuros: titulares y texto principal #F4F7FB, nunca negro. Sobre fondos claros: #07162D; secundarios #143D8D.
2. En botones cian, usar #07162D; botones oscuros, #F4F7FB. Verificar WCAG AA para texto normal (4.5:1) y grande (3:1); no confiar en el nombre del color.
3. Mantener la jerarquía semántica de GitHub: origen humano → KosmoTIC → Inter-IA → KosmoTIC City. No presentar áreas en obras como servicios activos ni referencias inventariadas como homologadas.
4. Escala tipográfica fluida con clamp(), rejillas adaptables, saltos sin recortes, controles táctiles de al menos 44 px y sin desplazamiento horizontal.
5. Gráficas orbitales, trayectorias de ida y vuelta, microinteracciones y fotografía tenue donde aporte contexto; respetar prefers-reduced-motion. No animar texto esencial.
6. Fotografía protagonista en portadas; fotografías atenuadas en áreas de lectura; overlays sólidos suficientes para garantizar contraste.
7. Fuentes visuales originales: no publicar ni dar por licenciadas fotografías o vídeos sin identificación, derechos y aprobación.
8. Validar en iPhone, Android, iPad y escritorio antes de fusionar. No hay validación física documentada.
9. Versionar cada cambio de identidad visual; los cambios de producción requieren revisión humana.

## Implantación técnica
- `web/css/kosmotic-palette.css`: tokens y reglas reutilizables.
- `web/css/styles.css`: incorpora la hoja de paleta y ajusta el diseño de Capacidades.
- `web/city/index.html`: incorpora la hoja de paleta y aplica contraste/tokens a City.
- Rama aislada: `design/paleta-kosmotic-web-20261101`. No fusionar automáticamente.
