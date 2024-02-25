//HAMBURGER
const hamburgerIcon = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.menu-wrapper-list');
let isOpen = false;

hamburgerIcon.addEventListener('click', () => {
    if (!isOpen){
        menuList.style.display = 'flex';
        menuList.classList.add('open');
        isOpen = true;
    }else{
        isOpen = false;
        menuList.style.display = 'none';
        menuList.classList.remove('open');
    }
})

//SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if(idx === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);

//FIRST BUTTON
const firstBtn = document.querySelector('.first-button');

firstBtn.addEventListener('click', () => {
    firstBtn.innerHTML = 'Lorem ipsum';
    firstBtn.style.background = '#000';
})

//SECOND BUTTON
const secondBtn = document.querySelector('.second-button');
const sliderWrapper = document.querySelector('.slider-wrapper');
const bottomBar = document.querySelector('.bar');

secondBtn.addEventListener('click', () => {
    if (isInSameVerticalArea(secondBtn, sliderWrapper)) {
        bottomBar.style.display = 'none';
    }
});

function isInSameVerticalArea(elem1, elem2) {
    let rect1 = elem1.getBoundingClientRect();
    let rect2 = elem2.getBoundingClientRect();

    return rect1.bottom >= rect2.top && rect1.top <= rect2.bottom;
}

//THIRD BUTTON
const thirdBtn = document.querySelector('.third-button');
const closeBtn = document.querySelector('.close');
const popup = document.querySelector('.popup');

thirdBtn.addEventListener('click', () => {
        popup.style.display = "flex";
        thirdBtn.style.display = "none"
})

closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
    thirdBtn.style.display = "block"
})

//FOURTH BUTTON
const fourthBtn = document.querySelector('.fourth-button');
const timerDisplay = document.querySelector('.timer');

fourthBtn.addEventListener('click', function() {
    startCountdown('2024-05-01', timerDisplay);
});

function startCountdown(targetDate, displayElement) {
    const endDate = new Date(targetDate).getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const difference = endDate - now;

        if (difference < 0) {
            clearInterval(timer);
            displayElement.innerHTML = "Czas minął!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        displayElement.innerHTML = `Left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }, 1000);
}


