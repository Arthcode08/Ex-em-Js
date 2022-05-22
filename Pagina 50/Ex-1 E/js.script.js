let contadora,numero, soma

contadora = 1
soma = 0

do{
     numero = parseFloat(prompt("Por favor insira um número "))
     soma = numero+soma
     contadora = contadora +1
} while (contadora<15);
alert(soma)