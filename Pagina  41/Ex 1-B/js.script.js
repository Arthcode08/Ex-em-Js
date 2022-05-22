let n1,n2

n1= parseFloat(prompt("Por favor insira um número"))

if (n1<0){
    n2=n1*(-1)
    alert("O número inserido foi transformado em: " +n2)  
}else{
   alert("O número inserido não foi transformado: "+n1)
}