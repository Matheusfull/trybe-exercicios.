/* let numeros = []
let maiorCaracter = ''
let nomeDeMiorCaracter = ''
let array = ['java', 'javascript', 'python', 'html', 'css'];
for (let lingua = 0; lingua < array.length; lingua += 1) {
  let tamanho = array[lingua].length
  numeros.push(tamanho)
}
//console.log(numeros)
maiorCaracter = Math.max.apply(null, numeros)
//console.log(maiorCaracter)

nomeDeMiorCaracter = numeros.indexOf(maiorCaracter)
//console.log(nomeDeMiorCaracter)
console.log(array[nomeDeMiorCaracter]) */

// Outra solução: passando cada linguagem como um número, poderemos resolver este exercício com o mesmo raciocínio utilizado no exercício 5 do bloco 4.2
/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index]
  }
}
console.log(maiorPalavra); */
