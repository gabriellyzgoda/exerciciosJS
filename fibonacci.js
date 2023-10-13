function termo(){
    var num = parseFloat(document.getElementById("num").value);
    var num1 = 0;
    var num2 = 1;

    for(var count= 3; count<=num; count++){
        numero = num1 + num2;
    }
    document.getElementById("resultado").innerHTML = numero;
}