/*
A função de callback recebe como primeiro parâmetro um item do tipo do array;|| value: T
A função de callback pode receber como segundo parâmetro um index do tipo inteiro;|| index?: number
A função de callback pode receber como terceiro parâmetro o próprio array;|| array?: Array<T>
A função de callback devolve um booleano.|| => boolean
*/

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, call: callbackFilter<T>): Array<T> {
    const newArray : Array <T> = []
    for (let index = 0; index < array.length, index += 1;) {
        if (call(array[index], index, array)) {
            newArray.push(array[index])
        }
    }
    return newArray;
};

/*
Recebe como primeiro parâmetro um array que pode ser de qualquer tipo;
1 - array: Array<T>, ou seja, meio que um apelido para o 1 parâmetro em que o tipo será um array e o tipo do array é genérico

Recebe como segundo parâmetro uma função de callback;
2 - call: callbackFilter<T>, ou seja, meio que recebe um apelido para o 2 parâmetro e que será uma função em que recebe um tipo genérico

Retorna um novo array removendo os itens que não atendem a condição da função de callback;
3 - : Array<T>, ou seja é essa sintaxe horrorosa kkkk a função retorna um array do tipo genérico.

4 - Como a função retornará um novo array removendo os itens que não atendem a condição da call, então vamos criar um novo array para depois só dar push.
Agora é tipagem de constante, aquele type aliases maroto que na linguagem das ruas é assim:
Ae, cria um array chamado newArray que será um array do tipo que ainda não sei, aquele que é assim: [], beleza ? 

5 - Depois só fazer um for e se cada index do array for true, então adicione-o ao newArray.
*/