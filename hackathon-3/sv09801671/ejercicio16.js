//Hacer un algoritmo en JavaScript que lea 
// un número y según ese número, indique el 
// día que corresponde.

const num=parseInt(prompt("Ingrese un numero del 1 al 30"))
let dia = "";
// ("Lunes", "martes", "miercoles","jueves","viernes","sabado","domingo")



if (num==1||num==8||num==15||num==22||num==29){
    dia="lunes";  
}else if (num==2||num==9||num==16||num==23||num==30){
    dia="martes";
}else if (num==3||num==10||num==17|num==24){
    dia="miercoles";
}else if (num==4||num==11||num==18||num==25){
    dia="jueves";
}else if (num==5||num==12||num==19||num==26){
    dia="viernes";
}else if (num==6||num==13||num==20||num==27){
    dia="sabado";
}else{
    dia="domingo";
}

alert("El numero ingresado corresponde al dia "+ dia);
console.log(dia); 