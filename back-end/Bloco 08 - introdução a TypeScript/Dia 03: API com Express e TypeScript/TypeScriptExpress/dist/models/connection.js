"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise")); // instalar mysql2 e dotenv
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = promise_1.default.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
/*
A única coisa que mudou aqui é o export defaut, o mode de exportar.
*/ 
