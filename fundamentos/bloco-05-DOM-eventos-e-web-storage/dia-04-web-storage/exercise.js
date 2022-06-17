window.onload = function () {
    // Cor de fundo da tela;
    let select = document.querySelector('select')
    // console.log(select)
    select.addEventListener('change', function () {
        let selected = select.selectedOptions[0].value
        document.body.style.backgroundColor = selected;
        localStorage.setItem('5-4-backgroundColor', select.value)
    })

    //Cor do texto
    let textColor = document.getElementById('textColor')
    textColor.addEventListener('change', function () {
       let color = textColor.value
        document.querySelector('p').style.color = color
        localStorage.setItem('5-4-color', textColor.value)
    })

    // Tamanho da fonte
    let inputFontSize = document.querySelector('input[name="font-size"]')
    inputFontSize.addEventListener('change', function () {
        document.querySelector('p').style.fontSize = `${inputFontSize.value}px`
        localStorage.setItem('5-4-fontSize', `${inputFontSize.value}px`)
    })

    let color = localStorage.getItem('5-4-backgroundColor')
    document.body.style.backgroundColor = color;

    let font = localStorage.getItem('5-4-fontSize')
    document.querySelector('p').style.fontSize = font

    let colorTextP = localStorage.getItem('5-4-color',textColor.value)
    document.querySelector('p').style.color = colorTextP
}