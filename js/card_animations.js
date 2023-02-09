// script for card animations and behavior

const cards = document.querySelectorAll('.card');

// code for adding all cards animations
if(cards) cards.forEach((card) => {

    const cardContainer = card.parentElement;
    if(!cardContainer) {console.error('card script: container element not found'); return;}
    const gallery = cardContainer.parentElement;
    if(!gallery) {console.error('card script: gallery element not found'); return;}
    const exitButton = card.querySelector('.exit');
    if(!exitButton) {console.error('card script: exit button not found'); return;}
    const projTitle = card.querySelector('.project-title');
    if(!projTitle) {console.error('card script: project title element not found'); return;}
    const infoBanner = card.querySelector('.info-banner');
    if(!infoBanner) {console.error('card script: info banner element not found'); return;}
    const expandButton = card.querySelector('.expand');
    if(!expandButton) {console.error('card script: expand button element not found'); return;}
    const flipButton = card.querySelector('.flip');
    if(!flipButton) {console.error('card script: flip button element not found'); return;}



    flipButton.addEventListener('click', () => {
        
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


            // adding event listener for the expand button
            expandButton.addEventListener('click', () => {

                // calling the card maximization function
                maximize(expandButton, gallery, cardContainer, card, exitButton, projTitle, infoBanner);

                // adding event listener to ESCAPE key-press
                document.addEventListener('keydown', function closeCard(e) {
                    if(e.key == 'Escape') {
                        document.removeEventListener('keydown', closeCard);
                        redimension(expandButton, cardContainer, card, gallery, exitButton, projTitle, infoBanner);
                        if(cardContainer.classList.contains('selected')) handleUnflipBehavior(cardContainer, card, gallery);
                    }
                });
                // adding event listener to EXIT button-press
                exitButton.addEventListener('click', () => {
                    redimension(expandButton, cardContainer, card, gallery, exitButton, projTitle, infoBanner);
                    if(cardContainer.classList.contains('selected')) handleUnflipBehavior(cardContainer, card, gallery);
                });
            });
        });
    });
});



// Function handling the unflipping of the card
function handleUnflipBehavior(cardContainer, card, gallery) {
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


// function handling card maximization
function maximize(button, gallery, container, card, exitButton, projTitle, infoBanner) {
    button.classList.add('hidden');
    for(const cont of gallery.children) {
        if(cont != container) cont.classList.add('minimized');
        cont.classList.remove('coverable');
    }

    container.classList.add('maximized');
    container.classList.remove('hoverable');
    card.classList.add('flipped');
    exitButton.classList.remove('invisible');
    projTitle.classList.remove('hidden');
    infoBanner.classList.remove('hidden');
}


// function handling card re-dimentioning
function redimension(button, container, card, gallery, exitButton, projTitle, infoBanner) {
    exitButton.classList.add('invisible');
    for(const cont of gallery.children) {
        cont.classList.remove('minimized');
        cont.classList.add('coverable');
    }
    container.classList.remove('maximized');
    container.classList.add('hoverable');
    card.classList.remove('flipped');
    projTitle.classList.add('hidden');
    infoBanner.classList.add('hidden');
    button.classList.remove('hidden');
}