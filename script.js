const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 50 ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.7)';
});

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

fetch('header.html')
.then(Response => Response.text())
.then(data => {
  document.getElementById('header-container').innerHTML = data;
});

fetch('footer.html')
.then(Response => Response.text())
.then(data => {
  document.getElementById('footer-container').innerHTML = data;
});

  let slideIndex = 0;
  const slides = document.querySelectorAll('.carrusel-slide');

  function mostrarSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });

    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  function moverCarrusel(n) {
    mostrarSlide(slideIndex + n);
  }

  // Mostrar la primera imagen al cargar
  document.addEventListener('DOMContentLoaded', () => {
    mostrarSlide(slideIndex);
  });
