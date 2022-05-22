let n1,n2,n3,n4,n5,NotaExame,Nm

n1=parseFloat(prompt("Por favor insira sua primeira nota"))
n2=parseFloat(prompt("Por favor insira sua segunda nota"))
n3=parseFloat(prompt("Por favor insira sua terceira nota"))
n4=parseFloat(prompt("Por favor insira sua quarta nota"))
n5= (n1+n2+n3+n4)/4

if (n5>=7) {
    alert("Parabéns você foi aprovadx com a média de: "+n5)
    
}else if(n5<7) {
    alert("Vamos calcular uma nova média")
   NotaExame=parseFloat(prompt("Por favor insira a nota de seu exame"))
   Nm=(n5+NotaExame)/2
}if (Nm>=5) {
    alert("Parabéns você foi aprovadx com a média de: "+Nm)
} else {
    alert("Parabéns você foi reprovadx com a média de: "+Nm)
}