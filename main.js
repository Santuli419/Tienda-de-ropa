const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.caja-carrusel');
let index = 0;

const totalItems = items.length;

function updateCarousel() {
  const offset = -index * 100; // Moverse al siguiente slide
  carousel.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
  index = (index + 1) % totalItems; // Avanzar al siguiente slide
  updateCarousel();
}

// Cambiar automáticamente cada 3 segundos
setInterval(autoSlide, 5000);
