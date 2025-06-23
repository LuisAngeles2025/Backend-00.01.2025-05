//Hacer un algoritmo en JavaScript para una tienda de helado 
//que da un descuento por compra a sus clientes con membresía 
// dependiendo de su tipo, sólo existen tres tipos de membresía,
//tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento


let membresia=prompt("Ingrese la membresia?(A,B,C)")
let precio=parseFloat(prompt("Ingrese el precio del helado")) 

membresia = membresia.toUpperCase()     

switch (membresia){
        
    case "A":    
        dcto= 0.10;
        break;
    
    case "B":
        dcto= 0.15;
        break;
    
    case "C":
        dcto= 0.20;
        break;
    
    default:
        dcto=0;
        console.log("Ingrese membresia valida")
}
   
    alert("La membresia tipo " + membresia + " tiene un descuento y pagara "+ dcto+" soles.");
    console.log("La membresia es " + membresia)  