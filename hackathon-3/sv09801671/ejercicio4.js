//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

let num1=parseInt(prompt("Ingrese el primer numero "));
let num2=parseInt(prompt("Ingrese el segundo numero "));
let num3=parseInt(prompt("Ingrese el tercer numero "));

//menor=0
//medio=0
//mayor=0

///num1   num2   num3

    if (num1<=num2 & num1<=num3){                             
        menor=num1;  
        if (num2<=num3){ 
            medio=num2;
            mayor=num3;  
        }else{      
            medio=num3;      
            mayor=num2;                   
        } 
    }             
    else {
        if (num2<num1 & num2<=num3){       
            menor=num2;
            if(num1<=num3){
                medio=num1;
                mayor=num3;
            }        
        }
        else {
            (menor=num3)
                if(num1<=num2){
                    medio=num1;
                    mayor=num2;
                }else{
                    medio=num2;
                    mayor=num1;
                } 

        }
    }
    alert ("Los numeros ordenados de menor a mayor son " + menor + ", " + medio + ", "+ mayor )
    //console.log(menor +", "+ medio + ", "+ mayor);

      