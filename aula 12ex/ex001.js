var agora = new Date()
var hora = agora.getHours()
var texto = window.document.getElementById('horas')
var img = window.document.getElementById('img')
texto.innerHTML = `agora são ${hora} horas`
if (hora < 12 ) {
    document.body.style.backgroundColor = '#dbdf92'
} else if (hora < 18) {
    document.body.style.backgroundColor = '#c48059' 
    img.src = 'image ex001/imgtarde.jfif'
    
} else {
    document.body.style.backgroundColor = '#643f3f'
    img.src = img.src = 'image ex001/imgnoite.jfif'
}