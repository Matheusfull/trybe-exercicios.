"use strict";
const readline = require('readline-sync');
const script = readline.questionInt(`
                                  1 - length
                                  2 - mass
                                  3 - capacity
                                  4 - area
                                  5 - volume
                                  Deseja usar qual conversor ?`);
if (script === 1) {
    require('./length.js');
}
if (script === 2) {
    require('./mass.js');
}
if (script === 3) {
    require('./capacity.js');
}
if (script === 4) {
    require('./area.js');
}
if (script === 5) {
    require('./volume.js');
}
/*
Exercício 8
Vale ressaltar que para rodar tudo pelo terminar é só colocar o npm run start para compilar tudo e depois rodar o nome no ./dist/index.js, lugar em que estão as perguntas.
1 - Vamos importar o módulo para poder pegar as informações no terminal
2 - Vamos fazer a pergunta e colher a informação
3 - Para cada uma das possibilidades, executaremos o script correpondente.
*/ 
