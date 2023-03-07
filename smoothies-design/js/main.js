//Change nav style on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});


let navLinks = document.querySelector(".nav_links");
let menuOpen = document.querySelector("#nav_toggle-open");
let menuClose = document.querySelector("nav_toggle-close");

menuOpen.onclick = () => {
  navLinks.classList.toggle("open");
  menuOpen.classList.toggle("bx bx-menu");
} 


// Swiper Section
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Contact buttons (circular text button)
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
  let text = textButton.querySelector('p');

  text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
});


AOS.init({
  offset: 100,
  duration: 1500
});








