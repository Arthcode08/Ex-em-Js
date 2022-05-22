
let n1,n2,n3,n4

n1= parseInt(prompt("Por favor digite um número"))
n2= parseInt(prompt("Por favor digite um número"))
n3= parseInt(prompt("Por favor digite um número"))
n4= parseInt(prompt("Por favor digite um número"))

/*SE (a MOD 2 = 0) E (a MOD 3 = 0) ENTÃO Imprimir a;
SE (b MOD 2 = 0) E (b MOD 3 = 0) ENTÃO Imprimir b;
SE (c MOD 2 = 0) E (c MOD 3 = 0) ENTÃO Imprimir c;
SE (d MOD 2 = 0) E (d MOD 3 = 0) ENTÃO Imprimir d;*/

if(((n1%2)==0)||((n1%3)==0)) {
    alert("O número:"+n1+" é divisivel por 3 ou 2")  
}if(((n2%2)==0)||((n2%3)==0)){
    alert("O número:"+n2+" é divisivel por 3 ou 2")  
} if(((n3%2)==0)||((n3%3)==0)){
    alert("O número:"+n3+" é divisivel por 3 ou 2")  
} if(((n4%2)==0)||((n4%3)==0)){
    alert("O número:"+n4+" é divisivel por 3 ou 2")  

}