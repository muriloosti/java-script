let res = document.getElementById('res')
let txtnum = document.getElementById('numeros')
let botao_adi = document.getElementById('botao_adi')
let caixa = document.getElementById('caixa')
let num = []
function clicar_adi() {
    if (txtnum.value < 1 || txtnum.value > 100 || num.includes(Number(txtnum.value)) || txtnum.value == '' || !Number.isInteger(Number(txtnum.value))) {
        alert('[ERROR] digite outro numero novamente')
    } else {
        num.push(Number(txtnum.value))
        console.log(num)
        let item = document.createElement('option')
        item.textContent = `valor ${txtnum.value} adicionado`
        caixa.appendChild(item)
        res.innerText = ''
    }
}
function clicar_fin() {
    if (num.length == 0) {
        alert('[ERROR] digite um numero')
    } else {
        let num_cadastro = num.length
        let maior = num[0]
        let menor = num[0]
        let soma = 0
        for (let c = 0; c < num.length; c++) {
            soma += num[c]
            if (maior < num[c]) {
                maior = num[c]
            } 
            if (menor > num[c]) {
            menor = num[c]
            }
        }
        let media = soma / num.length
    res.innerText = `Ao todos temos ${num_cadastro} cadastrado \n`
    res.innerText += `O maior valor informado é ${maior}\n`
    res.innerText += `O menor valor informado é ${menor}\n`
    res.innerText += `Somando todos os valores temos ${soma} \n`
    res.innerText += `a media dos valores digitado é ${media} \n`
    }
}