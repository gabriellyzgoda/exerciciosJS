function calcular() {
    numero1 = document.getElementById("numero").value;
    numero2 = document.getElementById("numero2").value;
    numero3 = numero1-numero2;
    document.getElementById("resultado").innerHTML = numero3;
    }
    function calcular1() {
    numero1 = document.getElementById("numero3").value;
    numero2 = document.getElementById("numero4").value;
    numero3 = numero1-numero2;
    document.getElementById("resultado1").innerHTML = numero3;
    }
    function calcular2() {
    numero1 = document.getElementById("numero5").value;
    numero2 = document.getElementById("numero6").value;
    numero3 = numero1/numero2;
    document.getElementById("resultado2").innerHTML = numero3;
    }
    function calcular3() {
    numero1 = document.getElementById("numero7").value;
    numero2 = document.getElementById("numero8").value;
    numero3 = numero1-numero2;
    document.getElementById("resultado3").innerHTML = numero3;
    }
    function calcular4() {
    numero1 = document.getElementById("numero9").value;
    numero2 = document.getElementById("numero10").value;
    numero3 = numero1/numero2;
    document.getElementById("resultado4").innerHTML = numero3;
    }
    function calcular5() {
    numero1 = parseFloat(document.getElementById("numero11").value);
    numero2 = parseFloat(document.getElementById("numero12").value);
    numero3 = parseFloat(document.getElementById("numero13").value);
    numero4 = numero1+(numero2*numero3);
    document.getElementById("resultado5").innerHTML = numero4;
    }
    function calcular6() {
    numero1 = parseFloat(document.getElementById("numero14").value);
    numero2 = parseFloat(document.getElementById("numero15").value);
    numero3 = parseFloat(document.getElementById("numero16").value);
    numero4 = numero1+(numero2*numero3);
    document.getElementById("resultado6").innerHTML = numero4;
    }
    function calcular7() {
    numero1 = parseFloat(document.getElementById("numero17").value);
    numero2 = parseFloat(document.getElementById("numero18").value);
    numero3 = parseFloat(document.getElementById("numero19").value);
    numero4 = (numero1*numero1)+(2*numero2*numero3);
    document.getElementById("resultado7").innerHTML = Math.sqrt(numero4);
    }