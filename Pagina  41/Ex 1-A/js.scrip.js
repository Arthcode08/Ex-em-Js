let n1,n2,r

alert("Vamos achar a diferença de dois numeros")


n1=parseFloat(prompt("Insira um numero"))
n2= parseFloat(prompt("Insira um segundo numero"))

if (n1>n2){
    r=n1-n2
    alert("O resultado é: "+r) 
}else{
    r=n2-n1
    alert("O resultado é: "+r) 
}
