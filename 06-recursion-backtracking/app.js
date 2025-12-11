
//Ejemplo 1: Cuenta atrás

/* let cuentaAtras = (num) => {
  debugger
  //Caso base
  if(num === 0){
    return
  }

  console.log(num)
  //Llamada recursiva
  return cuentaAtras(num-1)

}

console.log(cuentaAtras(5)) */


//Ejemplo 2: Factorial recursivo

/* function factorial (n) {
  debugger
  if(n === 0){
    return 1
  }

  return n * factorial(n-1)

}

console.log(factorial (5)) */


//Ejemplo 3: Determinar par e impar

//numero % 2 == 0
//numero % 3 == 0

//Dado un número 6 restar de a dos hasta que el número más pequeño sea 0 (par) o 1 (impar)

/* function parImpar(n) {
  debugger
  //caso base
  if (n === 0) return "par"
  if (n === 1) return "impar"

  //llamada recursiva
  return parImpar(n - 2)
}

console.log(parImpar(9)) 
 */



//Ejemplo 4: Invertir una cadena de string

//hola

/* function invertirString (str){
  debugger
  //Caso base 
  if( str.length <= 1 ) return str

  //Llamada recursiva
  return str[str.length-1] + invertirString( str.slice(0,-1) ) 

}

console.log(invertirString ("hola")) */


//Ejemplo 5: Encontrar determinado caracter en un string

/* let programa = (cadena, letra, index = 0, count = 0) => {
    debugger
    //Caso base
    if (index === cadena.length) return count;
    if (cadena[index] === letra) count++;

    //Llamada recursiva
    return programa(cadena, letra, index + 1, count);
};


console.log(programa("JavaScript", "a")); // Salida: 2 */


//Backtracking 
//Encontrar las combinaciones posibles en un string
function permute(str, path = "", result = []) {
  debugger
  if (str.length === 0) {
    result.push(path);
  } else {
    for (let i = 0; i < str.length; i++) {
      const remaining = str.slice(0, i) + str.slice(i + 1);
      console.log(remaining);
      permute(remaining, path + str[i], result);
    }
  }
  return result;
}

const result = permute("abc");
console.log(result);


