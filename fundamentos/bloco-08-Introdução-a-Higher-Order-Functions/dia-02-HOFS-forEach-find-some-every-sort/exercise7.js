const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1921,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

let expectedResult;

/* function authorUnique() {
    let name = ''
    let arrayOfAge = []
    // pegue as idades e adicione em um array 
    books.forEach((age1) => arrayOfAge.push(age1.author.birthYear))
    // return arrayOfAge
    // ordene essas idades para que assim possa ver se duas posições consecutivas são iguas e com isso resolver o exercício.
    arrayOfAge.sort((a, b) => a - b)
    // return arrayOfAge
    // pega a primeira posição 
    for (let index = 0; index < (arrayOfAge.length - 1); index += 1) {
        // pega a posição sucessora da primeira posição 
        for (let index2 = 0; index2 < (arrayOfAge.length - 1); index2 += 1) {
            // conmpare-as
            if (arrayOfAge[index] === arrayOfAge[index2]) {
                // se forem iguais : false
                name = false
                // caso contrário : true
            } else {
                name = true
            }
        }
    }
    return name
} */
function authorUnique() {
    // eu preciso comparar os names diferentes e idades iguais, para isso vou precisar de dois objetos ao mesmo tempo para comparar, por isso, vamos utilizar o every e depois o some. Vamos nessa:
    // Pega o every para retornar true or false, passando o array para analisar cada objeto. 
    return books.some((book) =>
        // book está pegando o primeiro obj, mas passaria pelos outros para fazer a análise
        // console.log(book)
        !books.some((bookSome) =>
            // console.log(bookSome) aqui está repetindo 6 vezes o array books, é tipo um for dentro de outro for.
            (bookSome.author.birthYear === book.author.birthYear)
            && (bookSome.author.name !== book.author.name)
        ));
}

console.log(authorUnique())