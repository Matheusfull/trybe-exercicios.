const hydrate = (string) => {
    let soma = 0
    let numeros = []
    // Pegando o primeiro número
    let array = string.split(',')
    let primeiroNumero = array[0].split('')
    numeros.push(parseInt(primeiroNumero[0]))
    soma += parseInt(numeros)
    // return soma

    // Pegando os números depois de vírgulas

    if (array.length > 1) {
        for (let index = 1; index < array.length; index += 1) {
            let numeroDoMeio = array[index].split('')
            // console.log(numeroDoMeio)
            numeros.push(parseInt(numeroDoMeio[1]))
            // console.log(numeros)
        }



        // Pegando o último número

        let ultimoArray = array[array.length - 1].split(' ')
        let ultimoNumero = ultimoArray[ultimoArray.length - 2]
        numeros.push(parseInt(ultimoNumero))
        // console.log(numeros)
    }
    // Somando os Números do Array

    for (let i = 0; i < numeros.length; i += 1) {
        soma += numeros[i]
        // console.log(soma)
    }

    // return soma 

    if (soma == 1) {
        return `${soma} copo de água`
    } else {
        return `${soma} copos de água`
    }
}

console.log(hydrate(('1 copo de catuaba, 1 cervejas e 1 copo de vinho')))

module.exports = hydrate;