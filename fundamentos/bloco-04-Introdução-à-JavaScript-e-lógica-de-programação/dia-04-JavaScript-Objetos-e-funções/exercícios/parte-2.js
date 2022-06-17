
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

/* let maiorzinho = ''
let posicao = ''
function maior(array) { */
/*  for (index = 0; index < array.length; index += 1) {
     maiorzinho = Math.max.apply(null, array)
     //console.log(maiorzinho)
     posicao = array.indexOf(maiorzinho)
     console.log(posicao)
     break
 } */
/* // Outra solução
let number = 0
for (let index in array) {
    if (array[0] < array[index]) {
       number = index
    }
}
console.log(number)
} */

// maior([2, 3, 6, 7, 10, 1])


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

// Solução com parecida com a do exercício 2. Porém vamos passar o número de letras de cada nome.
/* 
function letterName(array) {
    let name = array[0]
    for (let value of array) {
        if (name.length < value.length) {
            name = value
        }

    }
    console.log(name);
}
letterName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']) */

// exercício 5 

/* function contador(array) {
    let arrayContador = []
    for (let primeiro of array) {
        let contador = 0
        for (segundo of array) {
            // console.log(segundo)
            if (primeiro === segundo) {
                contador += 1
            }
        }
        arrayContador.push(contador)
    }
    // return arrayContador

     let maior = 0
    for (let index in arrayContador) {
        if (arrayContador[0] < arrayContador[index]) {
            maior = index
        }
    }
    // return maior 
    return array[maior]
}

console.log(contador([2, 3, 2, 5, 8, 2, 3])) */

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

/* function comparacao(string1, string2) {

    let string1Cortada = string1.slice(-string2.length)
    if (string1Cortada === string2) {
        console.log("true")
    } else {
        console.log("false")
    }
} */

// Outra solução 

/* function comparacao(let1, let2) {
    let palavra = let1.split('')
    let fimDaPalavra = let2.split('')
    let situation = true
    for (let index = 0; index < let2.length; index += 1) {
        if (palavra[palavra.length - fimDaPalavra.length + index] != fimDaPalavra[index]) {
            situation = false
            // uma vez que muda a situation, indica que o final não é mais igual.
        }
    }
    return situation;
}

console.log(comparacao('joaofernando', 'fernan')) */