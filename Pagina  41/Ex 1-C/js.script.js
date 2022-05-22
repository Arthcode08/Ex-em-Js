let n1,n2,n3,n4,n5

n1=parseFloat(prompt("Por favor insira sua primeira nota"))
n2=parseFloat(prompt("Por favor insira sua segunda nota"))
n3=parseFloat(prompt("Por favor insira sua terceira nota"))
n4=parseFloat(prompt("Por favor insira sua quarta nota"))
n5= n1+n2+n3+n4/4

if (n5>=5) {
    alert("Parabéns você foi aprovadx com a média de: "+n5)
    
}else{
    alert("Você foi reprovadx com a média de: " +n5)
}