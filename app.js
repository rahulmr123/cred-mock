


document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  gsap.registerPlugin(ScrollTrigger);

const mobileAnimation = gsap.timeline({
  scrollTrigger: {
     trigger: '.cred-app',
     start: 'top center',
  }
});
mobileAnimation
.to('.phone-image', {
  bottom: '-50px',
  ease: 'ease'
})
.to('.image4', {
  x: '50%',
  y: '10%',
  zIndex: 8
}, '<')
.to('.image5', {
  x: '90%',
  y: '20%',
  zIndex: 6
}, '<')
.to('.image2', {
  x: '-50%',
  y: '10%',
  zIndex: 8
}, '<')
.to('.image1', {
  x: '-90%',
  y: '20%',
  zIndex: 6
}, '<');



});