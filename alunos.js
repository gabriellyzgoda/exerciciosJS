function calcular() {
    /*numero1 = document.getElementById("num1").value;
    numero2 = document.getElementById("num2").value;
    numero3 = numero1 + numero2;
    document.getElementById("resultado1").innerHTML = numero3;
*/
    numero1 = parseFloat(document.getElementById("num1").value);
    numero2= parseFloat(document.getElementById("num2").value);
    numero3= parseFloat(document.getElementById("num3").value);
    numero4= (numero1+numero2+numero3)/3;
    document.getElementById("resultado").innerHTML = numero4;
}