function enterFullscreen() {
    let canvas = document.getElementById("#canvas");
    if (!canvas) {
        console.error("Canvas da Unity não encontrado!");
        return;
    }

    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
    }
}

// Define a função globalmente
window.enterFullscreen = enterFullscreen;
