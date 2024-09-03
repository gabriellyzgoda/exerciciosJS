function calcule() {
    
    numero1 = parseFloat(document.getElementById("num1").value);
    numero2 = parseFloat(document.getElementById("num2").value);
    
    if(numero1%numero2 == 0){
        tela="O número " + numero1 + " é divisível pelo número " + numero2;
    } else{
        tela="O número " + numero1 + " não é divisível pelo número " + numero2;
    }
    
    document.getElementById("resultado").innerHTML = tela;
    }
    