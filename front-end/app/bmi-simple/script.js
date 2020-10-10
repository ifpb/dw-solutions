const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const calcBtn = document.querySelector('#Calcular')
const gen = document.querySelector('#genero')
const result = document.querySelector('#result')

function calculation(peso,altura,gen){
  const massa=peso/(altura**2)
  
  if (gen =="Masculino"){
    if (massa < 20.7){
      return "Abaixo do peso!"
    }
    else if (massa >= 20.7 && massa < 26.4){
      return "Peso normal!"
    }
    else if (massa >= 26.4 && massa < 27.8){
      return "Marginalmente acima do peso!"
    }
    else if (massa >= 27.8 && massa < 31.1){
      return "Acima do peso ideal!"
    }
    else if (massa >= 31.1){
      return "Obeso!"
    }
  }
  if (gen =="Feminino"){
    if (massa < 19.1){
      return "Abaixo do peso!"
    }
    else if (massa >=19.1 && massa < 25.8){
      return "Peso normal!"
    }
    else if (massa >= 25.8 && massa < 27.3){
      return "Marginalmente acima do peso!"
    }
    else if (massa >= 27.3 && massa < 32.3){
      return "Acima do peso ideal!"
    }
    else if (massa >= 32.3){
      return "Obeso!"
    }
  }
}

function load() {
  calcBtn.addEventListener('click', () => {
    result.value = calculation(peso.value, altura.value, gen.value);
  });
}

load();