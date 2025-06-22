//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.

for(let i=1;i<=9;i++){
    for(let j=1;j<=9;j++){
        num=j*i;
        console.log(j,"*" ,i,"=", num);
    }
    console.log("");
}