"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Depois daquele bizu da exponenciação de 10, não caio mais
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsVol = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
function convert5(value, base, conversion) {
    const fromIndex = unitsVol.indexOf(base);
    const toIndex = unitsVol.indexOf(conversion);
    const expoent = toIndex - fromIndex;
    return value * Math.pow(1000, expoent);
}
function exec5() {
    const value = readline_sync_1.default.questionFloat('Digite o número que deseja converter');
    const base = readline_sync_1.default.question('Qual a unidade de medida atual ?');
    const conversion = readline_sync_1.default.question('Qual a unidade de medida desejaconverter ?');
    console.log(convert5(value, base, conversion));
}
exec5();
/*
Exercício 6
Seguirá a mesma lógica do exercício 3
*/
