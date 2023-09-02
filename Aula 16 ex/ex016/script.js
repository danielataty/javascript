var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
 if (Number(n) >= 1 && Number(n) <= 100){
    return true

 } else{
    return false
 }
}

function islista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function adicionar(){

if (isNumero(num.value) && !islista(num.value, valores)){
    valores.push(Number(num.value))

    var item = document.createElement('option')

    item.text = `Valor ${num.value} adicionado`

    lista.appendChild(item)
    res.innerHTML = ''
    

}else{
    alert('Valor invalido ou já encontrado na lista.')
}
    num.value = ' ' 
    num.focus() // para voltar o cursor na caixa de entrada de dados

}

function finalizar(){
if (valores.length == 0){
    alert('Adicione valores antes de finalizar! ')
} else{
    var tot = valores.length
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0

    for(var pos in valores)
    {
        if(valores[pos] > maior){
        maior = valores[pos]
        }
        if(valores[pos] < menor){
        menor = valores[pos]
        }
    }

    for(var c = 0; c < valores.length; c++){
        soma +=valores[c]

        media = soma / valores.length
    }

    res.innerHTML =  ''
    res.innerText += `Ao todo, temos ${tot} numeros cadastrados`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>` 
    res.innerHTML += `<p>A soma de todos valores informados foi ${soma}</p>`
    res.innerHTML += `<p>A média de todos valores informados foi ${media}</p>`
}
}

