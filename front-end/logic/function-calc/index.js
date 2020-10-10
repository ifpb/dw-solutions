//const number1 = 10;
//const number2 = 10;
//const operator = '+';

function calc(number1,number2, operator){
	switch (operator) {
		case '+':
			result = number1 + number2;
			break;
		case '-':
			result = number1 - number2;
			break;
		case '*':
			result = number1 * number2;
			break;
		case '/':
			result = number1 / number2;
			break;
		case '%':
			result = number1 % number2;
			break;
		default:
			result = "Operador invalido, digite novamente"
	}
}


calc(1,1,'+');
console.log(result);
calc(1,1,"-");
console.log(result);
calc(1,1,'*');
console.log(result);
calc(1,1,'/');
console.log(result);
