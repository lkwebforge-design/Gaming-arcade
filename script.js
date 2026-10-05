gsap.registerPlugin(ScrollTrigger);
const scannerLens=document.getElementById('scannerLens');
const navbar=document.querySelector('.navbar');

if(scannerLens){
  gsap.to(scannerLens,{y:80,ease:'none',scrollTrigger:{trigger:'.scanner-container',start:'top bottom',end:'bottom top',scrub:1}});
}
gsap.from('.hero-overlay > *',{y:35,opacity:0,duration:1,stagger:.12,ease:'power3.out'});
gsap.utils.toArray('.process-card').forEach((card,i)=>{
  gsap.from(card,{y:45,opacity:0,duration:.8,delay:i*.08,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 82%'}});
});
gsap.from('.console',{x:60,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.console',start:'top 78%'}});

window.addEventListener('scroll',()=>{
  if(navbar) navbar.style.boxShadow=window.scrollY>30?'0 12px 45px rgba(0,0,0,.35)':'0 10px 40px rgba(0,0,0,.2)';
},{passive:true});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});
