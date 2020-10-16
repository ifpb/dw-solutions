const altura = document.querySelector('#inputAltura');
const peso = document.querySelector('#inputPeso');
const sexo = document.querySelector('#sexo1');
const result = document.querySelector('#result');


function basicBMI(altura, peso, sexo){
let r;    
let bmi = peso/(altura**2);

    if (sexo == "feminino") {
        if (bmi >= 32.3) {
           r = "Obesa";
        } else if (bmi >= 27.3 && bmi <= 32.3) {
            r = "Acima do peso ideal";
            } else if (bmi >= 25.8 && bmi <= 27.3) {
                r = "Marginalmente acima do peso";
                } else if (bmi >= 19.1 && bmi <= 25.8) {
                   r = "Peso normal";
                    } else if (bmi < 19.1) {
                        r = "Abaixo do peso";
                        }
    } else if (sexo == "masculino"){
            if (bmi >= 31.1) {
                r = "Obeso";
             } else if (bmi >= 27.8 && bmi <= 31.1) {
                 r = "Acima do peso ideal";
                 } else if (bmi >= 26.4 && bmi <= 27.8) {
                     r = "Marginalmente acima do peso";
                     } else if (bmi >= 20.7 && bmi <= 26.4) {
                        r = "Peso normal";
                         } else if (bmi < 20.7) {
                             r = "Abaixo do peso";
                             }
          }
return r;          
}

function load() {
    resultbtn.addEventListener('click', () => {
      const sexo = document.querySelector('input:checked');
      resultado.value = basicBMI(altura.value, peso.value, sexo.value);
    });
  }
  
load();