let numeros = []
let array = ['java', 'javascript', 'python', 'html', 'css'];
for (let lingua = 0; lingua < array.length; lingua += 1) {
  let tamanho = array[lingua].length
  numeros.push(tamanho)
}
let ordem = numeros.sort()
//console.log(ordem)
let maior = ordem[0]
console.log(maior)
