// pari o dispari:
// chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// tools
// - prompt per chiedere il valore all'utente
// - prompt per l'inserimento del numero
// - const o let
// - math random, math floor
// - if else
// - % modulus operator for the remainder
// - console log del risultato

// preparazione


// raccolta dati

const user_choice = prompt("Scegli pari o dispari, esempio [pari,dispari]");
console.log(user_choice);

const user_number = Number(prompt("Inserire un valore numerico compreso tra 1 e 9, esempio [1, 2, 3, ecc..]"));
console.log(user_number);

// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 

const pc_number = Math.floor(Math.random() * 9) + 1;
console.log(pc_number);


// Somma il numero dell'utente con il numero del PCà

const sum = user_number + pc_number
console.log(sum);


// Verificare se il numero è pari e se l'utente ha scelto pari dichiarare il vincitore, altrimenti ha vinto il PC

const even = (sum % 2) == 0
console.log(even);

const uneven = (sum % 2) == 1
console.log(uneven);


if (user_choice === ("pari") && even == true) {
  console.log(`Hai vinto la somma è pari (${sum})`);
}
else if (user_choice === ("pari") && uneven == true) {
  console.log(`Hai perso la somma è dispari (${sum})`);
}

if (user_choice === ("dispari") && even == true) {
  console.log(`Hai perso la somma è pari (${sum})`);
}
else if (user_choice === ("dispari") && uneven == true) {
  console.log(`Hai vinto la somma è dispari (${sum})`);
}

