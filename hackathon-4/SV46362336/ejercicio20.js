String.prototype.vreplace = function(x) {
    const reemplazar = /[aeiouAEIOU]/g
    return this.replace(reemplazar, x)
}

console.log("apples and bananas".vreplace("u"))