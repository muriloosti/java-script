function enviar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (inicio.value == '' || fim.value == '' || passo.value == '') {
        res.innerHTML = 'Impossivel contar'
    } else {
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)    
        for (inicio; inicio <= fim;  inicio += passo) {
            res.innerHTML += `${inicio} `
        }   
    }
}
    