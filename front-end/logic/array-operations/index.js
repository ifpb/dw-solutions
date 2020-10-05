function soma(...lista) {
  let resultado = 0;
  for (let valor of lista) {
    resultado += valor;
  }
  return resultado;
}

function produto(...params) {
  let total = 1;
  for (let valor of params) {
	  total *= valor;
  }
  return total;
}

function impar(...params) {
	let impares = 0;
	for (let valor of params) {
		if ((valor % 2) == 1 ) {
			impares += valor;
			}
	}
	return impares
}

console.log(soma(1,2,3));
console.log(soma(2,2,2));
console.log(soma(1,2,3,4,5,6));

console.log(impar(1,2,3));
console.log(impar(2,2,2));
console.log(impar(1,2,3,4,5,6));

console.log(produto(1,2,3));
console.log(produto(2,2,2));
console.log(produto(1,2,3,4,5,6));
