// script for cards flipping animations and behavior

const flipButtons = document.querySelectorAll('.flip');

// adding event listener to buttons
flipButtons.forEach((button) => {

    button.addEventListener('click', () => {
        let card = button.parentElement.parentElement.parentElement;
        if(!card) {console.error('flip script: card element not found'); return;}
        let cardContainer = card.parentElement;
        if(!cardContainer) {console.error('flip script: container element not found'); return;}
        let gallery = cardContainer.parentElement;
        if(!gallery) {console.error('flip script: gallery element not found'); return;}


        // Function handling the unflipping of the card
        function handleUnflipBehavior() {
            if(cardContainer.classList.contains('selected') && !cardContainer.classList.contains('maximized')) {
                card.classList.remove('flipped-zoomed');
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

        
        // adding flipped status
        card.classList.add('flipped-zoomed');
        cardContainer.classList.add('selected');
        cardContainer.addEventListener('animationend', function firstAnimationEvent() {
            for(const cont of gallery.children) {
                if(cont != cardContainer) cont.classList.add('shadowed');
            }

            // adding event listener for mouse-out event
            cardContainer.addEventListener('mouseleave', function mouseLeaveEvent() {
                if(!cardContainer.classList.contains('maximized')) {
                    this.removeEventListener('mouseleave', mouseLeaveEvent);
                    handleUnflipBehavior();
                }
            });

            // adding event listener for click-out event
            document.addEventListener('click', function focusOutEvent(event) {
                if(!(cardContainer.contains(event.target) || cardContainer.classList.contains('maximized'))) {
                    handleUnflipBehavior();
                    this.removeEventListener('click', focusOutEvent);
                }
            });
        });
    });
});