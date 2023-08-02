function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 6) {
        // Boa madrugada!
        img.src = 'madrugada.png'
        document.body.style.background = `#515155`
        
    } else if (hora >= 6 && hora < 12) {
        // Bom dia!
        img.src = 'manha.png'
        document.body.style.background = `#303ef7d0`
    } else if (hora >= 12 && hora <18) {
        // Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = `#b9846f`
    } else if (hora >= 18 && hora < 24) {
        // Boa noite
        img.src = 'noite.png'
        document.body.style.background = `#515154`
    }
        
    

}