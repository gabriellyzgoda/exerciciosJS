function calcule() {
    
    numero1 = parseFloat(document.getElementById("num1").value);
    numero2 = parseFloat(document.getElementById("num2").value);
    
    if(numero1 > numero2){
        tela="O número " + numero1 + " é maior do que o número " + numero2;
    } else if(numero1 < numero2){
        tela="O número " + numero2 + " é maior do que o número " + numero1;
    } else{
        tela="Os números: " + numero1 + " e " + numero2 + " são iguais";
    }
    
    document.getElementById("resultado").innerHTML = tela;
    }
    