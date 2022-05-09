import i18Obj from './translate.js'

let batyrma = document.getElementById('burger-batyrma');
let menu = document.querySelector('.nav');
let jabuBatyrma = document.querySelector('.header-nav_close');
let siltemeler = document.querySelectorAll('.nav-menu_item-link');

batyrma.addEventListener('click', function() {
    menu.classList.add('nav-menu_active');
});

jabuBatyrma.addEventListener('click', function() {
    menu.classList.remove('nav-menu_active');
});

for (let i = 0; i < siltemeler.length; i++) {
    siltemeler[i].addEventListener('click', function(){
        menu.classList.remove('nav-menu_active');
    });
};

// portfolio blogy suretterin auystyru

let portfolioBatyrmalar = document.querySelector('.portfolio-categories');
let portfolioBatyrma = document.querySelectorAll('.portfolio-category');
let portfolioSuretter = document.querySelectorAll('.portfolio-img');

/* portfolioBatyrma.addEventListener('click', function() {
    for (let i = 0; i <=6; i++) {
        portfolioSuretter[i].src = `assets/images/winter/${i+1}.jpg`
    }
}); */

function suretterdiAuystyru(event) {
    if (event.target.classList.contains('portfolio-category')) {
        event.target.classList.add('active');
        for (let i = 0; i <=6; i++) {
            portfolioSuretter[i].src = `assets/images/${event.target.dataset.mezgil}/${i+1}.jpg`
        }
    }
    
}

for (let i = 0; i < portfolioBatyrma.length; i++) {
    portfolioBatyrma[i].addEventListener('click', function() {
        for (let i = 0; i < portfolioBatyrma.length; i++) {
            portfolioBatyrma[i].classList.remove('active');
        }
        portfolioBatyrma[i].classList.add('active');
    }) 
}

portfolioBatyrmalar.addEventListener('click', suretterdiAuystyru);

// audarma jasau

let til = document.querySelectorAll('.language');
let tilder = document.querySelector('.switch-lng');

function getTranslate(lang) {
    const dataAudaru = document.querySelectorAll('[data-i18n]');
    let keys = i18Obj[lang];
    for (let i = 0; i < dataAudaru.length; i++) {
        let dataMani = dataAudaru[i].dataset.i18n;
        for (let element in keys) {
            dataAudaru[i].textContent = keys[dataMani];
        }
    }
}

function getLanguage(event) {
    if (event.target.classList.contains('language')) {
        getTranslate(event.target.textContent);
    }
}

for (let i = 0; i < til.length; i++) {
    til[i].addEventListener('click', function() {
        for (let i = 0; i < til.length; i++) {
            til[i].classList.remove('active');
        }
        til[i].classList.add('active');
    }) 
}

tilder.addEventListener('click', getLanguage);

// jaryq rejimi

let jaryqBatyrma = document.querySelector('.theme-button');

function getTheme() {
    if (jaryqBatyrma.classList.contains('active')) {
        jaryqBatyrma.classList.remove('active');
    } else {
        jaryqBatyrma.classList.add('active');
    }

    let sections = document.querySelectorAll('.skills, .portfolio, .video, .price');
    let sectionHeader = document.querySelectorAll('.section-header');
    let sectionTitle = document.querySelectorAll('.section-title');
    
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('light-theme');
    }

    for (let i = 0; i < sectionHeader.length; i++) {
        sectionHeader[i].classList.toggle('light-theme');
    }

    for (let i = 0; i < sectionTitle.length; i++) {
        sectionTitle[i].classList.toggle('light-theme');
    }
}

jaryqBatyrma.addEventListener('click', getTheme);

console.log(portfolioBatyrmalar);