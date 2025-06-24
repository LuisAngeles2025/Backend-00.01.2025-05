/*Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
    getStudentNames([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ]) ➞ ["Becky", "John", "Steve"] */

    function getStudentNames(estudiantes) {
        return estudiantes.map(est => est.name);
      }
      
      // Ejemplo de uso:
      console.log(getStudentNames([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
      ]));