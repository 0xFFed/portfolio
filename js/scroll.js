// scripts for side-scrollers, vertical scrollers and checkpoint-scroller

const leftScrollers = document.querySelectorAll(".left-scroll");
const rightScrollers = document.querySelectorAll(".right-scroll");

// adding event listener to the scroll-left button
leftScrollers.forEach((leftScroll) => {
    leftScroll.addEventListener("click", () => {
        const gallery = leftScroll.nextElementSibling;
        const galleryBounds = gallery.getBoundingClientRect();
        const cards = gallery.children;
        for(const card of cards) {
            const cardBounds = card.getBoundingClientRect();
            if(card.nextElementSibling) {
                const nextCardBounds = card.nextElementSibling.getBoundingClientRect();
                if((cardBounds.left < galleryBounds.left) && (nextCardBounds.right >= galleryBounds.left)) {
                    card.scrollIntoView();
                    return;
                }
            }
        }
    });
});

// adding event listener to the scroll-right button
rightScrollers.forEach((rightScroll) => { 
    rightScroll.addEventListener("click", () => {
        const gallery = rightScroll.previousElementSibling;
        const galleryBounds = gallery.getBoundingClientRect();
        const cards = gallery.children;
        for(const card of cards) {
            console.log("fired first");
            const cardBounds = card.getBoundingClientRect();
            if(card.previousElementSibling) {
                console.log("fired second");
                const prevCardBounds = card.previousElementSibling.getBoundingClientRect();
                if((cardBounds.right > galleryBounds.right) && (prevCardBounds.right <= galleryBounds.right)) {
                    card.scrollIntoView();
                    return;
                }
            }
        }
    });
});