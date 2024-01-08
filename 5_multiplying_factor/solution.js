//* Definimos una función llamada solution que toma como argumento un array de numeros con los resultados
function solution(numbers) {
  //* Creamos un array con los números base del 3 al 8
  let multiplicador = [3, 4, 5, 6, 7, 8];
  //*  Creamos el factor desconocido dividiendo el primer numero del array entre el primer numero del multiplicador
  let factor = numbers[0] / multiplicador[0];

  //* Iniciamos un bucle para recorrer todos los numeros del array
  for (let index = 0; index < numbers.length; index++) {
    //* Creamos un nuevo factor en el que recorre todos los numeros del array
    let isFactor = numbers[index] / multiplicador[index];

    //* Comprobamos el nuevo factor con el factor original
    if (factor !== isFactor) {
      //* Si hay alguna diferencia se retorna false
      return false;
    }
  }
  //* Si no se encuentra ningun número diferente se retorna el factor
  return factor;
}

solution([27, 36, 45, 54, 63, 72]);
solution([27, 36, 45, 54, 42, 72]);
