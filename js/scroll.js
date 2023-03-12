// script for side-scrollers, vertical scrollers and checkpoint-scroller

const leftScrollers = document.querySelectorAll(".left-scroll");
const rightScrollers = document.querySelectorAll(".right-scroll");

// adding event listener to the scroll-left button
leftScrollers.forEach((leftScroll) => {

    leftScroll.addEventListener("click", () => {
        const gallery = leftScroll.nextElementSibling;
        if(!gallery) {console.error('scroll script: gallery element not found'); return;}
        const galleryBounds = gallery.getBoundingClientRect();
        const cards = gallery.children;
        if(!cards) {console.error('scroll script: card elements not found'); return;}

        for(const card of cards) {
            const cardBounds = card.getBoundingClientRect();
            if(card.nextElementSibling) {
                const nextCardBounds = card.nextElementSibling.getBoundingClientRect();
                if((cardBounds.left < galleryBounds.left) && (nextCardBounds.right > galleryBounds.left)) {
                    card.scrollIntoView();
                    return;
                }
            }
        }
    });
});

// adding event listener to the scroll-right button
rightScrollers.forEach((rightScroll) => {
    const gallery = rightScroll.previousElementSibling;
    if(!gallery) {console.error('scroll script: gallery element not found'); return;}
    const galleryBounds = gallery.getBoundingClientRect();
    const cards = gallery.children;
    if(!cards) {console.error('scroll script: card elements not found'); return;}

    rightScroll.addEventListener("click", () => {
        for(const card of cards) {
            const cardBounds = card.getBoundingClientRect();
            if(card.previousElementSibling) {
                const prevCardBounds = card.previousElementSibling.getBoundingClientRect();
                if((cardBounds.right > galleryBounds.right) && (prevCardBounds.right < galleryBounds.right)) {
                    card.scrollIntoView();
                    return;
                }
            }
        }
    });
});