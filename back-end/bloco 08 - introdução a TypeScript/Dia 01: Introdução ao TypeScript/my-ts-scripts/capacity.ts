// Depois daquele bizu da exponenciação de 10, não caio mais
import readline from 'readline-sync';
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert3(value: number, base: string, conversion: string): number {
    const fromIndex = unitsCapacity.indexOf(base);
    const toIndex = unitsCapacity.indexOf(conversion);
    const expoent = toIndex - fromIndex;
    return value * Math.pow(10, expoent);
}

function exec3 () {
    const value = readline.questionFloat('Digite o número que deseja converter')
    const base =  readline.question('Qual a unidade de medida atual ?')
    const conversion =  readline.question('Qual a unidade de medida desejaconverter ?')
    console.log(convert3(value, base, conversion))
}

exec3();

/*
Exercício 4 
Seguirá a mesma lógica do exercício 3
*/