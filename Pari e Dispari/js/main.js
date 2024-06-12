// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// prima variabile: chiedo alla persona se scegli pari o dispari con un prompt
const userChoice = prompt("Scrivi se vuoi pari o dispari:");
console.log(userChoice);

// seconda variabile: chiedo alla persona di inserire un numero da 1 a 5 col prompt
const userNum = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log(userNum);


// terza variabile: un numero random (prendo la funzione) per il PC
let pcNum = generateRandomNum(1, 5);//inserisco la funzione
console.log(pcNum);

// quarta variabile: sarà la somma che sarà calcolata con una seconda funzione che mi prenderà il numero della persona e il numero del pc
let sum = sumTwoNum(userNum, pcNum);
console.log(sum);


// se la somma === prima variabile allora persona vince, altrimenti ha vinto il PC:
// guardo se la somma è pari o dispari
let result;
if(sum % 2 === 0){
    result = "pari";
    console.log(result);
} else {
    result ="dispari";
    console.log(result);
}

// il suo risultato lo confronto con l'input della persona
if(result === userChoice){
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il PC");
}