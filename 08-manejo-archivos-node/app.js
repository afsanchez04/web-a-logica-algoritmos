
const fs = require("fs")

//Leer archivo (Asíncrono)
//1. Ruta del archivo
//2. Set de caracteres UTF-8
//3. Función se va a ejecutar después del tiempo que tome la función en resolverse
/* fs.readFile("index.html","UTF-8", (err, contenido) => {
  if(err){
    console.log(err)
  }else{
    console.log(contenido)
  }
}) */

//Renombrar un archivo
//1. Ruta del archivo
//2. Nuevo nombre del archivo
//3. Función se va a ejecutar después del tiempo que tome la función en resolverse
/* fs.rename("index.html","main.html", (err) => {
  if(err){
    throw err
  }

  console.log("Nombre modificado")

}) */

//Agregar contenido al final del archivo
//1. Ruta del archivo
//2. Nuevo contenido
//3. Función se va a ejecutar después del tiempo que tome la función en resolverse
/* fs.appendFile( "main.html", "<p>Hola Node</p>", (err) => {
  if(err){
    throw err
  }

  console.log("Contenido modificado")

} ) */

//Cuando queremos reemplazar todo el contenido del archivo
//1. Ruta del archivo
//2. Nuevo contenido
//3. Función se va a ejecutar después del tiempo que tome la función en resolverse
/* fs.writeFile( "main.html", "Contenido nuevo", (err) => {
  if(err){
    throw err
  }

  console.log("Información reemplazada")
} ) */


//Eliminar archivo
//1. Ruta del archivo
//2. Función se va a ejecutar después del tiempo que tome la función en resolverse

/* fs.unlink( "main.html", (err) => {
  if(err){
    throw err
  }

  console.log("Archivo eliminado")
} ) */



//Prueba asincronía 

/* console.log("1. Antes de leer el archivo")

fs.readFile("index.html", "UTF-8", (err, contenido) => {
  if (err) {
    console.log(err)
  } else {
    console.log(contenido)
  }
})

console.log("2. Después de leer el archivo")

fs.rename("index.html","main.html", (err) => {
  if(err){
    throw err
  }

  console.log("Nombre modificado")

})

console.log("3. Después de renombrar el archivo")

console.log("4. Después de añadir el contenido") */




//utilizando las versiones síncronas de los métodos de file system

/* console.log("Antes de leer el archivo")

const archivo = fs.readFileSync("main.html", "utf-8")
console.log(archivo)

console.log("Después de leer el archivo")

fs.renameSync("main.html","index.html")

console.log("Después de renombrar el archivo")

fs.appendFileSync("index.html","<p>Hola de nuevo</p>")

console.log("Después añadir información al archivo") */



//Ejercicio con archivo de texto 

//Leer el archivo 
/* const panagrama = fs.readFileSync("panagramas.txt", "utf-8")
console.log(panagrama)

fs.writeFileSync("panagramas-copia.txt", panagrama)

const nuevoPanagrama = panagrama.replace(/feliz/ig, "triste")

fs.writeFileSync("panagramas-copia.txt", nuevoPanagrama) */