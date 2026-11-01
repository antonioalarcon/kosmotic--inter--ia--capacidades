'use strict';
// Vista visual V1.2 integrada: mapa con hotspots sobre la imagen de la ciudad
// (referencia aportada por el usuario, adaptación estética generada por Instinct)
// y listado accesible. Ambos abren el mismo detalle de cada espacio.
const spaces=[
{id:'biblioteca',x:49,y:18,name:'Biblioteca KosmoTIC',description:'Espacio previsto para organizar y descubrir recursos, documentos y conocimiento.'},
{id:'negocios',x:29,y:22,name:'Centro de Negocios y Red',description:'Espacio previsto para conectar iniciativas, organizaciones y oportunidades de colaboración.'},
{id:'confianza',x:22,y:38,name:'Círculo de Confianza',description:'Espacio previsto para relaciones basadas en confianza, transparencia y colaboración.'},
{id:'comunidad',x:50,y:49,name:'Comunidad KosmoTIC',description:'Punto de encuentro central de las personas que forman la ciudad.'},
{id:'inter-ia',x:70,y:22,name:'Inter-IA',description:'Espacio de presentación del laboratorio cognitivo Inter-IA, bajo supervisión humana.'},
{id:'formacion',x:89,y:24,name:'Formación y Talento',description:'Espacio previsto para aprendizaje, habilidades y desarrollo del talento.'},
{id:'comercio',x:77,y:41,name:'Comercio Local',description:'Espacio previsto para dar visibilidad al comercio y a la actividad local.'},
{id:'innovacion',x:87,y:59,name:'Innovación y Proyectos',description:'Espacio previsto para iniciativas y proyectos en evolución.'},
{id:'datos',x:66,y:62,name:'Datos y Resultados',description:'Espacio previsto para información y resultados verificables.'},
{id:'sostenibilidad',x:35,y:63,name:'Sostenibilidad y Entorno',description:'Espacio previsto para iniciativas relacionadas con el entorno y la sostenibilidad.'},
{id:'cultura',x:18,y:61,name:'Cultura y Patrimonio',description:'Espacio previsto para contenidos culturales y patrimoniales.'},
{id:'observatorio',x:10,y:34,name:'Observatorio SACT',description:'Espacio previsto para observación y seguimiento de cuestiones tecnológicas relevantes.'}
];
const hotspots=document.getElementById('hotspots');
if(hotspots){for(const s of spaces){const b=document.createElement('button');b.type='button';b.className='hotspot';b.style.left=s.x+'%';b.style.top=s.y+'%';b.textContent=s.name;b.setAttribute('aria-label','Explorar '+s.name);b.addEventListener('click',()=>showSpace(s.id));hotspots.append(b)}}
const grid=document.getElementById('space-grid'),detail=document.getElementById('detalle'),title=document.getElementById('detail-title'),description=document.getElementById('detail-description');
function showSpace(id){const s=spaces.find(item=>item.id===id);if(!s)return;title.textContent=s.name;description.textContent=s.description;detail.hidden=false;try{history.replaceState(null,'','#'+s.id)}catch(e){}detail.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});detail.focus({preventScroll:true})}
for(const s of spaces){const c=document.createElement('button');c.type='button';c.className='space-link';const strong=document.createElement('strong');strong.textContent=s.name;const small=document.createElement('small');small.textContent='Conocer el espacio · En preparación';c.append(strong,small);c.addEventListener('click',()=>showSpace(s.id));grid.append(c)}
document.getElementById('close-detail').addEventListener('click',()=>{detail.hidden=true;try{history.replaceState(null,'','#espacios')}catch(e){}document.getElementById('spaces-title').scrollIntoView();document.querySelector('.space-link').focus({preventScroll:true})});
const initial=decodeURIComponent(location.hash.slice(1));if(spaces.some(s=>s.id===initial))showSpace(initial);
