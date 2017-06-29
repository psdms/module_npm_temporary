module.exports = function(){
	console.log('Module test');
	console.log('for upload/download npm repository.')
};

let sqrt = Math.sqrt;
function square(x) {
  return x * x;
}
function diag(x, y) {
  return sqrt(square(x) + square(y));
}

function add(a){
  return String(a+2);
};

module.exports = {
  sqrt: sqrt,
  square: square,
  diag: diag,
	add: add
};

