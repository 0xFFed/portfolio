/* Handles mobile visualization problems */

const setPageHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', setPageHeight)
setPageHeight()