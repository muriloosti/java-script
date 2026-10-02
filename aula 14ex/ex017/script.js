var tabuada = document.getElementById('tabuada')
var txtnumero = document.getElementById('numero')
function clicar() {
    if (txtnumero.value == '') {
        window.alert('[erro] digite um número')
    } else {
        numero = Number(txtnumero.value)
        tabuada.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            tabuada.appendChild(item)
            item.text = `${numero} x ${c} = ${numero * c}`
        }
    }
}