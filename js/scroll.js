// script for side-scrollers, vertical scrollers and checkpoint-scroller

const leftScrollers = document.querySelectorAll(".left-scroll");
const rightScrollers = document.querySelectorAll(".right-scroll");

// adding event listener to the scroll-left button
leftScrollers.forEach((leftScroll) => {

    // retrieving the needed elements
    const gallery = leftScroll.nextElementSibling;
    if(!gallery) {console.error('scroll script: gallery element not found'); return;}
    const galleryBounds = gallery.getBoundingClientRect();
    const cards = gallery.children;
    if(!cards) {console.error('scroll script: card elements not found'); return;}

    // hiding button as start (can't go left of the first card)
    leftScroll.classList.add('hidden');

    // handling left-scroll button press
    leftScroll.addEventListener("click", () => {
        for(const card of cards) {
            const cardBounds = card.getBoundingClientRect();
            if(card.nextElementSibling) {
                const nextCardBounds = card.nextElementSibling.getBoundingClientRect();
                if((cardBounds.left < galleryBounds.left) && (nextCardBounds.right > galleryBounds.left)) {
                    card.scrollIntoView();
                    leftScroll.parentElement.querySelector('.right-scroll').classList.remove('hidden');
                    if(!card.previousElementSibling) leftScroll.classList.add('hidden');
                    else leftScroll.classList.remove('hidden');
                    return;
                }
            }
        }
    });
});

// adding event listener to the scroll-right button
rightScrollers.forEach((rightScroll) => {

    // retrieving the needed elements
    const gallery = rightScroll.previousElementSibling;
    if(!gallery) {console.error('scroll script: gallery element not found'); return;}
    const galleryBounds = gallery.getBoundingClientRect();
    const cards = gallery.children;
    if(!cards) {console.error('scroll script: card elements not found'); return;}

    // hiding scroll button if the gallery only has one card
    if(cards.length == 1) rightScroll.classList.add('hidden');

    // handling right-scroll button press
    rightScroll.addEventListener("click", () => {
        for(const card of cards) {
            const cardBounds = card.getBoundingClientRect();
            if(card.previousElementSibling) {
                const prevCardBounds = card.previousElementSibling.getBoundingClientRect();
                if((cardBounds.right > galleryBounds.right) && (prevCardBounds.right <= galleryBounds.right)) {
                    card.scrollIntoView();
                    rightScroll.parentElement.querySelector('.left-scroll').classList.remove('hidden');
                    if(!card.nextElementSibling) rightScroll.classList.add('hidden');
                    else rightScroll.classList.remove('hidden');
                    return;
                }
            }
        }
    });
});