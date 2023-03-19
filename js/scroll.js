// script for side-scrollers, vertical scrollers and checkpoint-scroller

const galleryFrame = document.querySelectorAll('.gallery-frame');

if(galleryFrame && galleryFrame.length != 0) galleryFrame.forEach((frame) => {

    // retrieving scroll buttons, gallery and cards
    const leftScroll = frame.querySelector('.left-scroll');
    if(!leftScroll) {console.error('scroll script: left scroll element not found'); return;}
    const rightScroll = frame.querySelector('.right-scroll');
    if(!rightScroll) {console.error('scroll script: right scroll element not found'); return;}
    const gallery = frame.querySelector('.gallery');
    if(!gallery) {console.error('scroll script: gallery element not found'); return;}
    const cards = gallery.querySelectorAll('.card-container');
    if(!cards) {console.error('scroll script: card elements not found'); return;}

    // retrieving page-center median
    const medianV = document.querySelector('#median-v');
    if(!medianV) {console.error('scroll script: vertical median element not found'); return;}

    // we always start at the left-most card, so we hide the left-scroll button at beginning
    leftScroll.classList.add('hidden');
    // if we have no cards or only one card, we cannot scroll left, so we hide the left-scroll button
    if(cards.length <= 1) rightScroll.classList.add('hidden');


    // left-scroll button press
    leftScroll.addEventListener('click', () => {
        for(const card of cards) {
            // getting card coordinates
            const cardLeft = card.getBoundingClientRect().left;
            const cardRight = card.getBoundingClientRect().right;

            // getting page center coordinates
            // this has to be done each time because of change of orientation
            const pageCenter = medianV.getBoundingClientRect().left;

            // checking if the card is currently displayed
            if((cardLeft < pageCenter) && (cardRight > pageCenter)) {
                // getting the next card element and scrolling to it, removing the button if it's the left-most one
                const nextCard = card.previousElementSibling;

                if(!nextCard) return;   // the current card was the left-most
                else {
                    // if the next card is the left-most, hide the left-scrolling button
                    if(!nextCard.previousElementSibling) leftScroll.classList.add('hidden');
                    nextCard.scrollIntoView();  // scroll to the next card
                    rightScroll.classList.remove('hidden');     // show the right-scroll button if it was hidden
                }

                return;
            }
        }
    });


    // right-scroll button press
    rightScroll.addEventListener('click', () => {
        for(const card of cards) {
            // getting card coordinates
            const cardLeft = card.getBoundingClientRect().left;
            const cardRight = card.getBoundingClientRect().right;

            // getting page center coordinates
            // this has to be done each time because of change of orientation
            const pageCenter = medianV.getBoundingClientRect().left;

            // checking if the card is currently displayed
            if((cardLeft < pageCenter) && (cardRight > pageCenter)) {
                // getting the next card element and scrolling to it, removing the button if it's the right-most one
                const nextCard = card.nextElementSibling;

                if(!nextCard) return;   // the current card was the right-most
                else {
                    // if the next card is the right-most, hide the right-scrolling button
                    if(!nextCard.nextElementSibling) rightScroll.classList.add('hidden');
                    nextCard.scrollIntoView();  // scroll to the next card
                    leftScroll.classList.remove('hidden');     // show the right-scroll button if it was hidden
                }

                return;
            }
        }
    });


    // manual scroll event, to properly visualize buttons in case of manual scrolling
    let timer = null;
    gallery.addEventListener('scroll', () => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            
            // check which card is intersecting
            for(const card of cards) {
                const cardLeft = card.getBoundingClientRect().left;
                const cardRight = card.getBoundingClientRect().right;
                const pageCenter = medianV.getBoundingClientRect().left;
                if((cardLeft < pageCenter) && (cardRight > pageCenter)) {
                    // check if it's the left-most card, and in case hide the left-scroll button
                    if(!card.previousElementSibling) leftScroll.classList.add('hidden');
                    else leftScroll.classList.remove('hidden');

                    // check if it's the right-most card, and in case hide the right-scroll button
                    if(!card.nextElementSibling) rightScroll.classList.add('hidden');
                    else rightScroll.classList.remove('hidden');
                }
            }
        }, 50);
    })
});