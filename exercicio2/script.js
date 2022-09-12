let idade = prompt("Qual sua idade?")
let ensinoMedio = confirm("Você terminou o ensino médio?")
let faculdade = confirm("Você está cursando alguma faculdade?")

if(idade < 18){
console.log("Menor de idade")
} else {
console.log("Maior de idade")
}
if(ensinoMedio === true){
console.log("Terminou o ensino médio")
} else {
    console.log("Não terminou o ensino médio")
}

if(faculdade === false){
console.log("Não terminou a faculdade")
} else {
    console.log("Terminou a faculdade")
}