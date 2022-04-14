let numeros = []
let maiorCaracter = ''
let nomeDeMiorCaracter =''
let array = ['java', 'javascript', 'python', 'html', 'css'];
for (let lingua = 0; lingua < array.length; lingua += 1) {
  let tamanho = array[lingua].length
  numeros.push(tamanho)
}
//console.log(numeros)
maiorCaracter  = Math.max.apply(null,numeros)
//console.log(maiorCaracter)

nomeDeMiorCaracter = numeros.indexOf(maiorCaracter)
//console.log(nomeDeMiorCaracter)
console.log(array[nomeDeMiorCaracter])


