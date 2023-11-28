
const nota1 = 10;
const nota2 = 5;
const nota3 = 9;
const nota4 = 2;

let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;

if(mediaNotas == 0){
  console.log("Infelizmente você zerou a prova :( ");
} 
else if(mediaNotas >= 0.1 || notaMedias <= 3){
  console.log("Caramba, deu ruim, você obteve media {mediaNotas}! Estude mais e tente novamente!");
} 
else if(mediaNotas >=3.1 || mediaNotas <= 5.9){
  console.log("Você obteve media {mediaNotas}! Falta pouco para a média.");
}
else if(mediaNotas >= 6 || mediaNotas <= 7){
  console.log("Você está na média com {mediaNotas}");
}
else if(mediaNotas >= 7.1 || mediaNotas <= 9.9){
  console.log("Notão! Sua média é {mediaNotas}!");
}
else{
  console.log("Hoje é seu aniversário? Pq você ta de parabéns! 10 de média");
}
