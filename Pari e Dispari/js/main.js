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

// quarta variabile: fare la somma dei due numeri e controllare che sia pari o dispari tramite UNA funzione

let result = sumOddOrEven(userNum, pcNum);
console.log(result);

// il suo risultato lo confronto con l'input della persona


let whoWin = result ===userChoice ? "Hai vinto!" : "Ha vinto il PC";
console.log(whoWin);