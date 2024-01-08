//* Definimos una función llamada solution que toma un array de números como argumento
function solution(numbers) {
  //* Calculamos un valor inicial factor dividiendo el primer número del array entre 3.0
  let factor = numbers[0] / 3.0;

  //* Utilizamos el método every para verificar si todos los elementos del array cumplen una condición
  //* La condición es que el residuo de la división entre el número y factor sea igual a 0 para cada número
  //* También verificamos que factor sea verdadero (diferente de 0)
  return numbers.every((num) => num % factor === 0) && factor;
}

solution([27, 36, 45, 54, 63, 72]);
solution([27, 36, 45, 54, 42, 72]);
