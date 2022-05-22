let salarioMen, ajuste, Novo

salarioMen= parseFloat(prompt("Insira seu salario atual "))

ajuste = parseFloat(prompt("Insira o valor de ajuste"))

Novo=  (salarioMen*ajuste/100)+salarioMen;
alert("O seu novo salario será de: "+Novo)