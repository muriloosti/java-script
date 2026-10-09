let resultado = document.getElementById('res')
let botoes = document.querySelectorAll(".botão")
let botoesOperadores = document.querySelectorAll(".operadores")
let botaoLimpar = document.getElementById('limpar')
let botaoResultado = document.getElementById('resultado-conta')
botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        let numeroClicado = this.getAttribute("data-valor");

        resultado.innerText = resultado.innerText + numeroClicado
    });
});

botoesOperadores.forEach(botaoOp => {
    botaoOp.addEventListener('click', function() {
        let operadorClicado = this.getAttribute("data-valor")

        resultado.innerText = resultado.innerText + " " + operadorClicado + " "
    });
});

botaoLimpar.addEventListener('click', function() {
    resultado.innerText = ""
});

botaoResultado.addEventListener('click', function() {
    let expressao = resultado.innerText
    let expressao_split = expressao.split(" ")
    
    let num1 = Number(expressao_split[0])
    let operador = expressao_split[1]
    let num2 = Number(expressao_split[2])

    let conta_final = 0
    
    switch (operador) {
        case '+':
            conta_final = num1 + num2 
            break
        
        case '-':
            conta_final = num1 - num2 
            break

        case 'x':
            conta_final = num1 * num2 
            break
        
        case '%':
            conta_final = num1 / num2 
            break
    }

    resultado.innerText = conta_final
});