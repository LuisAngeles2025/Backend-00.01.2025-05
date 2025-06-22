EL PROBLEMA:

En este caso, definiremos una serie de problemas para resolverlos utilizando el lenguaje javascript, definiremos algoritmos por cada problema.

1. Crea una función que retorne la suma de dos números.

const sum = (number1, number2) => {
  return Number(number1) + +number2;
};

console.log(sum("34", 12));

2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

const pow = (base, expo) => {
  return Math.pow(base, expo);
};

console.log(pow(2, 2));

3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const sumOfCubes = (valor1,valor2,valor3)=>{

    return Math.pow(valor1,3)+ Math.pow(valor2,3)+  Math.pow(valor3,3)
}

console.log(sumOfCubes(1,5,9))

4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3

const calcArea = (base, altura) => (base * altura) /2

console.log(calcArea(3,2))

5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

const calcOper = (x, ope, y) => {
    switch (ope) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '/':
            return x / y
        case 'x':
            return x * y
        case '%':
            return x % y
        default:
            return 'El parámetro no es reconocido'
    }
}

console.log(calcOper(2,"x", 3))

PREGUNTAS:

-  ¿Cómo defines una función?

Para definir una función en JavaScript, puedes utilizar la palabra clave function, la function generalmente requiere de parámetros los cuales deben ir dentro de "()". En la mayoría de las se usa los "{}" en donde dentro se codificará la lógica de la function, exceptuando a la function flecha de 1 sola línea que no requiere de corchetes ni return. Para los otros casos sí es necesario el return para que devuelva como su mismo nombre lo dice, un valor tangible. 


-  ¿Hasta cuantos argumentos puedes declarar en una función?
Entendería que los parámetros/argumentos no tienen límetes en una function, sin embargo, desde mi punto de vista y para buenas prácticas de programación no deberían ser muchas ya que la function perdería escalabilidad y sería difícil de entender. Claro que este es percepción de cada uno.
