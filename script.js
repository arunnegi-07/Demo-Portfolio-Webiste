/* Main Page JS */
let hamburger = document.querySelector('.hamburger');
let spanElements = document.querySelectorAll('.hamburger span');
const navLinks = document.querySelector('.nav-links');
const navLinksArray = document.querySelectorAll('.nav-link');
const heroSection = document.querySelector('#hero');
let isVisible = true;

hamburger.addEventListener('click',() =>{
	hamburger.classList.toggle('active')
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
	spanElements.forEach(span => {
		span.classList.remove('no-animation');
	});

    // Wait for 0.7 seconds and then add the 'no-animation' class back
    setTimeout(() => {
        spanElements.forEach(span => {
            span.classList.add('no-animation');
        });
    },700); 
})

// Add event listeners to each nav link
navLinksArray.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        if(window.innerWidth <= 1200){
            hamburger.classList.toggle('active')
            navLinks.classList.toggle('hidden');
            heroSection.classList.add('visible');
            isVisible = true;
        }
    });
});