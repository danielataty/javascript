function calcular(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var n = Number(num.value)

    if(n == '')
    {
        alert('[ERRO!]Insira um número!')
    }else{
        tab.innerHTML = ' '

        for(var c = 1; c <=12; c++ ){
            var item = document.createElement('option')
            var r = n * c
            item.text = `${n} X ${c} = ${r} `
            tab.appendChild(item)
            
        }
    }
}