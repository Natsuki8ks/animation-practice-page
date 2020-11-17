const tl = gsap.timeline({ default: { ease: 'power1.out' } });

tl.to('.text', { y: "-20%", duration: 2, stagger: 0.2, scale: 1.05 });
// ??

tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
// 1 second faster



tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.4});

tl.to('nav', {opacity: 0.8}, {opacity: 1, duration: 1}, '-=1');

// ここまではEd



// gsap.from('.l-title', {opacity: 0, duration: 1,  x: -100, ease: 'Power1 easeInOut'});


// gsap.from('.context', {y: -100, opacity: 0, duration: 1},  '-=1')

// gsap.from('.content-img', {x: -100, opacity: 0, duration: 1.5,start: 'bottom center'})

gsap.from('.about-content', { duration: 2, start: 'top center', x: 100, toggleActions: 'restart pause resume  pause' })

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: 'l-title',
    start: 'top center',
    toggleActions: 'restart pause none  pause',
  }
});
tl1.from('l-title', { x: 100, opacity: 0, duration: 1.5, start: 'top center' })
  .from('.content-img2', { x: -100, opacity: 0, duration: 1 },)
  .from('.context2', { y: -100, opacity: 0, duration: 1 }, '-=1')



// gsap.from('.services-content', {duration: 3, start: 'top center', x: 100, toggleActions: 'restart none play pause'})

// let tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: 'services-conetent',
//     start: 'top center',
//     toggleActions: 'restart pause resume  pause',
//   }
// });
// tl3.from('services-content', {x: 100, opacity: 0, duration: 1.5, start: 'bottom center'})
//   .from('.content-img3', {x: -100, opacity: 0, duration: 1}, )
//   .from('.context3', {y: -100, opacity: 0, duration: 1}, '-=1')




// gsap.to('services-content', {
//   scrollTrigger: {
//     trigger: '.services-content',
//     start: 'top center',
//     toggleActions: 'restart pause reverse pause',
//     end: 'top 100px'
//   },
//   x: 100,
//   opacity: 0,
//   duration: 3
// });


let tl3 = gsap.timeline90;
tl2.from('.services-content', { sPercent: -100 })
  .from('.content-img3', { xPercent: 100 })
  .from('.context3', { yPercent: -100 });



// <div id='footer-copy'> &copy; {new Date().getFullYear()} All right reserved.</div>
// <!-- Latansani © 新しい年を表示 -->





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
