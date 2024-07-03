//il programma deve chiedere all'utente il numero di chilometri e l'età
//il prezzo è di 0.21€ al km
//sconto 20% minorenni
//sconto 40% over 65

//richiesta numero km
let kmPasseggero = prompt('Inserisci il numero di Km che devi percorrere');
kmPasseggero = parseInt(kmPasseggero)
console.log(kmPasseggero + ' km');


let etaPasseggero = prompt('Inserisci qui la tua età');
etaPasseggero = parseInt(etaPasseggero)
console.log(etaPasseggero + ' anni');

let prezzoBase = kmPasseggero * 0.21
prezzoBase = parseInt(prezzoBase)
console.log(prezzoBase + '€ prezzo base che il passeggero deve pagare');

//100% ==> 1 (100 / 100)
//50% ==> 0.5 (50 / 100)
//20% ==> 0.2 (20 / 100)
//150% ==> 1.5 (150 / 100)

//Prezzo under 18 con sconto applicato
let prezzoUnder18 = prezzoBase - (prezzoBase * 0.2)
prezzoUnder18 = prezzoUnder18.toFixed(2) //stringa

//Prezzo Over 65 con sconto applicato
let prezzoOver65 = prezzoBase - (prezzoBase * 0.4)
prezzoOver65 = prezzoOver65.toFixed(2) //stringa

let prezzoBaseAdulto = prezzoBase.toFixed(2) //stringa


if(etaPasseggero < 18) {
    console.log(prezzoUnder18 + '€ prezzo con sconto del 20% per Under 18');
} else if(etaPasseggero > 65) {
    console.log(prezzoOver65 + '€ prezzo con sconto del 40% per Over65');
} else {
    console.log(prezzoBaseAdulto +'€ prezzo non scontato per tutti i passeggeri maggiorenni e con un\' età inferiore ai 65 anni')
}

const titleElement =document.getElementById('prezzo');
