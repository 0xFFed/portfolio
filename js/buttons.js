// script for handling varius buttons behaviors

// hero section scroll-down button
const scrollDownButton = document.querySelector('.hero-scroll-button');
const sectionWeb = document.querySelector('#section-web');

if(scrollDownButton) scrollDownButton.addEventListener('click', () => {
    sectionWeb.scrollIntoView();
})


// title buttons
const fullStackButton = document.querySelector('#full-stack-title');
const webSection = document.querySelector('#section-web');
if(fullStackButton) fullStackButton.addEventListener('click', () => {
    webSection.scrollIntoView();
});

const blockchainButton = document.querySelector('#blockchain-title');
const blockchainSection = document.querySelector('#section-blockchain');
if(blockchainButton) blockchainButton.addEventListener('click', () => {
    blockchainSection.scrollIntoView();
});

const systemButton = document.querySelector('#system-title');
const systemSection = document.querySelector('#section-system');
if(systemButton) systemButton.addEventListener('click', () => {
    systemSection.scrollIntoView();
});