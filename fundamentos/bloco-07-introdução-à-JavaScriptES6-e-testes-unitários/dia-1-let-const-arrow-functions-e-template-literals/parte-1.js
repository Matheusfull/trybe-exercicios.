// EXERCÍCIO 1

/* const testingScope = escopo => {
    if (escopo === true) {
        const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        // ifScope = ifScope + ' ótimo, fui utilizada no escopo !';

        console.log(`${ifScope} ótimo, fui utilizada no escopo ! `);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    // Não precisa mais, pois o ifScope está fora do if/else - console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}
 */
// testingScope(true);                                  

// EXERCÍCIO 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

/* const ordem = (numbers) => {
         for (let j = 0; j < numbers.length; j += 1) {
            for (let i = 0; i < numbers.length; i += 1) {
                if (numbers[i] > numbers[i + 1]) {
                    let posi1 = numbers[i]
                    let posi2 = numbers[i + 1]
                    numbers[i] = posi2
                    numbers[i + 1] = posi1
                }
            }
        }
        return `Os números ${numbers} se encontram ordenados de forma crescente`;

}

console.log(ordem(oddsAndEvens)) */

// BÔNUS

const ordem = (array) => array.sort((a, b) => a - b)

console.log(`Os números ${ordem(oddsAndEvens)} se encontram ordenados de forma crescente!`)

