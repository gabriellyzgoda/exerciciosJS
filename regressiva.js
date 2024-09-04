function numeros() {
    resultado.innerHTML = '';

    for (let i = 10; i >= 1; i--) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = i;
        resultado.appendChild(paragrafo);
    }
}

botao.addEventListener('click', numeros);