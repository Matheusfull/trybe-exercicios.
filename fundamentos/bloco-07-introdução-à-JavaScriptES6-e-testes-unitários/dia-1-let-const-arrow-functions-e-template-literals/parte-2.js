// Exercício 1

/* function fatorial(n) {
    let fatorial = 1;
    for (let i = 1; i <= n; i += 1) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(5)) */

// Fatorial recursivo

/* const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1
console.log(fatorial(5)) */

// Exercício 2

/* const contador = string => {
    const arrayOfString = string.split(' ')
    // console.log(arrayOfString)
    let array = []
    for (let word of arrayOfString) {
        array.push(word.length)
    }
    const maior = array.sort()[array.length - 1]
    // console.log(maior)
     const indiceDaMaiorPalavra = array.indexOf(maior)
     // console.log(indiceDaMaiorPalavra)
     console.log(arrayOfString[indiceDaMaiorPalavra])
}

contador('Antônio foi no banheiro e não sabemos o que aconteceu') */

// Outra solução: 
/* const longestWord = (text) => {
    const words = text.split(' ')
    let maxLength = 0;
    let result = ''
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }
    return result
}
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu')) */

// Outar solução: 

/* const maior = text => text.split(' ').sort((a, b) => b.length - a.length)[0]
console.log(maior('Antonio foi ao banheiro e não sabemos o que aconteceu')) */

// Exercício 4.1

/* 
Método sem recursividade
const func1 = (name) => {
    const frase = 'Tryber x aqui!'
    const array = frase.split(' ')
    const novoArray = array.splice(1,1,name)
    return array.join()
}
console.log(func1('Matheus')) */

// Método com  recursividade

const func1 = (name) => {
    const frase = 'Tryber x aqui!'
    const array = frase.split(' ')
    for (let index = 0; index < array.length; index += 1) {
        //  console.log(index)
        if (array[index] === 'x') {
            array[index] = name
        }
    }
    return array.join(' ')
}

const string = func1('Matheus')

// console.log(func1('Matheus')) 

// Exercício 4.2

const func2 = (string) => {
    const skills = ['css', 'html', 'js']
    return `${string}
 Minhas principais habilidades são:
 ${skills[0]}
 ${skills[1]}
 ${skills[2]}
 `
}

console.log(func2(func1('Matheus')))