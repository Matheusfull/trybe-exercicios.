// exercícios 1 
let a = 2
let b = 3

//adição
let c = a + b
console.log(c)

//subtração
let d = a - b
console.log(d)

//multiplicação
let e = a * b
console.log(e)

//divisão
let f = a / b
console.log(f)

//módulo 
let g = a % b
console.log(g)

// exercícios 2
let x1 = 6
let x2 = 5
if (x1 > x2) {
    console.log(x1)
} else {
    console.log(x2)
}

// exercícios 3

let y1 = 6
let y2 = 7
let y3 = 3
if (y1 >= y2) {
    console.log(y1)
} else if (y1 >= y3) {
    console.log(y1)
} else if (y2 >= y3) {
    console.log(y2)
} else {
    console.log(y3)
}

// exercícios 4

const u1 = -3

if (u1 > 0) {
    console.log("postive")
} else if (u1 < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

// exercícios 5

const a1 = 70
const a2 = 100
const a3 = 10
if (a1 + a2 + a3 === 180 && a1 > 0 && a2 > 0 && a3 > 0) {
    console.log("é um triangulo")
} else {
    console.log("não é um triangulo")
}

// exercícios 6


// exercícios 7

let nota = 110
if (nota >= 90 && nota <= 100) {
    console.log("A")
} else if (nota >= 80 && nota < 90) {
    console.log("B")
} else if (nota >= 70 && nota < 80) {
    console.log("C")
} else if (nota >= 60 && nota < 70) {
    console.log("D")
} else if (nota >= 50 && nota < 60) {
    console.log("E")
} else if (nota < 50 && nota >= 0) {
    console.log("F")
} else {
    console.log("Erro ao passar a nota")
}

// exercício 8
const number1 = 2
const number2 = 3
const number3 = 5
if (number1 % 2 === 0 | number2 % 2 === 0 || number3 % 2 === 0) {
    console.log("true")
} else {
    console.log("false")
}

// exercício 9 
const number4 = 2
const number5 = 4
const number6 = 6
if (number4 % 2 !== 0 || number5 % 2 !== 0 || number6 % 2 !== 0) {
    console.log("true")
} else {
    console.log("false")
}

//exercício 10


const custo = 10
const valorDeCustoTotal = (custo + custo * 0.2)
const valorDeVenda = 20
const lucro = valorDeVenda - valorDeCustoTotal
if (custo === 0 || valorDeVenda === 0) {
    console.log("Erros com os valores de entrada")
} else {
    console.log(`Seu lucro foi de ${lucro * 1000}`)
}

// exercício 11

const salarioBruto = 3000

if (salarioBruto <= 1556.94) {
    salarioComINSSDescontado = salarioBruto * 0.92
    console.log(salarioComINSSDescontado)

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioComINSSDescontado = salarioBruto * 0.91
    console.log(salarioComINSSDescontado)

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioComINSSDescontado = salarioBruto * 0.89
    console.log(salarioComINSSDescontado)

} else if (salarioBruto > 5189.82) {
    salarioComINSSDescontado = salarioBruto - 570.88
    console.log(salarioComINSSDescontado)

}

if (salarioComINSSDescontado >= 1903 && salarioComINSSDescontado <= 2826.65) {
    descontoIR = (salarioComINSSDescontado * 0.075) - 142.80
    console.log(descontoIR)
} else if (salarioComINSSDescontado >= 2826.66 && salarioComINSSDescontado <= 3751.05) {
    descontoIR = (salarioComINSSDescontado * 0.15) - 354.80
    console.log(descontoIR)
} else if (salarioComINSSDescontado >= 3751.06 && salarioComINSSDescontado <= 4664.68) {
    descontoIR = (salarioComINSSDescontado * 0.225) - 636.13
    console.log(descontoIR)
} else {
    descontoIR = (salarioComINSSDescontado * 0.275) - 869.36
    console.log(descontoIR)
}

let salarioLiqudo = salarioComINSSDescontado - descontoIR
console.log(salarioLiqudo)