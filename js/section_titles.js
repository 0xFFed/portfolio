/* Adjusts section titles for mobile devices */

const MOBILE_TRESHOLD = 768;
const sectionTitleHeaders = document.querySelectorAll('.category-header');

let adjustTitles = () => {
    if(window.innerWidth < MOBILE_TRESHOLD) {
        sectionTitleHeaders[0].children[0].textContent = "WEB DEV";
        sectionTitleHeaders[1].children[0].textContent = "BLOCKCHAIN DEV";
        sectionTitleHeaders[2].children[0].textContent = "SYSTEM DEV";
    }
    else {
        sectionTitleHeaders[0].children[0].textContent = "WEB DEVELOPMENT";
        sectionTitleHeaders[1].children[0].textContent = "BLOCKCHAIN DEVELOPMENT";
        sectionTitleHeaders[2].children[0].textContent = "SYSTEM PROGRAMMING";

    }
}

adjustTitles();
window.addEventListener('resize', adjustTitles);


/* Handles the orientation-change for mobile devices, avoiding logo-reload */
const bigLogo = document.querySelector('.hero-logo-big-cont');
const smallLogo = document.querySelector('.hero-logo-small-cont');

if(bigLogo) bigLogo.addEventListener('animationend', () => {
    bigLogo.style.opacity = "1";
    smallLogo.style.opacity = "1";
});

if(smallLogo) smallLogo.addEventListener('animationend', () => {
    smallLogo.style.opacity = "1";
    bigLogo.style.opacity = "1";
});