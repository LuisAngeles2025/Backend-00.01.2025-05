//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

do{
    console.log("Esto es una ejecución del programa");
    continuar = prompt("Desea continual (Y/N): ");
} while(continuar=="Y" || continuar=="y")

console.log("Programa finalizado");