function controllaParolaPalindroma(word){
    let palindroma = true;
    // confrontare ogni singola lettere della parola (FOR)
    for(i = 0; i < word.length; i++){

        if(word[i] === word[word.length -1 - i]){  //se la prima lettera è uguale all'ultima, la seconda è uguale alla penultima e così via -> palindroma (IF)
            palindroma = true;
            console.log(palindroma)
        } else {  // altrimenti -> non palindroma (ELSE)
            palindroma = false;
            console.log(palindroma);
        }
    }


    if(palindroma){
        console.log("La parola che ha scritto è palindroma");
    } else {
        console.log("La parola che hai scritto non è palindroma");
    }
}