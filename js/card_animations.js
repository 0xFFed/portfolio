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
        cardContainer.addEventListener('animationend', function firstAnimationEvent() {
            for(const cont of gallery.children) {
                if(cont != cardContainer) cont.classList.add('shadowed');
            }

            // adding event listener for mouse-out event
            cardContainer.addEventListener('mouseleave', function mouseLeaveEvent() {
                if(!cardContainer.classList.contains('maximized')) {
                    this.removeEventListener('mouseleave', mouseLeaveEvent);
                    handleUnflipBehavior(cardContainer, card, gallery);
                }
            });
            // adding event listener for click-out event
            cardContainer.addEventListener('focusout', function focusoutEvent(e) {
                if(!cardContainer.contains(e.relatedTarget)) {
                    if(!cardContainer.classList.contains('maximized')) {
                        this.removeEventListener('focusoutEvent', focusoutEvent);
                        handleUnflipBehavior(cardContainer, card, gallery);
                    }
                }
            });
        });
    });
});



// Function handling the unflipping of the card
function handleUnflipBehavior(cardContainer, card, gallery) {
    if(cardContainer.classList.contains('selected') && !cardContainer.classList.contains('maximized')) {
        card.classList.remove('flipped');
        cardContainer.classList.add('unselected');
        cardContainer.addEventListener('animationend', function secondAnimationEvent() {
            this.removeEventListener('animationend', secondAnimationEvent);
            for(const cont of gallery.children) {
                cont.classList.remove('shadowed');
            }
            cardContainer.classList.remove('selected');
            cardContainer.classList.remove('unselected');
        });
    }
}