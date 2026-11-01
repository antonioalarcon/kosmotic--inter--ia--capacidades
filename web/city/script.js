'use strict';
// KosmoTIC City · Vista visual V1.2
// Mapa con accesos superpuestos sobre la imagen original de la ciudad, aportada
// y autorizada para su publicación por Antonio Alarcón (generada bajo su
// dirección con IA del ecosistema Inter-IA), y listado accesible estático.
// Ambos abren el mismo detalle de cada espacio.
// Preservación de enlaces heredados del portal (antes en /city/#ancla)
const legacyAnchors=['kosmotic','biblioteca-city','negocios-city','comunidad-city','academia-city','proyectos-city','membresias-city','inventario','principios','genesis','retos','proposito','practica','areas','mapa','contenido','academia','acceso','confianza-city','contenido-futuro','genesis-titulo','horizonte-futuro','mapa-titulo','meta-inv-clear','meta-inv-count','meta-inv-query','metacerebro','navegacion-final','participar','principios-titulo'];
if(legacyAnchors.includes(location.hash.slice(1))){location.replace('./portal/'+location.hash)}
const spaces=[
{id:'biblioteca',content:'biblioteca-city',x:50,y:19,name:'Biblioteca KosmoTIC',description:'Espacio previsto para organizar y descubrir recursos, documentos y conocimiento.'},
{id:'negocios',content:'negocios-city',x:31,y:23,name:'Centro de Negocios y Red',description:'Espacio previsto para conectar iniciativas, organizaciones y oportunidades de colaboración.'},
{id:'confianza',content:'confianza',x:21,y:41,name:'Círculo de Confianza',description:'Espacio previsto para relaciones basadas en confianza, transparencia y colaboración.'},
{id:'comunidad',content:'comunidad-city',x:50,y:51,name:'Comunidad KosmoTIC',description:'Punto de encuentro central de las personas que forman la ciudad.'},
{id:'inter-ia',content:'inter-ia',x:70,y:24,name:'Inter-IA · Laboratorio Cognitivo',description:'Espacio de presentación del laboratorio cognitivo Inter-IA, bajo supervisión humana.'},
{id:'formacion',content:'academia-city',x:88,y:27,name:'Formación y Talento',description:'Espacio previsto para aprendizaje, habilidades y desarrollo del talento.'},
{id:'comercio',x:78,y:46,name:'Comercio Local',description:'Espacio previsto para dar visibilidad al comercio y a la actividad local.'},
{id:'innovacion',content:'proyectos-city',x:85,y:64,name:'Innovación y Proyectos',description:'Espacio previsto para iniciativas y proyectos en evolución.'},
{id:'cultura',x:19,y:62,name:'Cultura y Patrimonio',description:'Espacio previsto para contenidos culturales y patrimoniales.'},
{id:'sostenibilidad',x:35,y:67,name:'Sostenibilidad y Entorno',description:'Espacio previsto para iniciativas relacionadas con el entorno y la sostenibilidad.'},
{id:'datos',x:67,y:66,name:'Datos y Resultados',description:'Espacio previsto para información y resultados verificables.'},
{id:'observatorio',x:10,y:31,name:'Observatorio SACT',description:'Espacio previsto para observación y seguimiento de cuestiones tecnológicas relevantes.'}
];
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
const detail=document.getElementById('detalle'),title=document.getElementById('detail-title'),description=document.getElementById('detail-description');
let lastTrigger=null;
function showSpace(id,trigger){
const s=spaces.find(item=>item.id===id);if(!s)return false;
if(trigger)lastTrigger=trigger;
title.textContent=s.name;description.textContent=s.description;
const cl=document.getElementById('content-link');
if(s.content){cl.href='./portal/#'+s.content;cl.hidden=false;cl.textContent='Ver contenido publicado en el portal'}else{cl.hidden=true}
detail.hidden=false;
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
b.style.left=(4+i*7.46)+'%';b.style.top='93.5%';
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
