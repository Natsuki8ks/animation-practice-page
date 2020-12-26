const tl = gsap.timeline({ default: { ease: 'power1.out' } });

tl.to('.text', { y: "-20%", duration: 1, stagger: 0.2, scale: 1.05 });
// ??

tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
// 1 second faster



tl.to('.slider', { y: "-100%", duration: 1, delay: 0.4});

tl.to('nav', {opacity: 0.8}, {opacity: 1, duration: 1}, '-=1');

// ここまではEd



let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.content',
    start: 'top top'
  }
});

tl2.from('img', {x: 300, opacity: 0, duration: 1}, '-=1')
.from('.l-title', {x: 300, opacity: 0, duration: 1}, '+=1')
  .from('.contents', {y: 300, opacity: 0, duration: 1}, '-=1')







// need to fix
const open = document.getElementById('open');
const overlay = document.getElementById('.overlay');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hidden');
});

close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hidden');
});
