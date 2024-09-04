function fatorial() {
    numero1 = parseFloat(document.getElementById("num1").value);
    let fatorial = 1
    for (let i = 1; i <= numero1; i++) {
        fatorial *= i;
        }
        document.getElementById("resultado").innerHTML = `Fatorial de ${numero1} é ${fatorial}`;
    }