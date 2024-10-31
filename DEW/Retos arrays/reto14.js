// Dado un array de strings tu reto es retornar un string en donde 
//cada elemento del array esté separado por comas, para solucionarlo
// vas a encontrar una función llamada joinString que recibe un 
//parámetro de entrada:

// words: Un array de strigs.
// Dentro del cuerpo de la función joinString debes escribir tu solución.

export function joinString(words) {
  return words.join(', ');
}

let Input = ["amor", "sol", "piedra", "día"]

// Output = "amor,sol,piedra,día"  

console.log(joinString(Input));

