// escreva greet abaixo

function greet(name , saudation = 'hi') {
    return `${saudation}, ${name}`
}

console.log(greet('John')) // 'Hi John'
 console.log(greet('John', 'Good morning')) // 'Good morning John'
 console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'