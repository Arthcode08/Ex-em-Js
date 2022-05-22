
    var num5= parseFloat(prompt("Por favor insira um número"))
    var num4= parseFloat(prompt("Por favor insira um número"))
    var num3= parseFloat(prompt("Por favor insira um número"))
    var num2= parseFloat(prompt("Por favor insira um número"))
    var num1= parseFloat(prompt("Por favor insira um número"))
 
    var maior = num1;

     if(num2 > maior)
      maior = num2;
     if(num3 > maior)
      maior = num3;
      if(num4 > maior)
      maior = num4;
     if(num5 > maior)
      maior = num5;

      var menor = num1;

     if(num2 < menor)
      menor = num2;
     if(num3 < menor)
      menor = num3;
      if(num4 < menor)
      menor = num4;
     if(num5 < menor)
      menor = num5;

     alert("Maior: "+maior+ " Menor: "+menor);
    
