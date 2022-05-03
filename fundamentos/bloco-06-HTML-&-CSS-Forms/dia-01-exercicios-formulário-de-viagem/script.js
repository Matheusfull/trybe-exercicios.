// exercício 3

/* const btn = document.getElementById('btn')

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

btn.addEventListener('click', enviar)
 */

// BÔNUS 

const btn = document.getElementById('btn')

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
    }
}

btn.addEventListener('click', enviar)


