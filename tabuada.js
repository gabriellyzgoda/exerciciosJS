function tabuada() {
    numero1 = parseFloat(document.getElementById("num1").value);

    let resultado = '';
            // Calcula a tabuada
            for (let i = 1; i <= 10; i++) {
                resultado += `${numero1} x ${i} = ${numero1 * i}<br>`;
            }
            // Exibe o resultado
            document.getElementById('resultado').innerHTML = resultado;
        }