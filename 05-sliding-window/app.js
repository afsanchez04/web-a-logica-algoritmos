const array = [10, 16, 3, 5, 40, 17, 26]
const k = 3

function sumaMaxima(arr, k) {
  let izq = 0
  let der = izq + k - 1
  /* let sum = 0

  for (let i = izq; i <= der; i++) {
    sum += arr[i]
  } */
  let ventanaInicial = arr.slice(0, der + 1)
  let sumaInicial = ventanaInicial.reduce((acc, value) => acc + value)
  let sumaMaxima = sumaInicial
  //sconsole.log(sumaInicial)

  for (let i = k; i < arr.length; i++) {
    sumaInicial += arr[i] - arr[i-k]
    //sumaMaxima = sumaMaxima > sumaInicial ? sumaMaxima : sumaInicial
    sumaMaxima = Math.max( sumaMaxima, sumaInicial)
  }

  return sumaMaxima

}

console.log(sumaMaxima(array, k)) 