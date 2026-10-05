'use strict';
// The store owner's WhatsApp can be replaced here after confirmation.
const STORE_WHATSAPP = '5535998290565';
const products = [
 {id:'castor-silver-star',brand:'Castor',name:'Silver Star Air',detail:'One Face Pocket',image:'assets/castor-silver-star.webp'},
 {id:'castor-amazon-gel',brand:'Castor',name:'Premium Amazon Gel',detail:'One Face Pocket',image:'assets/castor-amazon-gel.webp'},
 {id:'castor-red-white',brand:'Castor',name:'Red & White',detail:'Double Face · Espuma D33',image:'assets/castor-red-white.webp'},
 {id:'ortobom-liberty',brand:'Ortobom',name:'Liberty',detail:'Molas ensacadas Superpocket',image:'assets/ortobom-liberty.webp'},
 {id:'probel-collin',brand:'Probel',name:'Collin',detail:'Molas ensacadas · Casal',image:'assets/probel-collin.webp'},
 {id:'probel-akira',brand:'Probel',name:'Akira',detail:'Molas ensacadas · Casal',image:'assets/probel-akira.webp'}
];
function whatsapp(message){return 'https://wa.me/'+STORE_WHATSAPP+'?text='+encodeURIComponent(message)}
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=whatsapp(a.dataset.wa);a.target='_blank';a.rel='noopener noreferrer'});
const grid=document.getElementById('products');
products.forEach(product=>{
 const card=document.createElement('article');card.className='product';card.dataset.brand=product.brand;
 const figure=document.createElement('div');figure.className='product-image';
 const image=document.createElement('img');image.src=product.image;image.alt='Colchão '+product.brand+' '+product.name+', imagem oficial do fabricante';image.loading='lazy';image.width=1000;image.height=1000;figure.append(image);
 const brand=document.createElement('div');brand.className='product-brand';brand.textContent=product.brand;
 const name=document.createElement('h3');name.textContent=product.name;
 const detail=document.createElement('p');detail.textContent=product.detail;
 const link=document.createElement('a');link.className='text-link';link.textContent='Consultar este modelo ';link.href=whatsapp('Olá! Vi o '+product.brand+' '+product.name+' no site da Paraíso dos Colchões. Vocês têm esse modelo? Gostaria de consultar medidas, valor e disponibilidade.');link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','Consultar '+product.brand+' '+product.name+' pelo WhatsApp');
 const arrow=document.createElementNS('http://www.w3.org/2000/svg','svg');arrow.classList.add('ui-icon');arrow.setAttribute('viewBox','0 0 24 24');arrow.setAttribute('aria-hidden','true');const arrowPath=document.createElementNS('http://www.w3.org/2000/svg','path');arrowPath.setAttribute('d','M6 18 18 6M6 6h12v12');arrow.append(arrowPath);link.append(arrow);card.append(figure,brand,name,detail,link);grid.append(card);
});
function filterBrand(brand){
 document.querySelectorAll('.filters button').forEach(button=>{const selected=button.dataset.brand===brand;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected))});
 let count=0;grid.querySelectorAll('.product').forEach(card=>{card.hidden=brand!=='Todas'&&card.dataset.brand!==brand;if(!card.hidden)count++});
 document.getElementById('catalog-count').textContent=count+' '+(count===1?'referência':'referências')+' para explorar';
}
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{if(document.startViewTransition&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.startViewTransition(()=>filterBrand(button.dataset.brand))}else{filterBrand(button.dataset.brand)}}));
document.querySelectorAll('[data-select-brand]').forEach(link=>link.addEventListener('click',()=>filterBrand(link.dataset.selectBrand)));
document.getElementById('comfort-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const message='Olá! Vim pelo site da Paraíso dos Colchões. Procuro um colchão '+data.get('size')+'. Minha preferência de conforto: '+data.get('feel')+'. Marca: '+data.get('brand')+'. Podem me orientar sobre modelos, medidas e valores?';window.open(whatsapp(message),'_blank','noopener,noreferrer')});
const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('mobile-nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.hidden=!open});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu')}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!nav.hidden){nav.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');menu.focus()}});

let featuredIndex=1;const castorProducts=products.filter(p=>p.brand==='Castor');function changeFeatured(step){featuredIndex=(featuredIndex+step+castorProducts.length)%castorProducts.length;const product=castorProducts[featuredIndex];const image=document.getElementById('featured-image');image.src=product.image;image.alt='Colchão Castor '+product.name+', imagem oficial do fabricante';document.getElementById('featured-name').textContent=product.name;document.getElementById('featured-detail').textContent=product.detail;const stage=image.parentElement;stage.classList.remove('switching');requestAnimationFrame(()=>{stage.classList.add('switching')});}document.getElementById('previous-model').addEventListener('click',()=>changeFeatured(-1));document.getElementById('next-model').addEventListener('click',()=>changeFeatured(1));
