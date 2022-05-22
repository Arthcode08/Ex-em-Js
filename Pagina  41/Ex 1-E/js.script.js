let A,B,C,x1,x2,Bhask
 alert("Vamos calcular  Bhaskara!")
A=parseFloat(prompt("Por favor insira o valor de A (lembrando A é diferente de 0)"))
B=parseFloat(prompt("Por favor insira um valor para B"))
C=parseFloat(prompt("Por favor insira um valor para C"))

Bhask=B*B -4*A*C
alert("O valor do delta é "+Bhask)

if (Bhask<0) {
    alert("O delta é negativo, não dara raizes reais.")
    
}else if (Bhask>0) {
x1= (-B + Math.sqrt(Bhask) )/2*A
x2= (-B - Math.sqrt(Bhask) )/2*A
    
   alert("Essas são as duas raizes possiveis: "+x1 +x2) 
}

