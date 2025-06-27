//Hacer un algoritmo en JavaScript para una empresa 
// se encarga de la venta y distribución de CD vírgenes. 
// Los clientes pueden adquirir los artículos 
// (supongamos un único producto de una única marca) 
// por cantidad. Los precios son:

// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % 
// de la venta. Realizar un algoritmo en JavaScript 
// que dado un número de CDs a vender calcule el 
// precio total para el cliente y la ganancia para 
// el vendedor.

const cantCd=parseInt(prompt("Ingrese la cantidad de cd a comprar"))
let valor = "";
if (cantCd>0 && cantCd<=9){
    valor=10;
}else if (cantCd>=10 && cantCd<=99){
    valor=8;
}else if (cantCd>=100 && cantCd<=499){
    valor=7;  
}else{
    valor=6;
}

const totalCliente=valor*cantCd;
const gananciaVendedor=totalCliente*0.0825;

alert("la ganancia del vendedor es de "+gananciaVendedor+" Y el precio total para el cliente es de "+totalCliente);
console.log(gananciaVendedor.toFixed(1), totalCliente.toFixed3);