let darkMode = sessionStorage.getItem('darkMode') !== 'true';
changeColorMode();

function changeColorMode() {
    darkMode = !darkMode;
    
    sessionStorage.setItem('darkMode', darkMode);

    setStyleColor('bg', darkMode ? '#112' :'white');
    setStyleColor('bg2', darkMode ? '#223' : '#eee');
    setStyleColor('text', darkMode ? 'white': 'black');
    setStyleColor('accent2', darkMode ? '#90a91f' : '#c1c730');
    setStyleColor('link', darkMode ? '#558bff' : '#2b53a7');

    document.body.style.backgroundImage = `url(img/${ darkMode ? 'space.jpg' : 'interior.jpeg' })`;
}

function setStyleColor(property, color) {
    document.querySelector(':root').style.setProperty(`--color-${property}`, color);
}
