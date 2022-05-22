let anterior,principal,seguinte,contadora;

nAnterior = 1
principal = 1
seguinte = 0

alert(anterior)
alert(principal)

for(contadora = 3; contadora <= 15;contadora++){
    seguinte = principal+anterior;
    anterior = principal
    principal = seguinte
    alert(seguinte)
}