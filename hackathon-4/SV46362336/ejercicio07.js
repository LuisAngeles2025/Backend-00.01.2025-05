function cadena10Num(nums) {
    for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (typeof x < 0 || x > 9) {
      return "Error: Todos los elementos de la matriz deben ser enteros entre 0 y 9.";
    }
  }
    const inicio = nums.slice(0, 3).join('')
    const medio = nums.slice(3, 6).join('')
    const final = nums.slice(6, 10).join('')
    return `(${inicio}) ${medio}-${final}`
}

console.log(cadena10Num([1,2,3,4,5,6,7,8,9,9]))