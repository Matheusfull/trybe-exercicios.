"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Depois daquele bizu da exponenciação de 10, não caio mais
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert2(value, base, conversion) {
    const fromIndex = unitsMass.indexOf(base);
    const toIndex = unitsMass.indexOf(conversion);
    const expoent = toIndex - fromIndex;
    return value * Math.pow(10, expoent);
}
function exec2() {
    const value = readline_sync_1.default.questionFloat('Digite o número que deseja converter');
    const base = readline_sync_1.default.question('Qual a unidade de medida atual ?');
    const conversion = readline_sync_1.default.question('Qual a unidade de medida desejaconverter ?');
    console.log(convert2(value, base, conversion));
}
exec2();
/*
Exercício 3
1 - Usaremos o mesmo raciocínio. Vamos tipar os parâmetros da função para saber o que vai entrar e também tiparemos a saída.
2 - Depois é só usar lógica para saber qual o expoente vamos usar na potenciação
*/
/*
Outra solução:
1 - Poderíamos usar o conceito de "molde", o mesmo que foi usado no exercício 1. Oa invés de tipar a entrar par cada parâmetro, vamos fazer um molde, que será um objeto e nele cada chave será o parâmetro que iremos usar na função.
2 - Depois vamos usar esse molde no parâmetro da função
3 - Desestruturaremos esse molde a fim de que possa ser utilizado cada chave.
*/
/*
type Dados = {
    value: number;
    base: string;
    conversion: string;
}

function convert(dados: Dados): number {
    const { base, conversion, value } = dados;
    .
    .
    .
    .
    .
*/ 
