// script for cards flipping animations and behavior

const flipButtons = document.querySelectorAll('.flip');

// adding event listener to buttons
flipButtons.forEach((button) => {

    button.addEventListener('click', () => {
        let card = button.parentElement.parentElement.parentElement;
        if(!card) {console.error('flip script: card element not found'); return;}
        let container = card.parentElement;
        if(!container) {console.error('flip script: container element not found'); return;}
        let gallery = container.parentElement;
        if(!gallery) {console.error('flip script: gallery element not found'); return;}

        card.classList.add('flipped');
        container.classList.add('selected');

        for(const cont of gallery.children) {
            if(cont != container) cont.classList.add('shadowed');
        };

        // container.addEventListener('mouseleave', () => {
        //     card.classList.remove('flipped');
        //     container.classList.remove('selected');
        // });

        // container.addEventListener('focusout', () => {
        //     card.classList.remove('flipped');
        //     container.classList.remove('selected');
        // });
    });
});