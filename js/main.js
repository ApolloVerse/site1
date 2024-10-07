// Rolagem suave para links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funcionalidade do Carrossel
const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
let currentIndex = 0;

function showItem(index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);

// Avança automaticamente a cada 5 segundos
setInterval(nextItem, 5000);

// Contador regressivo
function startCountdown(duration) {
    const countdownElement = document.getElementById('countdown');
    let remainingTime = duration;

    function updateCountdown() {
        const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        const seconds = Math.floor(remainingTime % 60);

        countdownElement.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (remainingTime > 0) {
            remainingTime--;
        } else {
            clearInterval(timerInterval);
        }
    }

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
}

// Inicia o contador regressivo para 1 hora (1 * 60 * 60 segundos)
document.addEventListener('DOMContentLoaded', () => startCountdown(1 * 60 * 60));

// Funcionalidade do Slideshow
function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Muda o slide a cada 5 segundos
    setInterval(nextSlide, 5000);
}

// Inicia o slideshow quando a página carrega
document.addEventListener('DOMContentLoaded', startSlideshow);