const botao = document.getElementById('numero');

function imprimirNumeros() {
    resultado.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = i;
        resultado.appendChild(paragrafo);
    }
}

botao.addEventListener('click', imprimirNumeros);