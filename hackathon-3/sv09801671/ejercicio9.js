// Hacer un algoritmo en JavaScript para determinar 
// el aumento de un trabajador, se debe tomar en 
// cuenta que si ganaba más de $2000 tendrá un 
// aumento del 5%, si generaba menos de $2000 
// su aumento será de un 10%.
const sueldoActual=parseFloat(prompt("ingrese su Sueldo"))

  let porcentajeAumento;
  let aumento;
  let nuevoSueldo;

  if (sueldoActual > 2000) {
    porcentajeAumento = 0.05;    
  } else {
    porcentajeAumento = 0.10;
  }

  aumento = sueldoActual * porcentajeAumento;
  nuevoSueldo = sueldoActual + aumento;

    alert("El aumento de sueldo del colaborador equivale a " + aumento)
    console.log("El colaborador mejoro su sueldo y ahora gana " + (nuevoSueldo))