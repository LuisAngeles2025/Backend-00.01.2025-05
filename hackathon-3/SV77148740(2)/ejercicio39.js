// 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie
//  de Gregory-Leibniz. La formula que se debe aplicar es:
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

let num = parseInt(prompt("Coloque hasta que termino quieres aproximar a pi: "))
let pi=0, signo=1;

for (let i = 1; i <= num * 2; i += 2) {
    pi += signo * (4 / i);
    signo *= -1; 
}

console.log("Aproximación de pi con",num, "términos es:", pi);