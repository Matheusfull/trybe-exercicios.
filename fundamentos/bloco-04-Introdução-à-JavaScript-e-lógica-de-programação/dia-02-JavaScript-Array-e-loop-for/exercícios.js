let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1 

//for (let number = 0; number < numbers.length; number += 1){
// console.log(numbers[number])
//}

// exercício 2  
//let soma = 0
//for (let number = 0; number < numbers.length; number += 1){
//  soma += numbers[number]
//}
//console.log(soma)

// exercício 3 

//let soma = 0
//for (let number = 0; number < numbers.length; number += 1){
//soma += numbers[number]
//}
//let media = soma/(numbers.length)

//console.log(media)

// exercício 4 


//let soma = 0
//for (let number = 0; number < numbers.length; number += 1) {
//  soma += numbers[number]
//}
//let media = soma / (numbers.length)

//if(media>20){
//  console.log("valor maior que 20")
//}else{
//  console.log("valor menor ou igual a 20")
//}

// exercício 5

//var max = Math.max(...numbers)
//console.log(max)

// exercício 6 
let impares = []
for (let number = 0; number < numbers.length; number += 1) {
    let numeros = numbers[number]
    if (numeros % 2 !== 0) {
        let qtd = numeros.filter(impares)
        console.log(qtd)
    } else {
        console.log
    }
}
// exercício 7

//var max = Math.min(...numbers)
//console.log(max)

// exercício 8

//for(i=1;i<=25;i+=1){
//  console.log(i)
//}

// exercício 9 

//for (i = 1; i <= 25; i += 1) {
  // let numero = i/2
 //  console.log(numero)
//}