// Ticket Price script

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km(0.21 € al km)
// - va applicato uno sconto del 20 % per i minorenni
// - va applicato uno sconto del 40 % per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// - prompt 1 : Distance in KM
const user_distance = Number(prompt("Quanti chilometri vuoi percorrere? "));
console.log(user_distance);

// - prompt 2 : Passegenger's age

const user_age = Number(prompt("Quanti anni hai? "));
console.log(user_age);


// Define price variables:

// Define base price
const base_price = user_distance * 0.21
console.log(base_price);

// Define price if minor
const minor_discount = (base_price / 100) * 20
console.log(minor_discount.toFixed(2));

const minor_price = base_price - minor_discount
console.log(minor_price.toFixed(2));

// Define price if over 65
const over65_discount = (base_price / 100) * 40
console.log(over65_discount.toFixed(2));

const over65_price = base_price - over65_discount
console.log(over65_price.toFixed(2));

// Final price calculation

if (user_age <= 17) {
  alert(`Il prezzo del tuo biglietto è ${minor_price.toFixed(2)}€`)
}
else if (user_age >= 65) {
  alert(`Il prezzo del tuo biglietto è ${over65_price.toFixed(2)}€`)
}
else {
  alert(`Il prezzo del tuo biglietto è ${base_price}€`)
}





