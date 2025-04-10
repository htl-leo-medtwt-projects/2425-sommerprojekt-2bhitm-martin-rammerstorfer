const D = document;
const R = D.querySelector(':root');
const C = console;

let darkMode = false;

function changeColorMode() {
    darkMode = !darkMode;

    setStyleColor('bg', darkMode ? '#112' :'white');
    setStyleColor('bg2', darkMode ? '#334' : '#eee');
    setStyleColor('text', darkMode ? 'white': 'black');
    // setStyleColor('accent1', darkMode ? '#d6a444' : '#d6a444');
    // setStyleColor('accent2', darkMode ? '#c1c730' : '#c1c730');
    // setStyleColor('accent3', darkMode ? '#2b53a7' : '#2b53a7');
    // setStyleColor('accent4', darkMode ? '#a71313' : '#a71313');

    // R.style.setProperty(`--image-bg`, `url(../img/${ darkMode ? 'space.jpg' : 'interior.jpeg' })`);

    D.body.style.backgroundImage = `url(img/${ darkMode ? 'space.jpg' : 'interior.jpeg' })`;

    // D.querySelector('#color_mode').innerHTML = darkMode ? '&#9788;' : '&#9789;';
}

function setStyleColor(property, color) {
    R.style.setProperty(`--color-${property}`, color);
}
