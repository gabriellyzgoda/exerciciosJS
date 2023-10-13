function cubo() {
    numero1 = parseFloat(document.getElementById("num1").value);
    numero2= numero1*numero1*numero1;
    document.getElementById("resultado").innerHTML = numero2;
}
