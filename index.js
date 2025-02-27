function enterFullscreen() {
    let canvas = document.getElementById("#canvas");
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) { // Firefox
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari, Opera
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) { // IE/Edge
        canvas.msRequestFullscreen();
    }
}

function unityFullscreen() {
    if (typeof gameInstance !== 'undefined' && gameInstance) {
        enterFullscreen();
    }
}

// Disponibilizar para o Unity chamar
window.unityFullscreen = unityFullscreen;
