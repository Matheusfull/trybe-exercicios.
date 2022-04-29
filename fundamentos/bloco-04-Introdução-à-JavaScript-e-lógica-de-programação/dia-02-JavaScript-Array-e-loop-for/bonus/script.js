// EXERCÍCIO 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for (let j = 0; j < numbers.length; j += 1){
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > numbers[i + 1]) {
            let posi1 = numbers[i]
            let posi2 = numbers[i + 1]
            numbers[i] = posi2
            numbers[i + 1] = posi1
        }
    }
}
    console.log(numbers) */


// EXERCÍCIO 2
/* 
for (let j = 0; j < numbers.length; j += 1) {
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] < numbers[i + 1]) {
            let posi1 = numbers[i]
            let posi2 = numbers[i + 1]
            numbers[i] = posi2
            numbers[i + 1] = posi1
        }
    }
}
console.log(numbers) */

// EXERCÍCIO 3

for (let i = 0; i < numbers.length - 1; i += 1) {
    if (i !== (numbers.length - 2)) {
        let fator1 = numbers[i]
        let fator2 = numbers[i + 1]
        let produto = fator1 * fator2
        numbers[i] = produto
    } else {
        numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1]
        numbers[numbers.length - 1] = numbers[numbers.length - 1] * 2
    }

}

console.log(numbers)
