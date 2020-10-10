function triangulo(base,altura1,altura2){
    if (base >= altura1 + altura2 || altura1 >= base + altura2 || altura2 >= altura1 + base || base <= 0 || altura1 <= 0 || altura2 <= 0) {
            console.log('Não forma triangulo!');
    }
    else if (base == altura1 && base == altura2 && altura1 == altura2){
        console.log('O triângulo é equilátero!');
    }
    else if (base != altura1 && base != altura2 && altura1 != altura2){
        console.log('O triângulo é escaleno!');
    }
    else {
        console.log ('O triângulo é isósceles!');
    }

}
 
triangulo(2,2,2);
triangulo(10,10,10);
triangulo(3,4,4);
triangulo(4,3,4);
triangulo(4,4,3);
triangulo(10,10,2);
triangulo(3,4,5);
triangulo(10,11,12);
triangulo(5,4,2);
triangulo(0,0,0);
triangulo(3,4,-5);
triangulo(1,1,3);
triangulo(2,4,2);