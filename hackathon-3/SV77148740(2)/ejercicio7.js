//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus 
// clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

  // Tipo A 10% de descuento
  // Tipo B 15% de descuento
  // Tipo C 20% de descuento

const preciohelado=12;
console.log("MEMBRESIAS");
console.log("tipo A");
console.log("tipo B");
console.log("tipo C");

const opc = prompt("ingrese su membresia: ");
let total;
switch(opc){
    case "A":
        total=preciohelado-(preciohelado*0.10);
        console.log("Su descuento es del 10%");
        break;
    case "B":
        total=preciohelado-(preciohelado*0.15);
        console.log("Su descuento es del 15%");
        break;
    case "C":
        total=preciohelado-(preciohelado*0.20);
        console.log("Su descuento es del 20%");
        break;
    default:
        total = precioHelado;
        console.log("No tiene descuento");
        break;

}

console.log("El total de la compra es: "+total);