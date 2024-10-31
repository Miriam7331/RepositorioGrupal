// Tu reto es retornar Tienes el AS si dentro de array de strings tienes la palabra AS y si no tienes el AS 
//entonces deberás retornar un No, tienes el AS, para solucionarlo vas a encontrar una función llamada findAs que recibe un parámetro de entrada:

// numbers: Un array de strigs con nombres de cartas de Poker.
// Dentro del cuerpo de la función findAs debes escribir tu solución.

let entrada1 = ['diamonds', 'hearts', 'spades', 'AS']
let entrada2 = ['diamonds', 'hearts', 'spades']

export function findAs(deck) {
  return deck.includes('AS') ? 'Tienes el AS' : 'No tienes el AS';
}

//Output1: 'Tienes el AS'
//Output2:'No, tienes el AS'


console.log(findAs(entrada1));
console.log(findAs(entrada2));