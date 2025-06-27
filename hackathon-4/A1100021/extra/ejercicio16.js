// 16)	Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.

// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

const countdown = (n) =>{
    let arrCountdown = [];
    for (let i = 0; i <= n; i++) {
        arrCountdown.unshift(i);
    }
    return arrCountdown;
};

console.log(countdown(5));