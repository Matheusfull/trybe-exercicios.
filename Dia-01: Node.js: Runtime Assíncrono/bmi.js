const readline = require('readline-sync');

// const peso_kg = readline.question('What’ your weight? '); Aqui o trata somente como inteiro
const peso_kg = readline.questionFloat('What’ your weight? ');
const altura_cm = readline.questionInt('What’ your height? ');

/* const peso_kg = 80;
const altura_cm = 170; */

function calcularIMC(peso, altura) {
    console.log(`Peso: ${peso}, Altura: ${altura}`)
    const alturaEmMetros = altura/100;
    const alturaAoQuadrado = alturaEmMetros**2;
    const imc = (peso/alturaAoQuadrado).toFixed(2);
    let situation ='';
    if(imc<18.5){
        situation = 'Abaixo do peso (magreza)'
    } else if (imc>=18.5 && imc<=24.9){
        situation = 'Peso normal'
    } else if (imc>=25 && imc<=29.9) {
        situation = 'Acima do peso (sobrepeso)'
    }  else if (imc>=30 && imc<=34.5) {
        situation = 'Obesidade grau I'
    }  else if (imc>=35 && imc<=39.9) {
        situation = 'Obesidade grau II'
    } else {
        situation = 'Obesidade grau III'
    };
    return situation;
}


console.log(calcularIMC(peso_kg, altura_cm));



/* 
exercício 1
- O diretório bmi.js será o nosso pacote ao rodarmos o npm init, onde começaremos a ter uma aplicação node.js
- Criarei uma função que recebe 2 parâmetros e retorna o cálculo do imc.
- usaremos como teste valores para peso e altura e rodaremos o pacote node. No terminal executaremos o node bmi.js
*/

/*
exercício 2
Para rodar a aplicação com o npm run bmi, temos que ir ao arquivo package.json, colocar o bmi.js como arquivo principal (main) e no scripts, colocaremos o node - que é o comando para rodar a aplicação - e o arquivo principal, que no caso é o bmi.js. Com isso ao rodarmos o npm run bmi, a aplicação rodará.
*/

/*
exercício 3
- Para usar o pacote readline-sync, devemos 'importá-lo'
- Agora vamos criar duas variáveis para pegar as informações que o user colocar no terminal, uma para peso e outra para altura.
- Por fim colocaremos essas variáveis na função calcularIMC para tornar a aplicação mais interativa.
*/

/*
exercício 4
A função que faz isso é a questionFloat
*/

/*
exercício 5
Para cada valor de imc, vamos associar a uma string que correponde ao imc e isso será feito pelos if's. Coisa normal que foi feito ao longo do curso.
*/