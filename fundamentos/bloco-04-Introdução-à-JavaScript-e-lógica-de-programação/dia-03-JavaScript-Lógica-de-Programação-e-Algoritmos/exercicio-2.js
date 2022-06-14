let palavra = 'trybe'
let separando = palavra.split("")
console.log(separando)
let invertida = separando.reverse()
console.log(invertida)
let juntando = invertida.join("")
console.log(juntando)

// Outra solução:
let word = 'trybe'
let inverso = ''
for (let index = 0; index < word.length; index += 1) {
    inverso += word[word.length - 1 - index]
}
console.log(inverso)