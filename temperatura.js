function calcule() {
    
    numero1 = parseFloat(document.getElementById("num1").value);
    
    if(numero1 >= 25){
        tela="A temperatura está quente!";
    } else if(numero1 <= 25 && numero1 >=18){
        tela="A temperatura está agradável!";
    } else{
        tela="A temperatura está fria!";
    }
    
    document.getElementById("resultado").innerHTML = tela;
    }
    