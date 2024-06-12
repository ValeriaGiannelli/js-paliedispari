// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// prima variabile: chiedo all'utente di inserire una parola
const userWord = prompt("scrivi una parola:");
console.log(userWord);

console.log(userWord.length);

// controllo se posso usare questo per il ciclo for
// console.log(userWord[0]);


/********* check su come confrontare le lettere con le variabili:
i=0;
console.log(userWord[i]);

console.log(userWord[userWord.length -1 - i]); ***********/


// funzione che mi guarda se è palindroma e riporta il risultato:

// let palindroma = true;
//     // confrontare ogni singola lettere della parola (FOR)
// for(i = 0; i < userWord.length; i++){

//     if(userWord[i] === userWord[userWord.length -1 - i]){  //se la prima lettera è uguale all'ultima, la seconda è uguale alla penultima e così via -> palindroma (IF)
//         palindroma = true;
//         console.log(palindroma)
//     } else {  // altrimenti -> non palindroma (ELSE)
//         palindroma = false;
//         console.log(palindroma);
//     }
// }


// if(palindroma){
//     console.log("La parola che ha scritto è palindroma");
// } else {
//     console.log("La parola che hai scritto non è palindroma");
// }


let wordPalindroma = controllaParolaPalindroma(userWord);
    
    
   