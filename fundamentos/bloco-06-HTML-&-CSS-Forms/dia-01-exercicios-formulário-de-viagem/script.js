// exercício 3

/*  const btn = document.getElementById('btn')

function enviar(event) {
    event.preventDefault();
    console.log('mandando dados');
    const box = document.getElementById('ok2')
    if (box.checked) {
        console.log('as fotos foram autorizadas!')
    }else{
        console.log('sem autorização')
    }
}

btn.addEventListener('click', enviar) */

// Outar solução: 

// exercício 3 

function preventDefault(event) {
    event.preventDefault();
}

// exercício 4

function clearInputs() {
    const ipnuts = document.querySelectorAll('input')
    const textArea = document.querySelector('textarea')
    for (let index = 0; index < ipnuts.length; index += 1) {
        ipnuts[index] = ''
        ipnuts[index].checked = false
    }
    textArea.value = ''
}

window.onload = function () {
    const btn = document.getElementById("btn")
    btn.addEventListener('click', preventDefault)

    const clear = document.getElementById('clear')
    clear.addEventListener('click', clearInputs)
}


// BÔNUS 

/* const btn = document.getElementById('btn')

function enviar(event) {
    const box = document.getElementById('ok2')
    const name = document.getElementById('name').value.length
    const email = document.getElementById('email').value.length
    const text = document.getElementById('text').value.length
    if (box.checked && ((name >= 10 && name <= 40) && (email >= 10 && email <= 50) && text <= 500) ) {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
        console.log('as fotos foram autorizadas!')
    } else {
        alert('Dados inválidos!')
        event.preventDefault();
    }
}

btn.addEventListener('click', enviar) */


