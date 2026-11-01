'use strict';
// KosmoTIC City · Vista visual V1.2
// Mapa con accesos superpuestos sobre la imagen de la ciudad (adaptación generada
// por Instinct a partir de la referencia aportada por Antonio Alarcón) y listado
// accesible estático. Ambos abren el mismo detalle de cada espacio.
const spaces=[
{id:'biblioteca',x:49,y:18,name:'Biblioteca KosmoTIC',description:'Espacio previsto para organizar y descubrir recursos, documentos y conocimiento.'},
{id:'negocios',x:29,y:22,name:'Centro de Negocios y Red',description:'Espacio previsto para conectar iniciativas, organizaciones y oportunidades de colaboración.'},
{id:'confianza',x:22,y:38,name:'Círculo de Confianza',description:'Espacio previsto para relaciones basadas en confianza, transparencia y colaboración.'},
{id:'comunidad',x:50,y:49,name:'Comunidad KosmoTIC',description:'Punto de encuentro central de las personas que forman la ciudad.'},
{id:'inter-ia',x:70,y:22,name:'Inter-IA · Laboratorio Cognitivo',description:'Espacio de presentación del laboratorio cognitivo Inter-IA, bajo supervisión humana.'},
{id:'formacion',x:89,y:24,name:'Formación y Talento',description:'Espacio previsto para aprendizaje, habilidades y desarrollo del talento.'},
{id:'comercio',x:77,y:41,name:'Comercio Local',description:'Espacio previsto para dar visibilidad al comercio y a la actividad local.'},
{id:'innovacion',x:87,y:59,name:'Innovación y Proyectos',description:'Espacio previsto para iniciativas y proyectos en evolución.'},
{id:'cultura',x:18,y:61,name:'Cultura y Patrimonio',description:'Espacio previsto para contenidos culturales y patrimoniales.'},
{id:'sostenibilidad',x:35,y:63,name:'Sostenibilidad y Entorno',description:'Espacio previsto para iniciativas relacionadas con el entorno y la sostenibilidad.'},
{id:'datos',x:66,y:62,name:'Datos y Resultados',description:'Espacio previsto para información y resultados verificables.'},
{id:'observatorio',x:10,y:34,name:'Observatorio SACT',description:'Espacio previsto para observación y seguimiento de cuestiones tecnológicas relevantes.'}
];
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
const detail=document.getElementById('detalle'),title=document.getElementById('detail-title'),description=document.getElementById('detail-description');
let lastTrigger=null;
function showSpace(id,trigger){
const s=spaces.find(item=>item.id===id);if(!s)return false;
if(trigger)lastTrigger=trigger;
title.textContent=s.name;description.textContent=s.description;detail.hidden=false;
try{history.replaceState(null,'','#'+s.id)}catch(e){}
detail.scrollIntoView({block:'start',behavior:reduced()?'instant':'smooth'});
detail.focus({preventScroll:true});
return true}
function closeDetail(){
detail.hidden=true;
try{history.replaceState(null,'','#espacios')}catch(e){}
document.getElementById('spaces-title').scrollIntoView({behavior:reduced()?'instant':'smooth'});
const back=lastTrigger&&document.contains(lastTrigger)?lastTrigger:document.querySelector('.space-link');
back.focus({preventScroll:true})}
// Si la imagen no está disponible (p. ej. pendiente de acreditación), ocultar el mapa
const img=document.querySelector('#mapa-visual img');
function imageFailed(){document.getElementById('mapa-visual').hidden=true;document.getElementById('mapa-pendiente').hidden=false}
if(img){if(img.complete&&img.naturalWidth===0)imageFailed();else img.addEventListener('error',imageFailed)}
// Accesos del mapa (mejora progresiva sobre la imagen)
const hotspots=document.getElementById('hotspots');
if(hotspots){for(const s of spaces){const b=document.createElement('button');b.type='button';b.className='hotspot';b.style.left=s.x+'%';b.style.top=s.y+'%';b.textContent=s.name;b.setAttribute('aria-label','Explorar '+s.name);b.addEventListener('click',()=>showSpace(s.id,b));hotspots.append(b)}}
// Barra inferior: Inicio + 12 accesos, mismos destinos que el listado
const iconmenu=document.getElementById('iconmenu');
if(iconmenu){
const order=[{id:null,name:'Inicio'},...spaces];
order.forEach((sp,i)=>{
const b=document.createElement('button');b.type='button';b.className='iconlink';
b.style.left=(4+i*7.46)+'%';b.style.top='95.5%';
if(sp.id){b.setAttribute('aria-label','Explorar '+sp.name);b.addEventListener('click',()=>showSpace(sp.id,b))}
else{b.setAttribute('aria-label','Ir al inicio de la ciudad');b.addEventListener('click',()=>{detail.hidden=true;try{history.replaceState(null,'','#inicio')}catch(e){};window.scrollTo({top:0,behavior:reduced()?'instant':'smooth'});document.querySelector('.brand').focus({preventScroll:true})})}
iconmenu.append(b)})}
// Listado estático: los enlaces fijan el marcador; el detalle se abre con hashchange
for(const a of document.querySelectorAll('.space-link')){a.addEventListener('click',()=>{lastTrigger=a})}
document.getElementById('close-detail').addEventListener('click',closeDetail);
document.querySelector('.return').addEventListener('click',ev=>{ev.preventDefault();closeDetail()});
function openFromHash(){const id=decodeURIComponent(location.hash.slice(1));if(spaces.some(s=>s.id===id))showSpace(id)}
window.addEventListener('hashchange',openFromHash);
openFromHash();
