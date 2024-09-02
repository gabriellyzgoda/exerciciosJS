function idade() {
    
numero1 = parseFloat(document.getElementById("idade").value);

if(numero1 <= 18){
    tela="Você é menor de idade!";
} else if(numero1 >= 18 && numero1 <= 60){
    tela="Você é um adulto!";
} else{
    tela="Você é um idoso!";
}

document.getElementById("resultado").innerHTML = tela;
}
