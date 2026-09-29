var agora = new Date
var ano = agora.getFullYear()
var nasc = document.getElementById('nasc')
var sexo = document.getElementsByName('sexo')
var img = document.getElementById('img')

function verificar() {
    var nascimento = Number(nasc.value)    
    var idade = ano - nascimento

    var res = document.getElementById('res')
    if (idade < 0 || nascimento <= 0) { 
        window.alert('data invalida, tente novamente')
    } else if (sexo[0].checked && idade < 18) {
        res.innerHTML = `detectamos um Homen com ${idade}`
        document.getElementById('img').style.display = 'block'
        img.src = 'image ex002/homem criança.jfif' 
    } else if (sexo[0].checked && idade >= 18 && idade < 40) {
        res.innerHTML = `detectamos um Homen com ${idade}`
        document.getElementById('img').style.display = 'block'
        img.src = 'image ex002/homem jovem.jpg' 
    } else if (sexo[0].checked && idade >= 40) {
        res.innerHTML = `detectamos um Homen com ${idade}`
        document.getElementById('img').style.display = 'block'
        img.src = 'image ex002/homem velho.jfif' 
    } else if (sexo[1].checked && idade < 18) {
        res.innerHTML = `detectamos uma Mulher com ${idade}`
        document.getElementById('img').style.display = 'block'
        img.src = 'image ex002/mulher criança.jfif' 
    } else if (sexo[1].checked && idade >= 18 && idade < 40) {
        res.innerHTML = `detectamos uma Mulher com ${idade}`
        document.getElementById('img').style.display = 'block'
        img.src = 'image ex002/mulher jovem.jfif'    
    } else if (sexo[1].checked && idade >= 40) {
        res.innerHTML = `detectamos uma Mulher com ${idade}`
        document.getElementById('img').style.display = 'block'
        img.src = 'image ex002/mulher velha.jfif'       
    }
}