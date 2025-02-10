// quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date.



const d = new Date()
console.log(d)
const h = d.getMinutes()
console.log(h)
const minute_left = 60 - h
alert(`Mancano ${minute_left} minuti allo scoccare della prossima ora`)