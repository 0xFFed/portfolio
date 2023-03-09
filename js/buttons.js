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


// mail button behavior
const MAIL = 'fred.ef.dev@gmail.com';
const mailButton = document.querySelector('#hero-button-4');
const copyText = document.querySelector('#button-4-pop-up');
let isMailCopyOn = false;
if(mailButton) mailButton.addEventListener('click', () => {
    navigator.clipboard.writeText(MAIL);

    // fading in-and-out the "Copied" text
    if(!isMailCopyOn) {
        copyText.style.opacity="1";
        isMailCopyOn = true;
        setTimeout(() => {
            copyText.style.opacity="0";
            isMailCopyOn = false;
        }, 1000);
    }
})