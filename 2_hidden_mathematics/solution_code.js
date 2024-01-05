// Define una función llamada hiddenMath que toma dos parámetros: valor1 y valor2
function hiddenMath(valor1, valor2) {
  // Calcula la resta de valor1 menos valor2 y almacena el resultado en la variable firstResult
  let firstResult = valor1 - valor2;

  // Calcula la suma de valor1 y valor2 y almacena el resultado en la variable secondResult
  let secondResult = valor1 + valor2;

  // Crea una cadena de texto que muestra la ecuación y su resultado
  let result = `${valor1} + ${valor2} = ${firstResult}${secondResult}`;

  // Devuelve la cadena de texto resultante
  return result;
}

hiddenMath(5, 4);
hiddenMath(8, 2);
hiddenMath(10, 8);
hiddenMath(12, 9);
hiddenMath(18, 2);
hiddenMath(21, 5);
