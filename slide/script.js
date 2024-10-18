let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Função para exibir o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Função para navegar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Função para navegar para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Captura as teclas de seta para navegar
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
});

// Exibe o primeiro slide ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
