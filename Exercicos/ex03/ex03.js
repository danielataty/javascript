function verificar(){
    var idade = document.getElementById('idade').value
    var res = document.getElementById('res')

    var idad = Number(idade)

    if(idad < 18){
        res.innerHTML = 'Você é Menor de idade'
    } else{
        res.innerHTML = 'Você é Maior de idade!'
    }
}