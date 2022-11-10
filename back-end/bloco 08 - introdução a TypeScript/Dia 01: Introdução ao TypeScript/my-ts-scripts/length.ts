import readline from 'readline-sync';
function convert1(value: number, base: string, conversion: string): number  {
    if (base === 'km' && conversion === 'm') return value * 1000
    if (base === 'hm' && conversion === 'm') return value * 100
    if (base === 'dam' && conversion === 'm') return value * 10
    if (base === 'm' && conversion === 'm') return value * 1
    if (base === 'dm' && conversion === 'm') return value * 0.1
    if (base === 'cm' && conversion === 'm') return value * 0.01
    if (base === 'mm' && conversion === 'm') return value * 0.001

    if (base === 'km' && conversion === 'dam') return value * 100
    if (base === 'hm' && conversion === 'dam') return value * 10
    if (base === 'dam' && conversion === 'dam') return value * 1
    if (base === 'm' && conversion === 'dam') return value * 0.1
    if (base === 'dm' && conversion === 'dam') return value * 0.01
    if (base === 'cm' && conversion === 'dam') return value * 0.001
    if (base === 'mm' && conversion === 'dam') return value * 0.0001

    if (base === 'km' && conversion === 'hm') return value * 10
    if (base === 'hm' && conversion === 'hm') return value * 1
    if (base === 'dam' && conversion === 'hm') return value * 0.1
    if (base === 'm' && conversion === 'hm') return value * 0.01
    if (base === 'dm' && conversion === 'hm') return value * 0.001
    if (base === 'cm' && conversion === 'hm') return value * 0.0001
    if (base === 'mm' && conversion === 'hm') return value * 0.00001

    if (base === 'km' && conversion === 'km') return value * 1
    if (base === 'hm' && conversion === 'km') return value * 0.1
    if (base === 'dam' && conversion === 'km') return value * 0.01
    if (base === 'm' && conversion === 'km') return value * 0.001
    if (base === 'dm' && conversion === 'km') return value * 0.0001
    if (base === 'cm' && conversion === 'km') return value * 0.00001
    if (base === 'mm' && conversion === 'km') return value * 0.000001

    if (base === 'km' && conversion === 'dm') return value * 0.0001
    if (base === 'hm' && conversion === 'dm') return value * 0.001
    if (base === 'dam' && conversion === 'dm') return value * 0.01
    if (base === 'm' && conversion === 'dm') return value * 0.1
    if (base === 'dm' && conversion === 'dm') return value * 1
    if (base === 'cm' && conversion === 'dm') return value * 0.1
    if (base === 'mm' && conversion === 'dm') return value * 0.01

    if (base === 'km' && conversion === 'cm') return value * 0.00001
    if (base === 'hm' && conversion === 'cm') return value * 0.0001
    if (base === 'dam' && conversion === 'cm') return value * 0.001
    if (base === 'm' && conversion === 'cm') return value * 0.01
    if (base === 'dm' && conversion === 'cm') return value * 0.1
    if (base === 'cm' && conversion === 'cm') return value * 1
    if (base === 'mm' && conversion === 'cm') return value * 0.1

    if (base === 'km' && conversion === 'mm') return value * 0.000001
    if (base === 'hm' && conversion === 'mm') return value * 0.00001
    if (base === 'dam' && conversion === 'mm') return value * 0.0001
    if (base === 'm' && conversion === 'mm') return value * 0.001
    if (base === 'dm' && conversion === 'mm') return value * 0.01
    if (base === 'cm' && conversion === 'mm') return value * 0.1
    if (base === 'mm' && conversion === 'mm') return value * 1
    return 0;

}

console.log(convert1(1, 'km', 'm'))

function exec () {
    const value = readline.questionFloat('Digite o número que deseja converter')
    const base =  readline.question('Qual a unidade de medida atual ?')
    const conversion =  readline.question('Qual a unidade de medida desejaconverter ?')
    console.log(convert1(value, base, conversion))
}

exec();

/*
Exercício 2
1 - Vamos tipar a função. Mas o que seria isso ? É falar o que esperamos na entrada da função e o que esperamos na saída para caso algo que não está previsto seja na entrada ou saída seja alertado pelo typescript. Vamos gerar previsibilidade. Portanto, em cada parâmetro é só colocar o tipo que espera
2 - Depois vamos colocar o tipo que a função espera retornar. Atenção para a sintaxe. 
3 - Depois é só fazer a lógica matemática brasal kkkkk
*/

/*
Exercício 7
1 - Primeiro vamos importar o módulo
2 - É bem simples, como queremos deixar dinâmico, então, para cada parâmetro da função vamos ter uma pergunta e para isso usaremos o readline para pegar os dados.
   1 - O value será uma pergunta em que digitaremos o número no terminal.
   2 - O base será uma pergunta em que digitaremos a unidade de medida que está o número, no terminal.
   3 - O value será uma pergunta em que digitaremos a unidade de medida que queremos converter o número, no terminal.
3 - Depois é só consolar esse dados como parâmetro da função convert1
4 - Chama a função para executar, né kkk
*/