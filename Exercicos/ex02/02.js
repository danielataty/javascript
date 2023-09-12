function validar(){
 var num1 = document.getElementById('num1').value
var num2 = document.getElementById('num2').value
var res = document.getElementById('res')

var n1 = Number(num1)
var n2 = Number(num2)

var a = n1 + n2
var s = n1 - n2
var m = n1 * n2
var d = n1 / n2

res.innerHTML = `O resultado da soma entre ${n1} e ${n2} é ${a} <br>
O resultado da subtração entre ${n1} e ${n2} é ${s}
<br>
O resultado da multiplicação entre ${n1} e ${n2} é ${m}
<br>
O resultado da divisão entre ${n1} e ${n2} é ${d}`

}
