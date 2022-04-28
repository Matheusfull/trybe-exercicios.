// exercício 3

const btn = document.getElementById('btn')

function enviar(event) {
    event.preventDefault();
    console.log('mandando dados');
}

btn.addEventListener('click', enviar)

