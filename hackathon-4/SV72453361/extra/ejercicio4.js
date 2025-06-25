const sumarTodo = (...numeros) => {
  return numeros.reduce((suma, actual) => suma + actual, 0);
};

console.log(sumarTodo(2, 4, 6, 8)); // 20