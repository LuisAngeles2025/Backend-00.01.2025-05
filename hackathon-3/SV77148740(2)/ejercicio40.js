// 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie 
// de Nilakantha. La formula que se debe aplicar es:
// Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

let num = parseInt(prompt("Coloque hasta que termino quieres aproximar a pide Nilakantha: "))
let pi=3, signo=1;

for (let i = 0,n = 2; i < num ;n+=2, i++) {
    let termino = 4/ (n*(n+1)*(n+2));
    pi+=signo * termino;
    signo*=-1
}

console.log("Aproximación de pi con",num, "términos es:", pi);