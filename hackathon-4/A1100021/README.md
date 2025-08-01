PREGUNTAS:

-  ¿Cómo defines una función?
En JavaScript, para definir una función se hace uso de la palabra clave "function".

function sumar (n1, n2){
    return n1 + n2;
}

Sin embargo, existe otra forma moderna y simplificada de realizar una función a través de la función flecha.

const sumar = (n1, n2) => {
    n1 + n2;
};

-  ¿Hasta cuantos argumentos puedes declarar en una función?
No existe límite establecido en la cantidad de argumentos que se puede declarar en una función. Sin embargo, es recomendable no abusar la cantidad para evitar sobrecarga en el código.