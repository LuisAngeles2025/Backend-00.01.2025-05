// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

const a=9;
const b=4;
const c=7;  
let menor,medio,mayor;

if (a<b && a<c) {
    menor=a;
    if(b<c){
        medio=b;
        mayor=c;
    }else{
        medio=c;
        mayor=b;
    }
} else{
    if( b<a && b<c){
        menor=b
		if (a<c) {
            medio=a;
			mayor=c;
        } else{
            medio=c;
			mayor=a;
        }	
    } else{
        menor=c;
        if(a<b){
            medio=a;
            mayor=b;
        } else{
            medio=b;
            mayor=a;
        }
    }
}

console.log("El orden es:"+"menor->"+menor+",medio->"+medio+",mayor->"+mayor);
