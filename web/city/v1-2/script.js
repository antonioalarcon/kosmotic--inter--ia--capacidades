'use strict';
// Vista visual V1.2 integrada. El mapa con hotspots sobre la imagen de referencia
// se activará cuando la imagen esté acreditada para el repositorio público.
// Mientras tanto, el listado accesible es la navegación completa y equivalente.
const spaces=[
{id:'biblioteca',name:'Biblioteca KosmoTIC',description:'Espacio previsto para organizar y descubrir recursos, documentos y conocimiento.'},
{id:'negocios',name:'Centro de Negocios y Red',description:'Espacio previsto para conectar iniciativas, organizaciones y oportunidades de colaboración.'},
{id:'confianza',name:'Círculo de Confianza',description:'Espacio previsto para relaciones basadas en confianza, transparencia y colaboración.'},
{id:'comunidad',name:'Comunidad KosmoTIC',description:'Punto de encuentro central de las personas que forman la ciudad.'},
{id:'inter-ia',name:'Inter-IA',description:'Espacio de presentación del laboratorio cognitivo Inter-IA, bajo supervisión humana.'},
{id:'formacion',name:'Formación y Talento',description:'Espacio previsto para aprendizaje, habilidades y desarrollo del talento.'},
{id:'comercio',name:'Comercio Local',description:'Espacio previsto para dar visibilidad al comercio y a la actividad local.'},
{id:'innovacion',name:'Innovación y Proyectos',description:'Espacio previsto para iniciativas y proyectos en evolución.'},
{id:'datos',name:'Datos y Resultados',description:'Espacio previsto para información y resultados verificables.'},
{id:'sostenibilidad',name:'Sostenibilidad y Entorno',description:'Espacio previsto para iniciativas relacionadas con el entorno y la sostenibilidad.'},
{id:'cultura',name:'Cultura y Patrimonio',description:'Espacio previsto para contenidos culturales y patrimoniales.'},
{id:'observatorio',name:'Observatorio SACT',description:'Espacio previsto para observación y seguimiento de cuestiones tecnológicas relevantes.'}
];
const grid=document.getElementById('space-grid'),detail=document.getElementById('detalle'),title=document.getElementById('detail-title'),description=document.getElementById('detail-description');
function showSpace(id){const s=spaces.find(item=>item.id===id);if(!s)return;title.textContent=s.name;description.textContent=s.description;detail.hidden=false;history.replaceState(null,'','#'+s.id);detail.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});detail.focus({preventScroll:true})}
for(const s of spaces){const c=document.createElement('button');c.type='button';c.className='space-link';const strong=document.createElement('strong');strong.textContent=s.name;const small=document.createElement('small');small.textContent='Conocer el espacio · En preparación';c.append(strong,small);c.addEventListener('click',()=>showSpace(s.id));grid.append(c)}
document.getElementById('close-detail').addEventListener('click',()=>{detail.hidden=true;history.replaceState(null,'','#espacios');document.getElementById('spaces-title').scrollIntoView();document.querySelector('.space-link').focus({preventScroll:true})});
const initial=decodeURIComponent(location.hash.slice(1));if(spaces.some(s=>s.id===initial))showSpace(initial);
