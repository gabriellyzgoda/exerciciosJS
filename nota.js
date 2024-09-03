function calcule() {
    
    numero1 = parseFloat(document.getElementById("num1").value);
    
    if(numero1 >= 7){
        tela="Vcoê foi aprovado!";
    } else{
        tela="Vcoê foi reprovado!";
    }
    
    document.getElementById("resultado").innerHTML = tela;
    }
    