/* Main Page JS */
const hamburger = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');
const navLinksArray = document.querySelectorAll('.nav-link');
const heroSection = document.querySelector('#hero');
let isVisible = true;
 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('hidden');

    isVisible = !isVisible;
    console.log(isVisible);

    if (isVisible) {
        heroSection.classList.remove('hidden');
        heroSection.classList.add('visible');
    } else {
        heroSection.classList.remove('visible');
        heroSection.classList.add('hidden');
    }
});

// Add event listeners to each nav link
navLinksArray.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        if(window.innerWidth <= 1200){
            console.log('Hehehehehhehe');
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('hidden');
            heroSection.classList.add('visible');
            isVisible = true;
    }
    });
});