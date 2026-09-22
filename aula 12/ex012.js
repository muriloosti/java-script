var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora >= 6) {
    console.log('bom dia')
} else if (hora <= 18 && hora >= 12) {
    console.log('boa tarde')
}   else if (hora < 24 && hora > 18) {
    console.log('boa noite')
} else if (hora >= 0) {
    console.log('boa madrugada')
}