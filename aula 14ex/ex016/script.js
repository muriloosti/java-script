function enviar() {
    var txtinicio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (txtinicio.value == '' || txtfim.value == '' || txtpasso.value == '') {
        res.innerHTML = 'Impossivel contar'
    } else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)    
        for (inicio; inicio <= fim;  inicio += passo) {
            res.innerHTML += `${inicio} \u{1F449}`
        }   
    }
    res.innerHTML += '\u{1F3C1}'
}
    