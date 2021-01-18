const sr = ScrollReveal({
    origin: 'top',
    duration: 2000,
    reset: true
});

sr.reveal('.title', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
    reset: true
});
sr.reveal('.title-description', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
    reset: true,
    delay: 600
});

sr.reveal('.formation-title', {
});
sr.reveal('.aboutme-title', {
});
sr.reveal('.experiences-title', {
});
sr.reveal('.skills-title', {
});
sr.reveal('.contact-title', {
});
sr.reveal('.js-formation-card', {
    origin: 'left',
    duration: 3000
}, 1000);
sr.reveal('.marker', {
    origin: 'top',
    duration: 3000
}, 1000);
sr.reveal('.timeline-content', {
    origin: 'top',
    duration: 3000
}, 2000);

let burger = document.querySelector('.burger');
let navIndex = document.querySelector('.nav-index');


function menu(event) {
    event.preventDefault();
    navIndex.classList.toggle('active');
}

burger.addEventListener('click', menu);
