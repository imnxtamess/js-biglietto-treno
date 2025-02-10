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

// Define base price
const base_price = user_distance * 0.21
console.log(base_price);
