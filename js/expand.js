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

        const contLeft = container.style.left;
        const contTop = container.style.top;
        container.classList.add('maximized');
        container.style.left = contLeft;
        container.style.top = contTop;

        // setInterval(() => {
        //     if(card.getBoundingClientRect().left < gallery.getBoundingClientRect().left) {
        //         console.log("card left bound: "+card.getBoundingClientRect().left)
        //         leftScroll.click();
        //     }
        //     else if(card.getBoundingClientRect().right > gallery.getBoundingClientRect().right) {
        //         console.log("card right bound: "+card.getBoundingClientRect().right)
        //         rightScroll.click();
        //     }
        // }, 500);
    });
});