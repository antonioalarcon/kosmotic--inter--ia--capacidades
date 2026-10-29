// Pruebas automáticas de la navegación global (PR #20).
// Uso: node tests/navegacion-global.test.mjs   (sin dependencias; Node 18+)
// Verifica estructura de accesos, destinos reales y patrones de estilo
// introducidos por la actuación de navegación de 29/10/2026.
import { readFileSync } from 'node:fs';

let fallos = 0;
function ok(cond, nombre) {
  console.log((cond ? 'PASS ' : 'FAIL ') + nombre);
  if (!cond) fallos++;
}
const leer = (p) => readFileSync(new URL('../' + p, import.meta.url), 'utf8');
const idsDe = (html) => new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
const hrefsDe = (html, sel) => [...html.matchAll(sel)].map(m => m[1]);

// --- Portada ---
const portada = leer('web/index.html');
const navsPortada = [...portada.matchAll(/<nav class="actions" aria-label="([^"]+)">/g)].map(m => m[1]);
ok(navsPortada.length === 2, 'portada: dos filas de accesos (inicio y final)');
ok(navsPortada[0] !== navsPortada[1], 'portada: aria-labels distinguibles para lector de pantalla');
const ctasPortada = hrefsDe(portada, /<a class="cta" href="([^"]+)"/g);
ok(ctasPortada.length === 6, 'portada: seis accesos .cta (3+3)');
ok(JSON.stringify(ctasPortada.slice(0, 3)) === JSON.stringify(ctasPortada.slice(3)), 'portada: la fila final repite la superior');

// --- City ---
const city = leer('web/city/index.html');
ok(city.includes('href="../index.html">← Capacidades</a>'), 'city: retorno a la portada general en el menú superior');
ok(/@media\(min-width:801px\)\{[^}]*\.mast\{position:sticky;top:0/.test(city), 'city: cabecera fija solo desde 801px');
ok(/\[id\]\{scroll-margin-top:/.test(city), 'city: margen de anclaje para no tapar destinos');
ok(city.includes('id="navegacion-final"'), 'city: sección de navegación final presente');
const finCity = city.slice(city.indexOf('id="navegacion-final"'));
const ctasCity = [...finCity.matchAll(/<a class="cta secondary" href="([^"]+)">([^<]+)<\/a>/g)].map(m => m[1] + '|' + m[2]);
const heroCity = city.slice(city.indexOf('class="hero"'), city.indexOf('class="hero"') + 2000);
const heroCtas = [...heroCity.matchAll(/<a class="(cta[^"]*)" href="#/g)].map(m => m[1]);
ok(heroCtas.length >= 2 && new Set(heroCtas).size === 1, 'city: botones de entrada del héroe con tratamiento visual y funcional idéntico');
ok(JSON.stringify(ctasCity) === JSON.stringify([
  '../index.html|← Volver a capacidades', '#inicio|Inicio', '#kosmotic|KosmoTIC', '#inter-ia|Inter-IA'
]), 'city: fila final equivalente con cuatro recuadros homogéneos y etiquetas inequívocas');

// Todos los destinos internos de city existen como id
const idsCity = idsDe(city);
const anclasCity = new Set(hrefsDe(city, /href="#([^"]+)"/g));
for (const a of anclasCity) ok(idsCity.has(a), 'city: destino real de ancla #' + a);

// Los destinos de la portada hacia city existen en city
for (const a of ctasPortada) {
  const m = a.match(/^city\/#(.+)$/);
  if (m) ok(idsCity.has(m[1]), 'portada→city: destino real del ancla #' + m[1]);
}

// --- Sistema gráfico ---
const sg = leer('web/sistema-grafico.html');
ok(/<nav class="actions" aria-label="Navegación final">\s*<a class="cta" href="index.html">← Volver a capacidades<\/a>/.test(sg), 'sistema gráfico: recuadro de regreso al final');

// --- Estilos comunes ---
const css = leer('web/css/styles.css');
ok(/\.actions \{ display: flex/.test(css), 'css: patrón común .actions');
ok(/\.cta:focus-visible \{\s*outline: 3px/.test(css), 'css: foco visible de 3px');
ok(/@media \(max-width: 560px\)[\s\S]*\.actions \{ flex-direction: column/.test(css), 'css: apilado a ancho completo en móvil');

console.log(fallos === 0 ? '\nTODAS LAS PRUEBAS PASAN' : '\n' + fallos + ' PRUEBAS FALLAN');
process.exit(fallos === 0 ? 0 : 1);
