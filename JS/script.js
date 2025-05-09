// Carrossel - Automatico
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000);

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}


// Carrossel - Netflix
/* Carrossel - Netflix */
const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

const updateCarousel = () => {
    const cardWidth = document.querySelector('.carousel-card').offsetWidth;
    const gap = 20; // Space between cards
    const totalOffset = -(cardWidth + gap) * currentIndex;
    track.style.transform = `translateX(${totalOffset}px)`;
};

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? track.children.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === track.children.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Initialize carousel
updateCarousel();



/* Script da Pagina Curso */
const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Só anima uma vez
        }
    });
}, {
    threshold: 0.5
});

// Observa todos os elementos
boxes.forEach(box => observer.observe(box));