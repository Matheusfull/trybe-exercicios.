// exercício 1 

/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; */
// console.log("bem-vindo(a), " + info[nome])

// exercício 2
// info['recorrente']='sim';
// console.log(info);

// exercício 3

/* for (let key in info) {
    console.log(key)
} */

// exercício 4 

/* for (let key in info) {
    console.log(info[key])
} */

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

// Solução 1

/* info1.personagem = info1.personagem + ' e ' + 'Tio Patinhas';
info1.origem = info1.origem + ' e ' + "Christmas on Bear Mountain,Dell's Four Color Comics #178";
info1.nota = info1.nota + ' e ' + 'O último MacPatinhas';
info1.recorrente = 'Ambos recorrentes'; */

// Solução 2

/* for (let key in info1) {
    if (info1.recorrente === info2.recorrente && info1.recorrente === 'sim') {
        console.log('Ambos recorrentes')
    } else {
        console.log(info1[key] + ' e ' + info2[key])
    }
} */

// exercício 6

let leitor = {
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
/* console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo) */

// exercício 7 

const livro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}

leitor.livrosFavoritos.push(livro);
// console.log(leitor); 

// exercício 8

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

