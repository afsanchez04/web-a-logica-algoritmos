//Ventana fija

/* const array = [10, 16, 3, 5, 40, 17, 26]
const k = 3

function sumaMaxima(arr, k) {
  let izq = 0
  let der = izq + k - 1
  // let sum = 0

  // for (let i = izq; i <= der; i++) {
  //   sum += arr[i]
  // } 
  let ventanaInicial = arr.slice(0, der + 1)
  let sumaInicial = ventanaInicial.reduce((acc, value) => acc + value)
  let sumaMaxima = sumaInicial
  //sconsole.log(sumaInicial)

  for (let i = k; i < arr.length; i++) {
    sumaInicial += arr[i] - arr[i - k]
    //sumaMaxima = sumaMaxima > sumaInicial ? sumaMaxima : sumaInicial
    sumaMaxima = Math.max(sumaMaxima, sumaInicial)
  }

  return sumaMaxima

}

console.log(sumaMaxima(array, k)) */

//Ventana variable
//Ejemplo: Encuentra la subcadena más corta que tenga una suma mayor o igual a "target"
const array = [2, 3, 1, 2, 4, 3]
const k = 7

function ventanaVariable(arr, target) {
  let sumaActual = 0
  let inicio = 0
  let longitudMinima = Infinity;

  for (let fin = 0; fin < arr.length; fin++) {
    sumaActual += arr[fin] //? 

    while (sumaActual >= target) {
      longitudMinima = Math.min(longitudMinima, fin - inicio + 1)
      sumaActual -= arr[inicio]

      inicio++
    }

  }

  return longitudMinima === Infinity ? 0 : longitudMinima;

}

console.log(ventanaVariable(array, k))