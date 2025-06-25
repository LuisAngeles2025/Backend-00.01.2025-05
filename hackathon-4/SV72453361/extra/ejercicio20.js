String.prototype.vreplace = function(vocal) {
  return this.replace(/[aeiou]/gi, vocal);
};

console.log("apples and bananas".vreplace("u")); 
// "upplus und bununus"
