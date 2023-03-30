// script for handling varius buttons behaviors


/* scrolling buttons */

// hero section scroll-down button
const heroScrollDownButton = document.querySelector('#hero-scroll-down');
const sectionWeb = document.querySelector('#section-web');
if(heroScrollDownButton) heroScrollDownButton.addEventListener('click', () => {
    suspendPointer();
    sectionWeb.scrollIntoView();
});


// web section scroll-down button
const webScrollDownButton = document.querySelector('#web-scroll-down');
const sectionBlockchain = document.querySelector('#section-blockchain');
if(webScrollDownButton) webScrollDownButton.addEventListener('click', () => {
    suspendPointer();
    sectionBlockchain.scrollIntoView();
});


// blockchain section scroll-down button
const blockchainScrollDownButton = document.querySelector('#blockchain-scroll-down');
const sectionSystem = document.querySelector('#section-system');
if(blockchainScrollDownButton) blockchainScrollDownButton.addEventListener('click', () => {
    suspendPointer();
    sectionSystem.scrollIntoView();
});


// system section scroll-down button
const systemScrollDownButton = document.querySelector('#system-scroll-down');
const sectionContacts = document.querySelector('#section-contacts');
if(systemScrollDownButton) systemScrollDownButton.addEventListener('click', () => {
    suspendPointer();
    sectionContacts.scrollIntoView();
});


// contacts section home button
const homeButton = document.querySelector('#contacts-home-button');
const homeSection = document.querySelector('#hero-section');
if(homeButton) homeButton.addEventListener('click', () => {
    suspendPointer(1500);
    homeSection.scrollIntoView();
});



/* title buttons */

const fullStackButton = document.querySelector('#full-stack-title');
if(fullStackButton) fullStackButton.addEventListener('click', () => {
    suspendPointer();
    sectionWeb.scrollIntoView();
});

const blockchainButton = document.querySelector('#blockchain-title');
if(blockchainButton) blockchainButton.addEventListener('click', () => {
    suspendPointer();
    sectionBlockchain.scrollIntoView();
});

const systemButton = document.querySelector('#system-title');
if(systemButton) systemButton.addEventListener('click', () => {
    suspendPointer();
    sectionSystem.scrollIntoView();
});



/* other buttons */

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
});



/* helper functions */

// deactivates pointer-events for a brief time
let suspendPointer = function(interval) {
    for(const card of cards) card.parentElement.style.pointerEvents = "none";

    setTimeout(() => {
        for(const card of cards) card.parentElement.style.pointerEvents = "auto";
    }, (interval || 1000));
}