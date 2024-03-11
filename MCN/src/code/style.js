const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;
  const newPosition = -index * slideWidth;
  sliderContainer.style.transform = `translateX(${newPosition}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
});

// Показываем первый слайд при загрузке страницы
showSlide(currentIndex);