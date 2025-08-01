const filterList = (arr) => arr.filter((e) => Number.isInteger(e))

console.log(filterList([1, 2, 3, "x", "y", 10]))