console.log('people.js')

// 3 - people.js
// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
// All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto

const namesObj = require('./names')
const hobbyObj = require('./hobbies')

// console.log(namesObj, hobbyObj)

const fullName = namesObj('Giulia', 'Moiraghi');
console.log(fullName)

const fullHobby = hobbyObj('Videogames', 'Sailor Moon', 'Sport');
console.log(fullHobby)

