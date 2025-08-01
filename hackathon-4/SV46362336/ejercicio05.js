const filterFunction = (arr) => arr.filter((e) => typeof e != "string");

arrayS = [1, "hola", true, null, "mundo", 25, ""]
console.log(filterFunction(arrayS))