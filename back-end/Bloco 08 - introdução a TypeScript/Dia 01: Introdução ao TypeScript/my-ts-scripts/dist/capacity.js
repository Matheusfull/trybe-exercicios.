"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Depois daquele bizu da exponenciação de 10, não caio mais
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert3(value, base, conversion) {
    const fromIndex = unitsCapacity.indexOf(base);
    const toIndex = unitsCapacity.indexOf(conversion);
    const expoent = toIndex - fromIndex;
    return value * Math.pow(10, expoent);
}
function exec3() {
    const value = readline_sync_1.default.questionFloat('Digite o número que deseja converter');
    const base = readline_sync_1.default.question('Qual a unidade de medida atual ?');
    const conversion = readline_sync_1.default.question('Qual a unidade de medida desejaconverter ?');
    console.log(convert3(value, base, conversion));
}
exec3();
/*
Exercício 4
Seguirá a mesma lógica do exercício 3
*/ 
