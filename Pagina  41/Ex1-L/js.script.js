let nome,pronome

nome=(prompt("Por favor insira seu nome:"))
pronome=(prompt("Por favor insira o pronome por qual prefere ser chamado,as opções para facil leitura do programa são:neutre,feminino e masculino"))

if (pronome == "neutre") {
    alert("Sre."+nome)   
}else if(pronome == "feminino") {
    alert("Sra."+nome)
}else if(pronome == "masculino"){
    alert("Sr."+nome)
}   