
let input4 = document.getElementById("input4")
let button4 = document.getElementById("btn4")
let ul4 = document.getElementById("ul4")
let texto = document.getElementById("texto")


function inserindoNoDOM4() {
    let caracterList = JSON.parse(localStorage.getItem('caracter4'))
    let listLength = caracterList.length - 1
    let cadaCaracter = caracterList[listLength]
    let caracter = document.createElement('li')
    caracter.innerText = cadaCaracter
    ul4.appendChild(caracter)
}
function adicionandoCaracterAoLStage4() {
    const oldList = JSON.parse(localStorage.getItem('caracter4'))
    const caracterNovo = input4.value
    oldList.push(caracterNovo)

    localStorage.setItem('caracter4', caracterNovo)
    const novo = localStorage.getItem('caracter4')
    texto.style.fontSize = novo
    


    localStorage.setItem('caracter4', JSON.stringify(oldList))
    input4.value = ''
    inserindoNoDOM4()
}
function iniciandoRenderizacao4() {
    if (localStorage.getItem('caracter4') === null) {
        localStorage.setItem('caracter4', JSON.stringify([]));
    } else {
        const caracterList = JSON.parse(localStorage.getItem('caracter4'));
        const listLength = caracterList.length - 1;
        for (let index = 0; index <= listLength; index += 1) {
            //Criação da lista com cada ítem do lStorage
            const listCaracter = document.createElement('li');
            listCaracter.innerText = caracterList[index];
            ul4.appendChild(listCaracter);
        }
    }
}
button4.addEventListener('click', adicionandoCaracterAoLStage4);
window.onload = function () {
    iniciandoRenderizacao4();
};