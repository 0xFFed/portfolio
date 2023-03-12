// script for card animations and behavior

const cards = document.querySelectorAll('.card');



// code for adding all cards animations
if(cards) cards.forEach((card) => {

    const cardContainer = card.parentElement;
    if(!cardContainer) {console.error('card script: container element not found'); return;}
    const gallery = cardContainer.parentElement;
    if(!gallery) {console.error('card script: gallery element not found'); return;}
    const flipButton = card.querySelector('.flip');
    if(!flipButton) {console.error('card script: flip button element not found'); return;}
    const unflipButton = card.querySelector('.unflip-button');
    if(!unflipButton) {console.error('card script: unflip button element not found'); return;}
    const scrollButtons = gallery.parentElement.querySelectorAll('.side-scroll');
    if(!scrollButtons) {console.error('card script: scroll buttons elements not found'); return;}


    // code for animating the card hover
    cardContainer.addEventListener('mouseover', function cardMouseOver() {
        cardContainer.classList.add('highlighted');
    });
    cardContainer.addEventListener('mouseleave', function cardMouseLeave() {
        cardContainer.classList.remove('highlighted');
    });



    flipButton.addEventListener('click', () => {
        
        // adding flipped status
        card.classList.add('flipped');
        cardContainer.classList.add('selected');
        console.log(scrollButtons); // TODO REMOVE
        for(const button of scrollButtons) button.style.visibility = "hidden";
        cardContainer.addEventListener('animationend', function firstAnimationEvent() {
            for(const cont of gallery.children) {
                if(cont != cardContainer) cont.classList.add('shadowed');
            }

            // adding event listener for mouse-out event
            cardContainer.addEventListener('mouseleave', function mouseLeaveEvent() {
                this.removeEventListener('mouseleave', mouseLeaveEvent);
                handleUnflipBehavior(cardContainer, card, gallery, scrollButtons);
            });
            // adding event listener for click-out event
            cardContainer.addEventListener('focusout', function focusoutEvent(e) {
                if(!cardContainer.contains(e.relatedTarget)) {
                    this.removeEventListener('focusoutEvent', focusoutEvent);
                    handleUnflipBehavior(cardContainer, card, gallery, scrollButtons);
                }
            });
            // adding event listener for the unflip button
            unflipButton.addEventListener('click', () => {
                handleUnflipBehavior(cardContainer, card, gallery, scrollButtons);
            });
        });
    });
});



// Function handling the unflipping of the card
function handleUnflipBehavior(cardContainer, card, gallery, scrollButtons) {
    if(cardContainer.classList.contains('selected')) {
        card.classList.remove('flipped');
        cardContainer.classList.add('unselected');
        cardContainer.addEventListener('animationend', function secondAnimationEvent() {
            this.removeEventListener('animationend', secondAnimationEvent);
            for(const button of scrollButtons) button.style.visibility = "visible";
            for(const cont of gallery.children) {
                cont.classList.remove('shadowed');
            }
            cardContainer.classList.remove('selected');
            cardContainer.classList.remove('unselected');
        });
    }
}