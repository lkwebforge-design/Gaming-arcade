const scannerLens=document.getElementById('scannerLens');
const navbar=document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
  if(scannerLens){
    const rect=scannerLens.getBoundingClientRect();
    const h=window.innerHeight;
    if(rect.top<h&&rect.bottom>0){
      const percent=(h-rect.top)/(h+rect.height);
      scannerLens.style.transform=`translateY(${(percent-.5)*80}px)`;
    }
  }
  if(navbar) navbar.style.boxShadow=window.scrollY>30?'0 12px 45px rgba(0,0,0,.35)':'0 10px 40px rgba(0,0,0,.2)';
},{passive:true});

const revealItems=document.querySelectorAll('.process-card,.console,.content-block');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealItems.forEach(el=>{el.classList.add('reveal');observer.observe(el)});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});
