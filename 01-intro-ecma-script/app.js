import { saludar, ladrar } from "./funciones"

//console.log("Intro a ECMAScript")

//Symbol

let result = Symbol("x") == Symbol("x")
//console.log(result)

//Ejemplo práctico del Symbol
const ID_INTERNO = Symbol("idInterno")

const usuario = {
  nombre: "pepe",
  edad: 30,
  [ID_INTERNO]: 12345 //Propiedad única
}

//console.log(usuario[ID_INTERNO])
/* for (let key in usuario){
  console.log(key)
} */

//Desestructurar
/* const { nombre, edad } = usuario
console.log(nombre) */