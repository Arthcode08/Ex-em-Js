let contadora,numero,soma, media
numero = 0
soma = 0
media = 0
contadora = 0
do {
    parseFloat(prompt("Por favor insira um numero: "))
    if (numero >=0) {
        soma = numero+soma
        contadora = contadora +1
        media = soma/contadora +1
    }
} while (numero >0);

alert("A soma de todos os numeros é "+soma)
alert("A quantidade de numeros digitados foi de "+contadora)
alert("A media dos numeros foi de "+media)