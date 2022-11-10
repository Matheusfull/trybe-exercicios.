type Character = {
    nickname: string,
    class: string,
    stats: { agi: number, str: number, int: number, hp: number, mp: number },
    createdAt: Date,
};

//         Aqui   👇👇👇  avisamos ao array a tipagem que o ts vai ficar de 👀👀
const characters: Character[] = [
    {
        nickname: 'xKillerx',
        class: 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
]

//                       Aqui  👇👇👇  avisamos à função a tipagem que o ts vai ficar de 👀👀. Se entrar um parâmetro diferente, ele vai avisar. 
/*
Por exemplo, se colocarmos:
nickname: 'xKillerx',
        class: 10, 👈👈 📣📣📣 Ele vai ficar vermelho pq eu tipei o class como stringo e coloquei number
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
*/
function printCharacter(character: Character, index: number) {
    const { nickname, class: cls, createdAt } = character;

    console.log(`\n\n===== Character: ${index + 1} ========`);
    console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);

/*
Exercício 1
1 - Vamos criar um molde para tipar, ou seja, definir a característica, de cada uma das chaves do molde. Com isso a gente define uma característica de string para a chave nickname, stringo para class e assim vai.
2 - Vamos fazer a tipagem do array por meio do tipo ( do molde ) Character. Transpilando para a linguagem das ruas, o typescript fala assim para o programador:
    - " Então você vai criar um array chamado characters, onde cada index vai ter a estrutura do molde que foi passado, o tal do Character. Se algum index não tiver essa estrutura, ou seja , se o nickname não for do TIPO string, ou  a class não for do TIPO string e assim vai ... eu vou te perturbar. Vou ficar vermelho até você corrigir."
3 - O mesmo vamos fazer na funcção printCharacter. Vamos colocar o molde no parâmetro dela, com isso o typesrcipt vai nos alertar caso algum parâmetro não esteja dentro do molde, lá do tipo que criamos.
*/