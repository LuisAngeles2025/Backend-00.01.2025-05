// 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. 
// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad.
//  Los precios son:

//    $10. Si se compran unidades separadas hasta 9.

//    $8. Si se compran entre 10 unidades hasta 99.

//    $7. Entre 100 y 499 unidades.

//    $6. Para mas de 500 unidades.

//    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un
//  número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

let cantidad = parseInt(prompt("Coloque la cantidad de DC virgenes que desea: "));
let total=0, gananciaVendedor=0;

if(cantidad<10 && cantidad>0){
    total=cantidad*10;
    gananciaVendedor=total*0.0825
}
else if(cantidad<100 && cantidad>=10){
    total=cantidad*8;
    gananciaVendedor=total*0.0825
}
else if(cantidad<500 && cantidad>=100){
    total=cantidad*7
    gananciaVendedor=total*0.0825
}
else {
    total=cantidad*6;
    gananciaVendedor=total*0.0825
}