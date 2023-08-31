var valor = [1,2,3,6,8,9,5]
valor.sort()

/*/for(var pos = 0; pos < valore.length; pos++){

    console.log(`A posição ${pos} tem o valor ${valore[pos]}`)
}*/

for (let pos in valor){

    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}

let pos = valor.indexOf(1)

if (pos == -1){
    console.log('O valr não foi encontrado')
}

console.log(`O valor está na posição ${pos}`)