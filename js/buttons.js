// script for handling varius buttons behaviors

const scrollDownButton = document.querySelector('.hero-scroll-button');
const sectionWeb = document.querySelector('#section-web');

if(scrollDownButton) scrollDownButton.addEventListener('click', () => {
    sectionWeb.scrollIntoView();
})