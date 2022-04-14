// exercício 1 
/* 
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    // exercício 2

    recorrente: 'Sim'
};

for (let nome in info) {
    console.log("bem-vindo(a), " + info[nome])
}

// exercício 3

for (let key in info) {
    console.log(key)
}

// exercício 4 

for (let key in info) {
    console.log(info[key])
}
 */
// exercício 5 
let info1 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain,Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
let propDeInfo1 = []
let propDeInfo2 = []

for (let key1 in info1) {
    propDeInfo1.push(info1[key1])
}
for (let key2 in info2) {
    propDeInfo2.push(info1[key2])
}




// exercício 6

/* let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)

// exercício 7 

let leitor1 = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        }, {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editora: 'Rocco',
        }
    ],
}; */