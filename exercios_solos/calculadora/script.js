let resultado = document.getElementById('res')
let botoes = document.querySelectorAll(".botão")
let botoesOperadores = document.querySelectorAll(".operadores")
let botaoVirgula = document.getElementById('virgula')
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

botaoVirgula.addEventListener('click', function() {
    let partes = resultado.innerText.split(' ')
    let ultimoNumero = partes[partes.length - 1]
    if (!ultimoNumero.includes(',')) {
        if (ultimoNumero === '') {
            resultado.innerText += 0 
        } else {
            resultado.innerText += ','
        }
    }
})

botaoLimpar.addEventListener('click', function() {
    resultado.innerText = ""
});

botaoResultado.addEventListener('click', function() {
    let expressao = resultado.innerText.trim()
    console.log('Conteúdo do visor:', JSON.stringify(expressao))
    let expressao_split = expressao.split(" ")
    console.log(expressao)
    let num = []
    let operador = []
    for(let c = 0; c < expressao_split.length; c++) {
        if (c%2==0) {
            num.push(expressao_split[c])
            console.log(expressao_split[c])
            num[num.length - 1] = Number(num[num.length - 1].replace(',', '.'))
        } else {
            operador.push(expressao_split[c])
            console.log(expressao_split[c])
        }
    }

    console.log(num)
    console.log(typeof num[0], typeof num[1])
    for(let c = 0; c < operador.length; c++) {
        if(operador[c] ==='x' || operador[c] === '%') {
            let calculo

            if (operador[c] === 'x') {
                calculo = num[c] * num[c+1]
            } else {
                calculo = num[c] / num[c+1]
            }

            num.splice(c, 2, calculo)
            operador.splice(c, 1)
            c--
        } 
    }

    let conta_final = num[0]
    for(let c = 0; c < operador.length; c++) {
        if(operador[c] === '+') {
            conta_final += num[c+1]
        } else if (operador[c] === '-') {
            conta_final -= num[c+1]
        }
    }
    resultado.innerText = conta_final
});