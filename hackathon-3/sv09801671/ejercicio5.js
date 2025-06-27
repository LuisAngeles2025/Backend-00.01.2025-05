//Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una 
//promoción de descuento para vender al mayor, esta dependerá del número de
//zapatos que se compren. Si son más de diez, se les dará un 10% de descuento
//sobre el total de la compra; si el número de zapatos es mayor de veinte 
//pero menor de treinta, se le otorga un 20% de descuento; y si son más 
//treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato 
//es de $80.

let numZapatos=parseInt(prompt("Ingrese la cantidad de zapatos"))

if (numZapatos>=30){    
   total=numZapatos*80;
   total=total-(total*0.40)
}

if (numZapatos>20 & numZapatos<30){     
   total=numZapatos*80;
   total=total-(total*0.20);
}

if (numZapatos<=20){
   total=numZapatos*80;
   total=total-(total*0.10);   
}

      
alert("El precio de los zapatos es de "+ (total))
console.log("El precio de los zapatos es de "+ (total))

    