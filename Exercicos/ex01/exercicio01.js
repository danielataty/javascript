function validar(){
    var nome = document.getElementById('nome')
    var idade = document.getElementById('idade')
    var res = document.getElementById('res')

    res.innerHTML = `Olá, eu sou a ${nome.value}, e tenho ${idade.value} anos`
}


