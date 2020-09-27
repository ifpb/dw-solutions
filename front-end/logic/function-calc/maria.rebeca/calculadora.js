let v1 = 4;
let v2 = 4;

let soma = 1;
let subtrai = 2;
let multiplica = 3;
let divide = 4;

//operaçao escolhida:
let op = multiplica;

function calculadora (op, v1, v2) {
    let resultado;
    switch (op){
        case 1:
        resultado = v1 + v2;
        break; 
        case 2:
        resultado = v1 - v2;
        break;
        case 3:
        resultado = v1 * v2;
        break;
        case 4:
        resultado = v1 / v2;
        break;
        default:
        resultado = "Operação inválida!";    
    }
    return resultado;
}

let ex = calculadora(op, v1, v2);
console.log(ex);