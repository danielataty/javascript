function carregar(){
    var msg = window.document.getElementById('msg')

    var compr = window.document.getElementById('comp')

    var img = window.document.getElementById('imagem')

    var data = new Date()

    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`


    if (hora < 12 && hora  > 4){

        compr.innerText = 'Bom dia'
         img.src = 'Manha.jpg'
        document.body.style.background = '#e2cd9f'

    }
    else if (hora >= 12 && hora < 18){
        document.body.style.background = '#b9846f'
        compr.innerHTML = 'Boa noite' 
        img.src = 'Tarde.jpg'

    }else {
        document.body.style.background = '#515154'
        compr.innerHTML = 'Boa noite' 
        img.src = 'noitr.jpg'

    }
}



