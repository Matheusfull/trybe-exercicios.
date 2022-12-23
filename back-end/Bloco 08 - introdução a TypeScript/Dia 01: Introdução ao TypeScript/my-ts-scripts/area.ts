// Depois daquele bizu da exponenciação de 10, não caio mais
import readline from 'readline-sync';
const unitsArea = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

function convert4(value: number, base: string, conversion: string): number {
    const fromIndex = unitsArea.indexOf(base);
    const toIndex = unitsArea.indexOf(conversion);
    const expoent = toIndex - fromIndex;
    return value * Math.pow(100, expoent);
}

function exec4 () {
    const value = readline.questionFloat('Digite o número que deseja converter')
    const base =  readline.question('Qual a unidade de medida atual ?')
    const conversion =  readline.question('Qual a unidade de medida desejaconverter ?')
    console.log(convert4(value, base, conversion))
}

exec4();

/*
Exercício 5 
Seguirá a mesma lógica do exercício 3
*/
