const {sum, sumOdds, products} = require('./functions.js');

let vetor = [1, 2 , 3];
let v2 = [2, 2, 2];
let v3 = [1, 2, 3, 4, 5, 6];

console.log("\n::::Vetor 1::::")
console.log("\nSoma dos valores: " + sum(vetor));
console.log("Soma dos valores ímpares:" + sumOdds(vetor));
console.log("Produto dos valores: " + products(vetor));

console.log("\n::::Vetor 2:::: ")
console.log("\nSoma dos valores: " + sum(v2));
console.log("Soma dos valores ímpares: " + sumOdds(v2));
console.log("Produto dos valores: " + products(v2));

console.log("\n::::Vetor 3::::")
console.log("\nSoma de valores: " + sum(v3));
console.log("Soma dos valores ímpares:" + sumOdds(v3));
console.log("Produto dos valores: " + products(v3));
