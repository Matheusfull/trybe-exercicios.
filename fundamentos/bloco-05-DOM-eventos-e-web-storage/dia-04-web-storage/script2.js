/* 
let input2 = document.getElementById("input2")
let button2 = document.getElementById("btn2")
let ul2 = document.getElementById("ul2")
let texto = document.getElementById("texto")

function inserindoNoDOM2() {
    let caracterList = JSON.parse(localStorage.getItem('caracter2'))
    let listLength = caracterList.length - 1
    let cadaCaracter = caracterList[listLength]
    let caracter = document.createElement('li')
    caracter.innerText = cadaCaracter
    ul2.appendChild(caracter)
}
function adicionandoCaracterAoLStage2() {
    const oldList = JSON.parse(localStorage.getItem('caracter2'))
    const caracterNovo = input2.value
    oldList.push(caracterNovo)

    localStorage.setItem('caracter2', caracterNovo)
    const novo = localStorage.getItem('caracter2')
    texto.style.color = novo

    localStorage.setItem('caracter2', JSON.stringify(oldList))
    input2.value = ''
    inserindoNoDOM2()
}
function iniciandoRenderizacao2() {
    if (localStorage.getItem('caracter2') === null) {
        localStorage.setItem('caracter2', JSON.stringify([]));
    } else {
        const caracterList = JSON.parse(localStorage.getItem('caracter2'));
        const listLength = caracterList.length - 1;
        for (let index = 0; index <= listLength; index += 1) {
            //Criação da lista com cada ítem do lStorage
            const listCaracter = document.createElement('li');
            listCaracter.innerText = caracterList[index];
            ul2.appendChild(listCaracter);
        }
    }
}
button2.addEventListener('click', adicionandoCaracterAoLStage2);
window.onload = function () {
    iniciandoRenderizacao2();
}; */