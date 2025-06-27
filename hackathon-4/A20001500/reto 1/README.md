EL PROBLEMA:

En este caso, definiremos una serie de problemas para resolverlos utilizando el lenguaje javascript, definiremos algoritmos por cada problema.

1. Crea una función que retorne la suma de dos números.

const suma = (num1, num2) => num1+num2

2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3

5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4


PREGUNTAS:

-  ¿Cómo defines una función?
Para definir una función en JavaScript, puedes utilizar la palabra clave function

-  ¿Hasta cuantos argumentos puedes declarar en una función?

No existe un límite estricto en la cantidad de argumentos que puedes declarar en una función en JavaScript.
Pero, es recomendable no exceder el número de 255 argumentos para mantener la claridad y legibilidad del código.Sin embargo, se pueden usar los parámetros rest para capturar un número indefinido de argumentos como un array.