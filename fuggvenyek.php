<?php
function sakktablaRajzolas(){
    echo '<div class="egymas-melle">';
    echo '<div class="oszlop">';
    echo '<div class="box"></div>';
    karakterKiir(49);
    echo '</div>';
    echo '<div class="grid-container">';
    karakterKiir(97);
    dobozokKiir();
    echo '</div>';
    echo '</div>';
}//sakktablarajzolas


function karakterKiir($szam){
    $karakter = chr($szam);
    for ($i=0; $i < 8; $i++) { 
        echo '<div class="box"><p>' . $karakter . '</p></div>';
        $szam += 1;
        $karakter = chr($szam);
    }
}

function dobozokKiir(){
    for ($j=0; $j < 8; $j++) {
        for ($i=0; $i < 8; $i++){
            $osztaly = (($i + $j) % 2 == 0) ? 'white' : 'black';
            echo '<div class="box mezo ' . $osztaly . '"></div>';
        }
    }
}

?>