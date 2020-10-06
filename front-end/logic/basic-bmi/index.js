console.log("Calculo índice Massa Corporal!\n");

/* const weight = prompt("Digite seu peso(weight): ");
const height = prompt("Digite sua altura(height): "); */
const height = 1.5;
const weight =200;



//BMI = weight/height²
const calculation = weight /( height * height);

//table 1
/* Underweight	< 18,5
Normal weight	18,5–24,9
Overweight	25–29,9
Obesity	>= 30 */

if (calculation<18.5){
    console.log("Massa: " + calculation + ", Underweight");
}
else if (calculation >=18.5 && calculation<24.9){
    console.log("Massa: " + calculation + ", Normal weight");
}
else if (calculation >= 25 && calculation <29.9) {
    console.log("Massa: " + calculation + ", Overweight");
}
else if (calculation>=30 ) {
    console.log("Massa: " + calculation + ", Obesity");
}
else {
    console.log("Apenas aceito valores!")
}
// table 2
/* weight: 200
height: 1,5	Obesity
weight: 150
height: 2	Obesity
weight: 100
height: 2	Overweight
weight: 70
height: 2	Underweight
 */