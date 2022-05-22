let A,B,C 

A=parseFloat(prompt("Por favor insira um número"))
B=parseFloat(prompt("Por favor insira um número"))
C=parseFloat(prompt("Por favor insira um número"))

if( (A>B) && (A>C) && (B>C) ){
    alert("Essa é a ordem crescente: "+C+","  +B+","  +A)
    
}else if((B>A) && (B>C) && (A>C)){
    alert("Essa é a ordem crescente: "+C+"," +A+","  +B)
}else if((C>A) && (C>B) && (B>A)){
    alert("Essa é a ordem crescente: "+A+"," +B+ "," +C)
}else if((C>A) && (B>C) && (B>A)){
    alert("Essa é a ordem crescente: "+A+"," +C+ "," +B)
}else if((C>A) && (C>B) && (A>B)){
    alert("Essa é a ordem crescente: "+B+"," +A+ "," +C)
}else{
    alert("Essa é a ordem crescente: "+B+"," +C+ "," +A)
}