// script for expanding cards on button press

const expandButtons = document.querySelectorAll('.expand');

// adding event listener for the button-press event
if(expandButtons) expandButtons.forEach((button) => {

    button.addEventListener('click', () => {
        const card = button.parentElement.parentElement;
        if(!card) {console.error('expand script: card element not found'); return;}
        const cardContainer = card.parentElement;
        if(!cardContainer) {console.error('expand script: container element not found'); return;}
        const gallery = cardContainer.parentElement;
        if(!gallery) {console.error('expand script: gallery element not found'); return;}
        const exitButton = card.querySelector('.exit');
        if(!exitButton) {console.error('expand script: exit button not found'); return;}
        const projTitle = card.querySelector('.project-title');
        if(!projTitle) {console.error('expand script: project title element not found'); return;}
        const infoBanner = card.querySelector('.info-banner');
        if(!infoBanner) {console.error('expand script: info banner element not found'); return;}

        // calling the card maximization function
        if(cardContainer.classList.contains('selected')) maximize(button, gallery, cardContainer, card, exitButton, projTitle, infoBanner);
        else return;



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


            // adding event listener to ESCAPE key-press
            document.addEventListener('keydown', function closeCard(e) {
                if(e.key == 'Escape') {
                    document.removeEventListener('keydown', closeCard);
                    redimension(button, container, card, gallery, exitButton, projTitle, infoBanner);
                }
            });


            // adding event listener to EXIT button-press
            exitButton.addEventListener('click', () => {
                redimension(button, container, card, gallery, exitButton, projTitle, infoBanner);
            });
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
    });
});