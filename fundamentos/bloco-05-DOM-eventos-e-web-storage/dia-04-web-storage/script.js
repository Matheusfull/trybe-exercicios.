/*  let titulo = document.getElementById("titulo")
let input = document.getElementById("input")
let button = document.getElementById("btn")
let ul = document.getElementById("ul")


function inserindoNoDOM() {
    let caracterList = JSON.parse(localStorage.getItem('caracter'))
    let listLength = caracterList.length - 1
    let cadaCaracter = caracterList[listLength]
    let caracter = document.createElement('li')
    caracter.innerText = cadaCaracter
    ul.appendChild(caracter)
}
function adicionandoCaracterAoLStage() {
    const oldList = JSON.parse(localStorage.getItem('caracter'))
    const caracterNovo = input.value
    oldList.push(caracterNovo)

    localStorage.setItem('caracter', caracterNovo)
    const novo = localStorage.getItem('caracter')
    titulo.style.color = novo

    localStorage.setItem('caracter', JSON.stringify(oldList))
    input.value = ''
    inserindoNoDOM()
}
function iniciandoRenderizacao() {
    if (localStorage.getItem('caracter') === null) {
        localStorage.setItem('caracter', JSON.stringify([]));
    } else {
        const caracterList = JSON.parse(localStorage.getItem('caracter'));
        const listLength = caracterList.length - 1;
        for (let index = 0; index <= listLength; index += 1) {
            //Criação da lista com cada ítem do lStorage
            const listCaracter = document.createElement('li');
            listCaracter.innerText = caracterList[index];
            ul.appendChild(listCaracter);
        }
    }
}
button.addEventListener('click', adicionandoCaracterAoLStage);
window.onload = function () {
    iniciandoRenderizacao();
};



 function saveDateToLStorage() {
    localStorage.setItem('arquivo1', input.value)
    let cor = localStorage.getItem('arquivo1')
    titulo.style.color = cor
    input.value = ''
    let li = document.createElement("li")
    li.innerText = cor
    ul.appendChild(li)

}

button.addEventListener('click', saveDateToLStorage) 
 


  */