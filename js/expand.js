// script for expanding cards on button press

const expandButtons = document.querySelectorAll('.expand');

// adding event listener for the button-press event
if(expandButtons) expandButtons.forEach((button) => {

    button.addEventListener('click', () => {
        const card = button.parentElement.parentElement;
        if(!card) {console.error('expand script: card element not found'); return;}
        const container = card.parentElement;
        if(!container) {console.error('expand script: container element not found'); return;}
        const gallery = container.parentElement;
        if(!gallery) {console.error('expand script: gallery element not found'); return;}
        const exitButton = card.querySelector('.exit');
        const projTitle = card.querySelector('.project-title');
        const infoBanner = card.querySelector('.info-banner');

        // calling the card maximization function
        maximize(button, gallery, container, card, exitButton, projTitle, infoBanner);



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