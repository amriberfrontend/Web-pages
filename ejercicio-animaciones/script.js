const bouncingFox = document.getElementById("bouncing-fox")

// moveRight()
function moveRight() {
    let id = null;
    let posX = bouncingFox.offsetLeft;
    clearInterval(id);
    id = setInterval(frame, 0);

    function frame() {
        if (posX >= window.innerWidth - 108) {
            clearInterval(id);
        } else {
            posX += 3;
            bouncingFox.style.left = posX + "px";
        }
    }
}

