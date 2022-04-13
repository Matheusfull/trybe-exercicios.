
// exercício 1

/* function palindromo(name) {
    let inverso = name.split('').reverse().join('')
    if (name === inverso) {
        console.log("true")
    } else {
        console.log("false")

    }
}

palindromo("desenvolvimento") */

// exercício 2

/* let array = []
let maiorzinho = ''
let posicao = ''
function maior(array) {
    for (index = 0; index < array.length; index += 1) {
        maiorzinho = Math.max.apply(null, array)
        //console.log(maiorzinho)
        posicao = array.indexOf(maiorzinho)
        console.log(posicao)
        break
    }
}


maior([2, 3, 6, 7, 10, 1]) */


// exercício 3

/* let array = []
let menorzinho = ''
let posicao = ''
function maior(array) {
    for (index = 0; index < array.length; index += 1) {
        menorzinho = Math.min.apply(null, array)
        //console.log(maiorzinho)
        posicao = array.indexOf(menorzinho)
        console.log(posicao)
        break
    }
}


maior([2, 4, 6, 7, 10, 0, -3])  */

// exercício 4

/* let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
let nameBig = ''
let meuArray = []
let maior = ''
let indexDoMaiorNome = ''
function maiorNome(array) {
    for (index = 0; index < array.length; index += 1) {
        nameBig = array[index].length
        meuArray.push(nameBig)
    }
    //console.log(meuArray)
    maior = Math.max.apply(null, meuArray)
    //console.log(maior)
    indexDoMaiorNome = meuArray.indexOf(maior)
    //console.log(indexDoMaiorNome)
    console.log(array[indexDoMaiorNome])


}
maiorNome(array) */

// exercício 5 

/* let array = [2, 3, 2, 5, 8, 2, 3]
let repeticao = 0

function repetido(array) {
    for (index = 0; index < array.length; index += 1) {
        if (array[index] === array[index]) {
            repeticao += 1
        }
    }
    console.log(repeticao)
}
repetido(array) */

// exercício 6 

/* let somatorio = 0
function soma(n) {
    for (index = 1; index <= n; index += 1) {
        somatorio += index
    }
    console.log(somatorio)
}

soma(5) */

// exercício 7 
/* 

function comparacao(string1, string2) {

    let string1Cortada = string1.slice(-string2.length)
    if (string1Cortada === string2) {
        console.log("true")
    } else {
        console.log("false")
    }
}

comparacao('trybe', 'be') */