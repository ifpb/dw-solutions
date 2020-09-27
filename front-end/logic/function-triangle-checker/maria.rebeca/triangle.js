function triangle(l1, l2, l3){
    let resultado;

    if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
        if (l1 == l2 && l1 == l3) {
            resultado = "Triangulo equilatero";
        } else if (l1 == l2 && l1 != l3 || l2 == l3 && l2 != l1 || l3 == l1 && l3 != l2)  {
            resultado ="Triangulo isosceles";
           } else if (l1 != l2 && l1 != l3){
               resultado = "Triangulo escaleno";
           }
    } else{
        resultado = "Triangulo não existe";
    }
 return resultado;
}

//lados do triangulo
let l1 = 5;
let l2 = 4;
let l3 = 2;

let teste = triangle(l1,l2,l3);
console.log(teste);