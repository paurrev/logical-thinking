function solution(num) {
  // Inicializar un array para almacenar los números primos encontrados
  let result = [];

  // Agregar el primer número primo, 2, al array si el número proporcionado es mayor o igual a 2
  if (num >= 2) result.push(2);

  // Iterar a través de números impares empezando desde 3 hasta el número proporcionado
  for (let i = 3; i <= num; i += 2) {
    let counter = 0; // Inicializar un contador para contar los divisores

    // Iterar a través de números impares hasta i para contar los divisores
    for (let j = 1; j <= i; j += 2) {
      // Si i es divisible por j, incrementar el contador
      if (i % j == 0) {
        counter += 1;
      }
    }

    // Si el contador es igual a 2, entonces i es un número primo y se agrega al array de resultados
    if (counter == 2) {
      result.push(i);
    }
  }

  // Devolver el array de números primos encontrados
  return result;
}
