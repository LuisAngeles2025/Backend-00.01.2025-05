// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
// (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

const calculator = (num1, op, num2) => {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            return num2 != 0 ? num1 / num2 : "No puede ser dividido entre 0";
        case "%":
            return num1 % num2;
        default: 
            return "El parámetro no es reconocido";
    }
};

console.log(calculator(2,"+", 2));
console.log(calculator(6,"-", 3));
console.log(calculator(7,"x", 3));
console.log(calculator(8,"/", 4));
console.log(calculator(2,"/", 0));
console.log(calculator(7,"%", 3));
console.log(calculator(2,"&", 2));