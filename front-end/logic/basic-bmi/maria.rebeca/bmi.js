let bmi;
let weight = 100;
let height = 2;


bmi = weight/(height**2);
console.log("bmi = " + bmi);

if (bmi >= 30) {
    console.log("Obesity");
} else if (bmi >= 25 && bmi <= 29.9) {
     console.log("Overweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Normal weight");
    } else if (bmi < 18.5) {
         console.log("Underweight");
       }
