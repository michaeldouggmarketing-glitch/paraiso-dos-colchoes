'use strict';
(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const root=document.documentElement,hero=document.querySelector('.hero'),story=document.querySelector('.castor-feature');
 let pending=false,manual=false,autoIndex=-1;
 function updateScene(){
  pending=false;if(reduced.matches)return;
  const h=hero.getBoundingClientRect(),r=story.getBoundingClientRect();
  const heroProgress=Math.max(0,Math.min(1,-h.top/h.height));
  const progress=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));
  hero.style.setProperty('--scene',heroProgress.toFixed(3));hero.style.setProperty('--photo-y',`${Math.min(45,heroProgress*45)}px`);
  story.style.setProperty('--scene',progress.toFixed(3));
  const index=Math.min(2,Math.floor(progress*3));
  story.querySelectorAll('.scene-steps span').forEach((s,i)=>s.classList.toggle('active',i===index));
  if(r.bottom<0||r.top>innerHeight){manual=false;autoIndex=-1}
  else if(r.top<=0&&!manual&&index!==autoIndex&&typeof changeFeatured==='function'){
   autoIndex=index;const delta=index-featuredIndex;if(delta)changeFeatured(delta);
  }
 }
 function queue(){if(!pending){pending=true;requestAnimationFrame(updateScene)}}
 addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue,{passive:true});
 reduced.addEventListener('change',()=>{if(reduced.matches){hero.style.removeProperty('--photo-y');hero.style.removeProperty('--scene');story.style.removeProperty('--scene')}else queue()});
 document.querySelectorAll('.feature-controls button').forEach(b=>b.addEventListener('click',()=>{manual=true}));
 const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}})},{threshold:.15});
 document.querySelectorAll('.collection,.comfort,.about,.faq,.visit').forEach(el=>observer.observe(el));
 if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduced.matches){
  document.querySelector('#products').addEventListener('pointermove',e=>{const stage=e.target.closest('.product-image');if(!stage)return;const rect=stage.getBoundingClientRect();stage.style.setProperty('--tilt-x',`${((e.clientX-rect.left)/rect.width-.5)*8}deg`);stage.style.setProperty('--tilt-y',`${-((e.clientY-rect.top)/rect.height-.5)*8}deg`)});
  document.querySelector('#products').addEventListener('pointerout',e=>{const stage=e.target.closest('.product-image');if(stage&&!stage.contains(e.relatedTarget)){stage.style.removeProperty('--tilt-x');stage.style.removeProperty('--tilt-y')}});
 }
 const widths={Solteiro:145,Casal:205,Queen:230,King:265,'Ainda preciso medir':210};
 document.querySelectorAll('input[name="size"]').forEach(input=>input.addEventListener('change',()=>{document.querySelector('.size-preview').style.setProperty('--bed-scale',String(widths[input.value]/210));document.querySelector('#size-caption').textContent=input.value==='Ainda preciso medir'?'Vamos medir seu espaço juntos.':`Sua preferência: ${input.value}. Confirme as medidas na loja.`}));
 queue();
 // A real-time light field: a bounded WebGL shader, not a video download.
 const canvas=document.querySelector('#light-field');if(!canvas||reduced.matches)return;
 const gl=canvas.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});if(!gl){canvas.hidden=true;return}
 const vertex='attribute vec2 a;varying vec2 uv;void main(){uv=a*.5+.5;gl_Position=vec4(a,0.,1.);}';
 const fragment=`precision mediump float;varying vec2 uv;uniform float t;uniform vec2 pointer;void main(){vec2 p=uv;float phase=p.x*11.+sin(p.y*3.+t*.16)*.65;float fold=sin(phase+t*.12)*.5+.5;float drift=sin(p.y*6.-t*.22+fold)*.5+.5;float light=pow(fold,5.)*.07+drift*.022;float interaction=max(0.,1.-distance(p,pointer)*1.8)*.025;vec3 base=vec3(.039,.216,.259);vec3 ivory=vec3(.58,.69,.65);gl_FragColor=vec4(base+ivory*(light+interaction),1.);}`;
 function compile(type,source){const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){gl.deleteShader(shader);return null}return shader}
 const v=compile(gl.VERTEX_SHADER,vertex),f=compile(gl.FRAGMENT_SHADER,fragment);if(!v||!f){canvas.hidden=true;return}
 const program=gl.createProgram();gl.attachShader(program,v);gl.attachShader(program,f);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS)){canvas.hidden=true;return}
 gl.useProgram(program);const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
 const position=gl.getAttribLocation(program,'a');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
 const time=gl.getUniformLocation(program,'t'),pointer=gl.getUniformLocation(program,'pointer');let frame=0,last=0,visible=false,px=.35,py=.5;
 function size(){const dpr=Math.min(devicePixelRatio||1,1.25);canvas.width=Math.round(canvas.clientWidth*dpr);canvas.height=Math.round(canvas.clientHeight*dpr);gl.viewport(0,0,canvas.width,canvas.height)}
 function draw(now){if(!visible||document.hidden||reduced.matches){frame=0;return}if(now-last>32){last=now;gl.uniform1f(time,now/1000);gl.uniform2f(pointer,px,py);gl.drawArrays(gl.TRIANGLES,0,6)}frame=requestAnimationFrame(draw)}
 function start(){if(visible&&!document.hidden&&!reduced.matches&&!frame)frame=requestAnimationFrame(draw)}
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;start()},{threshold:0}).observe(hero);
 hero.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=hero.getBoundingClientRect();px=(e.clientX-r.left)/r.width;py=1-(e.clientY-r.top)/r.height},{passive:true});
 addEventListener('resize',size,{passive:true});document.addEventListener('visibilitychange',start);reduced.addEventListener('change',start);
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();visible=false;cancelAnimationFrame(frame);canvas.hidden=true});size();
})();
