const x = 8;
console.log(x + 2);
console.log(x * x);
//console.log(Math.cbrt(8));
console.log(x**(1/3))
console.log(3*(x**2) +(12*x)-4);
//console.log((x+3) > Math.sqrt(x));
console.log(x+3 > x**(1/2))

// spread operator
const numbers = [1, 2, 3];
console.log(...numbers, 4, 5); //=> [1, 2, 3, 4, 5]
    /* O Spread permite a expansão do objeto iterável que no caso é um array, mas permite tambem a expansão de strings */

// prefix decrement
const number = 10;
console.log(--number); //=> 9
    /* O prefix decrement diminui um numéro da variavel number e atribui o resultado a essa mesma variavel, ou seja é uma notação simplificada de (number = number - 1), porém se executar com a variável declarada com const dará erro pois a constante não premite reatribuição, para que consiga ser executado basta declarar a variavel com var ou let.*/

// delete operator
const numbers = [1, 2, 3];
delete numbers[1];
console.log(numbers); //=> [ 1, , 3 ]
    /* O operador delete  apagou do array o informação da posição 1 que no caso era número 2, e não o número 1 contido no array*/

// left shitf operator
console.log((127 & 0xff) << 24) | (((0 & 0xff) << 16) | ((0 & 0xff) << 8) | (1 & 0xff)); //=> 2130706433
    /* Desloca numero de bits do primeiro operando para esquerda, e descarta os bits em excesso */


// sign-propagating right shift operator
console.log((2130706433 >>> 24) & 0xff); //=> 127
console.log((2130706433 >>> 16) & 0xff); //=> 0
console.log((2130706433 >>> 8) & 0xff); //=> 0
console.log(2130706433 & 0xff); //=> 1

    /*  Operador de deslocamento de sinal para a direita (>>>).
    Desloca o número especificado de bits do primeiro operando para a direita, descartando o excesso de bits deslocados.
    Os bits zero são deslocados da esquerda. O bit de sinal torna-se 0, portanto, o resultado é sempre não negativo. Ao contrário dos outros operadores bit a bit, o deslocamento para a direita com preenchimento zero retorna um número inteiro de 32 bits sem sinal. */


// left shitf operator
const octet1 = 127;
const octet2 = 0;
const octet3 = 0;
const octet4 = 1;
const ip = ((octet1 & 0xff) << 24) | ((octet2 & 0xff) << 16) | ((octet3 & 0xff) << 8) | (octet4 & 0xff);
console.log(ip); //=> 2130706433
    /* Faz a comparação o bits dos operandos e o resultado, Desloca numero de bits do primeiro operando para esquerda  */

// unary plus operator
const number = '15';
console.log(+number); //=>  15
    /* Tenta converter o operando em um número */

// less than and greater than operator
const number = 1;
console.log(10 > number < 20); //=> true
	/* Menor que [Retorna verdadeiro se o operando esquerdo for maior que o operando direito.] 
    e Maior que [ Retorna verdadeiro se o operando direito for maior que o operando esquerdo]
     */


// equality operator
console.log(1 == "1a"); //=> false
console.log(1 == "1"); //=> true
/* Verifica se os dois operando são iguais, não levando em consideração os tipos */

// identity/strict equality
console.log(1 === "1"); //=> false
/* Operador de igualdade estrita, verifica se os dois operandos são iguais nos valores e tambem no tipo  */

// bitwise and operator
console.log((8 & 1) === 0); //=> true
    /* O operado "&" faz a comparação and bit a bit, o resultado compara com os valor e tipo retornando Booleano */
console.log(!(8 & 1)); //=> true
    /* O operador ! nega o resultado */
console.log(!!(8 & 1)); //=> false
    /* Forçar a conversão de qualquer valor para o primitivo booleano correspondente */

// logical or operator
let x;
const y = 10 || x;
console.log(y);
/* Operador lógico OR (||) retorna verdadeiro se um ou mais dos seus operandos forem verdadeiros. 
Retorna valores Booleanos, portanto, se este operador for utilizado com valores  não-Booleanos, irá retornar um valor não-Booleano*/
