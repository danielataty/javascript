function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO!] Faltam dados')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br >'
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passp inválido! Considerando PASSO 1')
            p = 1
        }
        
        if (i < f){
         for(var c = i; c <= f; c+= p){
            // crescente
            res.innerText += ` ${c} \u{1F449}`
            }
               
        } else{
            for( var c = i; c >= f; c -= p){
                // regressiva
                res.innerText += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }



    
}