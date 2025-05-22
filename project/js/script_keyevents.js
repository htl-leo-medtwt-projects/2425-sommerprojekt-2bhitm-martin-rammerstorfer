
/***********************************
 * KEY EVENTS
 ***********************************/
let KEY_EVENTS = {
    left: false,
    right: false,
    up: false,
    down: false,
    space: false,
    shift: false
}
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    let key = e.key.toLowerCase();
    if (key === "a") {
        KEY_EVENTS.left = true;
    }
    if (key === "w") {
        KEY_EVENTS.up = true;
    }
    if (key === "d") {
        KEY_EVENTS.right = true;
    }
    if (key === "s") {
        KEY_EVENTS.down = true;
    }
    if (key === "space") {
        KEY_EVENTS.space = true;
    }
    KEY_EVENTS.shift = e.shiftKey;
    // if (TITLE_SCREEN.username.style.display == 'inline-block') {
    //     TITLE_SCREEN.username.focus();
    // }
}
function keyListenerUp(e) {
    let key = e.key.toLowerCase();
    if (key === "a") {
        KEY_EVENTS.left = false;
    }
    if (key === "w") {
        KEY_EVENTS.up = false;
    }
    if (key === "d") {
        KEY_EVENTS.right = false;
    }
    if (key === "s") {
        KEY_EVENTS.down = false;
    }
    if (e.code === "Space") {
        KEY_EVENTS.space = false;
    }
    KEY_EVENTS.shift = e.shiftKey;
    if (key === "f") {
        if (fullscreen) closeFullscreen();
        else openFullscreen();
    }
    if (key === "m") {
        toggleAudio();
    }
    if (key === "escape") {
        if (fullscreen) closeFullscreen();
    }
}
