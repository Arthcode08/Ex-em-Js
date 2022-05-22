let A,B,aux

A= parseFloat(prompt("Digite um valor para primeira variavel: "))
B= parseFloat(prompt("Digite um valor para segunda variavel; "))

aux= A;
A=B;
B= aux;

alert("O valor da segunda varivel  agora é :"+B + " O valor da primeira variavel  agora é :"+ A)