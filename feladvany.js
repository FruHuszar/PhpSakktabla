function mezokTakaritasa(mezok) {
    for (let i = 0; i < mezok.length; i++) {
        mezok[i].innerHTML = '<p></p>';
    }
}

//
function mezokKeverese(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const ideiglenes = lista[i];
        lista[i] = lista[j];
        lista[j] = ideiglenes;
    }
}

function kontrasztBeallitas(mezo, sakkBabu) {
    const korvonalasParok = { 
        '♟': '♙', '♞': '♘', '♝': '♗', '♜': '♖', '♛': '♕', '♚': '♔' 
    };
    
    const karakter = sakkBabu.innerText;
    const feherBabuE = sakkBabu.classList.contains('white-text');
    const feherMezoE = mezo.classList.contains('white');
    const feketeMezoE = mezo.classList.contains('black');

    // Ha fehér bábu van fehér mezőn
    if (feherBabuE === true && feherMezoE === true) {
        if (korvonalasParok[karakter]) {
            sakkBabu.innerText = korvonalasParok[karakter];
        }
        sakkBabu.classList.remove('white-text'); // Sötét körvonal kell
    } 
    
    // Ha sötét bábu van sötét mezőn
    if (feherBabuE === false && feketeMezoE === true) {
        if (korvonalasParok[karakter]) {
            sakkBabu.innerText = korvonalasParok[karakter];
        }
        sakkBabu.classList.add('white-text'); // Világos körvonal kell
    }
}

function babuLerakas(mezo, htmlSzoveg) {
    mezo.innerHTML = htmlSzoveg;
    const sakkBabu = mezo.querySelector('p');
    kontrasztBeallitas(mezo, sakkBabu);
}

function veletlenDbBabuLerakas(mezok, feherBabuKeszlet){
    const veletlenDarab = Math.floor(Math.random() * 2) + 2; 

    for (let i = 0; i < veletlenDarab; i++) {
        const index = Math.floor(Math.random() * feherBabuKeszlet.length);
        const kivalasztottBabu = feherBabuKeszlet[index];
        
        babuLerakas(mezok[i + 2], kivalasztottBabu);
        feherBabuKeszlet.splice(index, 1);
    }
}

function veletlenKarakter() {
    const feherBabuKeszlet = [
        '<p class="sakk-babu white-text">♛</p>', 
        '<p class="sakk-babu white-text">♜</p>', '<p class="sakk-babu white-text">♜</p>',
        '<p class="sakk-babu white-text">♝</p>', '<p class="sakk-babu white-text">♝</p>',
        '<p class="sakk-babu white-text">♞</p>', '<p class="sakk-babu white-text">♞</p>',
        '<p class="sakk-babu white-text">♟</p>', '<p class="sakk-babu white-text">♟</p>', 
        '<p class="sakk-babu white-text">♟</p>', '<p class="sakk-babu white-text">♟</p>'
    ];
    
    const mezok = Array.from(document.querySelectorAll('.grid-container .mezo'));
    
    mezokTakaritasa(mezok);
    mezokKeverese(mezok);
    babuLerakas(mezok[0], '<p class="sakk-babu">♚</p>');
    veletlenDbBabuLerakas(mezok, feherBabuKeszlet);
}
