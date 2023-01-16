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
        const leftScroll = gallery.previousElementSibling;
        const rightScroll = gallery.nextElementSibling;
        if(!leftScroll || ! rightScroll) {console.error('expand script: scroll buttons not found'); return;}

        button.classList.add('hidden');

        // container.style.transform = 'translate('+distanceFromCenter+'px, 0)';
        // gallery.classList.add('no-padding');
        for(const cont of gallery.children) {
            if(cont != container) cont.classList.add('hidden');
        }
        container.classList.add('maximized');
        container.classList.remove('hoverable');
        card.classList.add('flipped');
        container.addEventListener('animationend', function onAnimation() {
            container.removeEventListener('animationend', onAnimation);
            container.classList.add('centered');
        });

        console.log

        document.addEventListener('keydown', function closeCard(e) {
            if(e.key == 'Escape') {
                console.log("Escape key pressed");
                button.classList.remove('hidden');
                for(const cont of gallery.children) cont.classList.remove('hidden');
                container.classList.remove('maximized');
                container.classList.add('hoverable');
                card.classList.remove('flipped');
                container.classList.remove('centered');
            }
        });
    });
});