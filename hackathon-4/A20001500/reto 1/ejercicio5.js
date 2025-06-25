// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
// (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4


const calculator = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

console.log(calculator(2, "+", 2)); // ➞ 4
console.log(calculator(5, "*", 4)); // ➞ 20
console.log(calculator(2, "j", 2)); // ➞ El parámetro no es reconocido.