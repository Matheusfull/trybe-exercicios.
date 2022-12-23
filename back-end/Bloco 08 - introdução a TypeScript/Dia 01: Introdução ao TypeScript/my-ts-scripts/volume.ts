// Depois daquele bizu da exponenciação de 10, não caio mais
import readline from 'readline-sync';
const unitsVol= ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
function convert5(value: number, base: string, conversion: string): number {
    const fromIndex = unitsVol.indexOf(base);
    const toIndex = unitsVol.indexOf(conversion);
    const expoent = toIndex - fromIndex;
    return value * Math.pow(1000, expoent );
}

function exec5 () {
    const value = readline.questionFloat('Digite o número que deseja converter')
    const base =  readline.question('Qual a unidade de medida atual ?')
    const conversion =  readline.question('Qual a unidade de medida desejaconverter ?')
    console.log(convert5(value, base, conversion))
}

exec5();

/*
Exercício 6 
Seguirá a mesma lógica do exercício 3
*/
