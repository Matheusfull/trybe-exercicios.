/* function fatorial(n) {
    let array =[]
    for (let i = 1; i <= n; i += 1) {
        console.log(i*(i-1)*(i-2))
          // array.push(i)
    }
    /* console.log(array)
    for(let x = 0; x<array.length;x+=1){
        
        console.log(array[x]*array[x-1])
    } */
/* }

fatorial(5) */


// Exercício 4

const array = ['IA', 'Python', 'JavaScript', 'C#', 'Java']

function changePosition(string) {
    /*  let stringOld = "Tryber x aqui!";
        let array = stringOld.split(' ');
        array.splice(1, 1, string);
        let novoArray = array.toString();
        return novoArray.replace(/,/g, " "); */
    let function1 = `Trybe ${string} aqui!`;
    // return function1;
    let arrayOrdenado = array.sort();
    let function2 = ''
    for (let tech of arrayOrdenado) {
        function2 = `${function1}
        - ${tech}
        #goTrybe`
    }
    return function2;
}

console.log(changePosition("é um curso bom e se faz "))