function sum(vetor){
    let soma = 0;
    for (let valores of vetor){
       soma += valores;
    }
    return soma;
}

function sumOdds(vetor){
    let soma = 0;
    for (let valores of vetor){
        if (valores % 2 != 0) {
            soma += valores;
        }
    }
    return soma;
}

function products(vetor){
    let produto = 1;
    for (let valores of vetor){
        produto *= valores;
    }
    return produto;
}

module.exports = {sum, sumOdds, products};