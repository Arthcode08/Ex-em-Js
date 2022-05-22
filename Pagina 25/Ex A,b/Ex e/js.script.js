let t,P,V,tax


alert("Vamos calcular o valor de uma prestação em atraso");
tax = parseFloat(prompt("Insira qual é a taxa por atraso da prestação: "))
V = parseFloat(prompt("Digite o valor da prestação"))
t = parseFloat(prompt("Qual o tempo de atraso em dias: "))

P= V+(V*(tax/100)*t);

alert("O valor da prestação com a taxa de atraso sera: "+ "R$"+P)