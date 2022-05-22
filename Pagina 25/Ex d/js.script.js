let t,Vm,d,litros

alert("ALGORTIMO PARA MOSTRAR O GASTO DE GASOLINA POR KM")

t=parseFloat(prompt("Por favor insira o tempo da viagem em horas: "));
Vm=parseFloat(prompt("Por favor insira a Velocidade Média da viagem em km: "))
d= t*Vm;

litros= d/12;
alert("O gasto de gasolina foi de:" +litros+"L");