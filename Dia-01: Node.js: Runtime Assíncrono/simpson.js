const fs = require('fs').promises;

// exercício 6.1

/* async function listSimpson() {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    // const list = simpsons.map((a) => `${a.id} - ${a.name}`);
    // return list;
    const list = JSON.parse(simpsons);
    console.log(list.map((a) => `${a.id} - ${a.name}`));
}

listSimpson(); */

// exercício 6.2

/* async function listIdSimpson(id) {

    const list = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(list);
    // console.log(list);
    const simpson = simpsons.find((a) => Number(a.id) === id)
    console.log(simpson);
    if (!simpson) {
        // * A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
        // * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
        // * tendo como motivo o que passarmos para o `throw`.
        // * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
        // throw new Error('id não encontrado')
    }
    // * Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
    //  * `return` aciona o fluxo de sucesso e resolve a Promise.
    // * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
    // * dentro do executor de uma Promise.
    // * 
    return simpson;

};

async function main() {
    await listIdSimpson(1);
}

main(); */

// exercício 6.3

/* async function deleteSimpson () {
    const list = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(list);
    const simpsonFilter = simpsons.filter((a) => Number(a.id) !== 10 && Number(a.id) !== 6);
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsonFilter))
    // console.log(list);
};

async function main() {
    await deleteSimpson();
}

main(); */

// exercício 6.4

/* async function creatFile() {
    const simpsons = [{ "id": "1", "name": "Homer Simpson" }, { "id": "2", "name": "Marge Simpson" }, { "id": "3", "name": "Bart Simpson" }, { "id": "4", "name": "Lisa Simpson" }];
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));

}

async function main() {
    await creatFile();
}

main(); */

// Outra forma de fazer a função:

/* async function creatFile() {
    const list = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(list);
    const index = [1, 2, 3, 4]
    const simpsonFamily = simpsons.filter((simpson) => index.includes(Number(simpson.id)))
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
};

async function main() {
    await creatFile();
}

main() */

// exercício 6.5

/* async function adicionandoNelson() {
    const simpsons = [{ "id": "1", "name": "Homer Simpson" }, { "id": "2", "name": "Marge Simpson" }, { "id": "3", "name": "Bart Simpson" }, { "id": "4", "name": "Lisa Simpson" }, { "id": "5", "name": "Nelson Muntz" }];
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));

}

function main() {
    adicionandoNelson();
}

main(); */

// Outra forma de fazer a função:

/* async function adicionandoNelson() {
    const list = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const simpsons = JSON.parse(list);
    simpsons.push({"id":"5","name":"Nelson Muntz"});
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
}

 function main() {
     adicionandoNelson();
}

main(); */

// exercício 6.6

/* async function mudandoMaggie() {
    const simpsons = [{ "id": "1", "name": "Homer Simpson" }, { "id": "2", "name": "Marge Simpson" }, { "id": "3", "name": "Bart Simpson" }, { "id": "4", "name": "Lisa Simpson" }, { "id": "5", "name": "Maggie Simpson" }];
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));

}

async function main() {
    await mudandoMaggie();
}

main(); */

// Outra forma de fazer a função:

/* async function mudandoMaggie() {
    const list = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const simpsons = JSON.parse(list);
    const index = simpsons.filter((simpson) => simpson.name == 'Nelson Muntz')
    const indice = index[0].id;
    const newObject = {"id":indice,"name":"Maggie Simpson"};
    const newArray = simpsons.filter((simpson) => simpson.name !== 'Nelson Muntz')
    newArray.push(newObject);
    console.log(newArray)
    // await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
}

 function main() {
     mudandoMaggie();
}

main(); */

/*
6.1
1 - Vamos importar o  módulo fs/promises para realizar uma leitura, além de usarmos uma função assíncrona
2 - Usaremos o fs.readFile para lermos o arquivo. Mas observe que este método usa dois parâmetros, o 1 é o endereço do arquivo e o 2 o encoding para leitura.
3 - O arquivo que acabamos de ler é um JSON e precisamos converter para um array. Usaremos então o JSON.parse
4 - Com um array de objetos, basta usar um map, a fim de que cada objeto seja lido pelo console.log
*/

/*
6.2
1 - Teremos a primeira função que retornará uma promise para o id passado como parâmetro. Logo, ela será aasíncrona
2 - Fazeremos quase a mesma coisa do exercício anterior: leremos o json, converteremos e procuraremos um objeto que tenha o mesmo id correspondente. Até ai tudo normal
3 - Caso o id não seja igual a algum dos objetos, usaremos um if para fazer um tratamento usando o throw new error com uma mensagem (id não encontrado)
4 - Feito isso, retornaremos o simpson encontrado, caso haja!
5 - Agora vamos criar outra função para tratar o retorno da primeira. Para isto basta usar o async/await
*/

/*
6.3
1 - Seguiremos os mesmos passos dos exercícios anteriores: lê o json, converter para um array de objetos.
2 - Agora filtraremos os objetos de modo que os que têm id 10 e 6 não estarão no array. Usaremos então um filter
3 - Aqui que vem a coisa nova, reescreveremos um json com o método fs.writeFile, onde passaremos o endereço deste json e depois o que vamos rescrever
obs: No segundo parâmetro não podemos colocar o array de objetos, pois ele não reescreve um json kkk tem que ser uma coisa da mesma natureza para reescrever, portanto, usaremos o JSON.stringify a fim de que o array seja convertido para json e assim ocorra a mudança.
4 - Executaremos isso tudo na função main. 
*/

/*
6.4
1 - Pega o array que deseja criar no arquivo
2 - usa o método fs.writeFile, onde o primeiro parâmetro é o arquivo que vamos criar(ou reescrever) e o segundo parâmetro é o que vamos colocar. Vale ressaltar que o que vamos colocar precisa ser convertido, usaremos então o JSON.stringify
3 - Chama essa função na main para tratar a promise e depois chama a main.
*/

/*
6.5
1 - Mesmo raciocínio da 6.4, porém vamos alterar somente o array, colocando um objeto a mais.
*/

/*
6.6
1 - Pega o json, converte em array
2 - Encontra o id do objeto que tem o Nelson Muntz
3 - Faz um novo objeto, porém com o mesmo id e nome da Maggie Simpson
4 - Faz um novo array sem o nelson e dando um push com o objeto criado
*/