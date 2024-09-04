function lista() {
    const input = document.getElementById('num1').value;

    const numeros = input.split(',').map(item => item.trim());

    let listaHtml = '';
            for (let i = 0; i < numeros.length; i++) {
                listaHtml += `${numeros[i]}<br>`;
            }
            
            document.getElementById('resultado').innerHTML = `<ul>${listaHtml}</ul>`;
        }