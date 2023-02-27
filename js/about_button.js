/* Handles the behavior of the "about me" button */

const aboutDescSection = document.querySelector('#about-desc-section');
const aboutDesc = document.querySelector('#about-desc');
const aboutButton = document.querySelector('#about-button');
const aboutExit = document.querySelector('#about-exit');

const titleStrings = document.querySelectorAll('.main-title');


if(aboutButton) aboutButton.addEventListener('click', () => {
    aboutDescSection.classList.add('about-expanded');
    titleStrings.forEach((el) => {
        el.classList.add('shadowed');
    })
});

if(aboutExit) aboutExit.addEventListener('click', () => {
    aboutDescSection.classList.remove('about-expanded');
    titleStrings.forEach((el) => {
        el.classList.remove('shadowed');
    })
})