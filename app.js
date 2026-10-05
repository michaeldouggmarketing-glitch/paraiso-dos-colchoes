'use strict';
(()=>{
const STORE_WHATSAPP='5535998290565';
const products=[
{id:'castor-amazon-gel',brand:'Castor',name:'Premium Amazon Gel',detail:'One Face Pocket',image:'assets/castor-amazon-gel.webp'},
{id:'castor-silver-star',brand:'Castor',name:'Silver Star Air',detail:'One Face Pocket',image:'assets/castor-silver-star.webp'},
{id:'castor-red-white',brand:'Castor',name:'Red & White',detail:'Double Face · Espuma D33',image:'assets/castor-red-white.webp'},
{id:'ortobom-liberty',brand:'Ortobom',name:'Liberty',detail:'Molas ensacadas Superpocket',image:'assets/ortobom-liberty.webp'},
{id:'probel-collin',brand:'Probel',name:'Collin',detail:'Molas ensacadas · Casal',image:'assets/probel-collin.webp'},
{id:'probel-akira',brand:'Probel',name:'Akira',detail:'Molas ensacadas · Casal',image:'assets/probel-akira.webp'}];
const whatsapp=message=>'https://wa.me/'+STORE_WHATSAPP+'?text='+encodeURIComponent(message);
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=whatsapp(a.dataset.wa);a.target='_blank';a.rel='noopener noreferrer'});
const grid=document.getElementById('products');
for(const product of products){
 const card=document.createElement('article');card.className='product';card.dataset.brand=product.brand;
 const figure=document.createElement('div');figure.className='product-image';const image=document.createElement('img');image.src=product.image;image.alt='Colchão '+product.brand+' '+product.name+', imagem oficial do fabricante';image.width=1000;image.height=1000;image.loading='lazy';figure.append(image);
 const brand=document.createElement('div');brand.className='product-brand';brand.textContent=product.brand;
 const name=document.createElement('h3');name.textContent=product.name;const detail=document.createElement('p');detail.textContent=product.detail;
 const link=document.createElement('a');link.className='text-link';link.textContent='Consultar este modelo';link.href=whatsapp('Olá! Vi o '+product.brand+' '+product.name+' no site da Paraíso dos Colchões. Gostaria de consultar medidas, valor e disponibilidade.');link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','Consultar '+product.brand+' '+product.name+' pelo WhatsApp');card.append(figure,brand,name,detail,link);grid.append(card);
}
function filterBrand(brand){
 document.querySelectorAll('.filters button').forEach(b=>{const selected=b.dataset.brand===brand;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});let count=0;grid.querySelectorAll('.product').forEach(card=>{card.hidden=brand!=='Todas'&&card.dataset.brand!==brand;if(!card.hidden)count++});document.getElementById('catalog-count').textContent=count+' '+(count===1?'referência':'referências')+' para explorar';document.dispatchEvent(new CustomEvent('paraiso:filter'));
}
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const transition=document.startViewTransition(()=>filterBrand(b.dataset.brand));transition.ready.catch(()=>{});transition.finished.catch(()=>{});}else filterBrand(b.dataset.brand)}));
document.querySelectorAll('[data-select-brand]').forEach(a=>a.addEventListener('click',()=>filterBrand(a.dataset.selectBrand)));
const form=document.getElementById('comfort-form');
function updateGuide(){const data=new FormData(form),size=data.get('size'),feel=data.get('feel');document.querySelector('.guide-summary').textContent=[size,feel].filter(Boolean).join(' · ')||'Vamos encontrar seu conforto.';document.getElementById('size-caption').textContent=size?(size==='Ainda preciso medir'?'Vamos conversar sobre o seu espaço.':'Sua preferência: '+size+'. Confirme as medidas na loja.'):'Seu espaço. Seu descanso.';const scales={Solteiro:.76,Casal:.9,Queen:.96,King:1,'Ainda preciso medir':.9};document.querySelector('.size-preview img').style.transform='scale('+(scales[size]||.9)+')'}
form.addEventListener('change',updateGuide);form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);window.open(whatsapp('Olá! Vim pelo site da Paraíso dos Colchões. Procuro um colchão '+data.get('size')+'. Minha preferência de conforto: '+data.get('feel')+'. Marca: '+data.get('brand')+'. Podem me orientar sobre modelos, medidas e valores?'),'_blank','noopener,noreferrer')});
const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('mobile-nav');
function toggleMenu(open){menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.hidden=!open;document.body.classList.toggle('menu-open',open);document.dispatchEvent(new CustomEvent('paraiso:menu',{detail:{open}}));}
menu.addEventListener('click',()=>toggleMenu(menu.getAttribute('aria-expanded')!=='true'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!nav.hidden){toggleMenu(false);menu.focus()}});
let index=0,manual=false;const descriptions=['Molas ensacadas e espuma com partículas de gel. Conheça a construção e experimente o conforto.','Uma referência Castor em molas ensacadas. Consulte medidas e conheça o toque na loja.','Espuma D33 em uma construção Double Face. Uma outra maneira de encontrar seu conforto.'];
const layers=[...document.querySelectorAll('.featured-layer')];
function setFeatured(next,byHand=false){if(byHand)manual=true;if(manual&&!byHand)return;next=(next+3)%3;if(next===index)return;index=next;const p=products[index];layers.forEach((img,i)=>img.classList.toggle('is-active',i===index));document.getElementById('featured-name').textContent=p.name;document.getElementById('featured-detail').textContent=p.detail;document.getElementById('featured-description').textContent=descriptions[index];document.querySelector('.model-position').textContent='0'+(index+1)+' / 03';document.querySelectorAll('[data-model]').forEach(b=>{const active=Number(b.dataset.model)===index;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.querySelector('.feature-consult').href=whatsapp('Olá! Quero conhecer o Castor '+p.name+'. Podem me informar modelos, medidas e disponibilidade?');}
document.getElementById('previous-model').addEventListener('click',()=>setFeatured(index-1,true));document.getElementById('next-model').addEventListener('click',()=>setFeatured(index+1,true));document.querySelectorAll('[data-model]').forEach(b=>b.addEventListener('click',()=>setFeatured(Number(b.dataset.model),true)));
window.ParaisoScene={setFeatured,resetManual:()=>{manual=false}};
})();
