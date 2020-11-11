const tl = gsap.timeline({ default: { ease: 'power1.out' } });

tl.to('.text', { y: "-20%", duration: 2, stagger: 0.2, scale: 1.05 });
// ??

tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
// 1 second faster



// tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.4});

// tl.to('nav', {opacity: 0.8}, {opacity: 1, duration: 1}, '-=1');

// ここまではEd

// gsap.from('.l-title', {opacity: 0, duration: 1,  x: -100, ease: 'Power1 easeInOut'});

// gsap.from('.content-img', { duration: 2, y: 30, opacity: 0, start: 'top center' })


// gsap.timeline('.l-title', {
//   scrollTrigger: {
//     duration: 2,
//     trigger: '.l-title',
//     start: 'top center'
//   },
//   x: 100
// });


gsap.from('.context', {y: -100, opacity: 0, duration: 1},  '-=1')
gsap.from('.content-img', {x: -100, opacity: 0, duration: 1.5})
gsap.from('.l-title', {duration: 2, start: 'top center', x: 100})