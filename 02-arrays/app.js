
let frutas = ["limón","mango","fresa"]


// console.log(frutas) //3
// console.log(frutas.push("banano")) //4
// console.log(frutas)
// console.log(frutas.unshift("coco")) //5
// console.log(frutas)

/* ctrl + }    (múltiples comentarios de una sola línea) */
/* alt + shift + a    (comentario de bloque) */

// console.log(frutas)
// frutas = ["moras"]
// console.log(frutas)

// console.log(personajes)
// console.log(personajes[1])
// personajes[1] = "Jerry"
// console.log(personajes[1])

// let perro = {
//   nombre: "Robert",
//   ladrar: () => {
//     return "guau"
//   }
// }

// function saludar (){
//   "alsldklaskd"
// }


// let array = {
//   nombre: "Robert",
//   push: () => {
//     return "guau"
//   },
//   shift: () => {
//     return "guau"
//   }
// }

// console.log(array.push())


//map
/* const personajes = ["Rick","Morty","Beth"]

personajes.map( char => {
  console.log(char + "🎅🏻")
} ) */


//sort
const characters = [
  "Rick Sanchez",
  "Morty Smith",
  "Summer Smith",
  "Beth Smith",
  "Jerry Smith",
  "Mr. Meeseeks",
  "Birdperson",
  "Squanchy",
  "Evil Morty",
  "Pickle Rick",
  "Alvaro",
  "Andrés"
];
/* let ordenado = characters.sort()
console.log(ordenado) */

/* 
  < 0 : a va antes que b
  < 0 : a va después que b
    0 : Mantiene su orden relativo
*/

const numeros = [42, 7, 19, 3, 88, 15, 1, 57, 23, 9, 74, 31, 6, 50];
let numOrdenados = numeros.sort( (a,b) => a - b )
console.log(numOrdenados)