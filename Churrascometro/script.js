let adultos = document.getElementById('adultos')
let criancas = document.getElementById('criancas')
let duracao = document.getElementById('duracao')
let resultado = document.getElementById('resultado')

function calcular(){
    let totalDeCarne = adultos.value * carnePP() + criancas.value * carnePP()/2
    let totalDeCerveja = adultos.value * cervejaPP()
    let totalDeBebidas = adultos.value * bebidasPP() + criancas.value * bebidasPP()/2

    resultado.innerHTML = `
        <p>${totalDeCarne/1000} Kg de Carne</p>
        <p>${Math.round(totalDeCerveja/355)} Latinhas de Cerveja</p>
        <p>${totalDeBebidas/1000} l de Bebidas</p>
    `

}

function carnePP(){
    if (duracao.value >=6){
        return 650
    }else{
        return 400
    }
}
function cervejaPP(){
    if(duracao.value >=6){
        return 2000
    }else{
        return 1200
    }
}
function bebidasPP(){
    if(duracao.value >=6){
        return 1500
    }else{
        return 1000
    }
}