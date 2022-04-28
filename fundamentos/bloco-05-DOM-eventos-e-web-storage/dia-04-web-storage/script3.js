/* 
let input3 = document.getElementById("input3")
let button3 = document.getElementById("btn3")
let ul3 = document.getElementById("ul3")
let texto = document.getElementById("texto")
let titulo = document.getElementById("titulo")

function inserindoNoDOM3() {
    let caracterList = JSON.parse(localStorage.getItem('caracter3'))
    let listLength = caracterList.length - 1
    let cadaCaracter = caracterList[listLength]
    let caracter = document.createElement('li')
    caracter.innerText = cadaCaracter
    ul3.appendChild(caracter)
}
function adicionandoCaracterAoLStage3() {
    const oldList = JSON.parse(localStorage.getItem('caracter3'))
    const caracterNovo = input3.value
    oldList.push(caracterNovo)

    localStorage.setItem('caracter3', caracterNovo)
    const novo = localStorage.getItem('caracter3')
    texto.style.fontSize = novo
    titulo.style.fontSize = novo


    localStorage.setItem('caracter3', JSON.stringify(oldList))
    input3.value = ''
    inserindoNoDOM3()
}
function iniciandoRenderizacao3() {
    if (localStorage.getItem('caracter3') === null) {
        localStorage.setItem('caracter3', JSON.stringify([]));
    } else {
        const caracterList = JSON.parse(localStorage.getItem('caracter3'));
        const listLength = caracterList.length - 1;
        for (let index = 0; index <= listLength; index += 1) {
            //Criação da lista com cada ítem do lStorage
            const listCaracter = document.createElement('li');
            listCaracter.innerText = caracterList[index];
            ul3.appendChild(listCaracter);
        }
    }
}
button3.addEventListener('click', adicionandoCaracterAoLStage3);
window.onload = function () {
    iniciandoRenderizacao3();
}; */