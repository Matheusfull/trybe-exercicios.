"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
class UserModel {
    // Pra que esse constructor ?? 
    constructor(connectin) {
        // o que é esse Pool ?? 
        // public connection: Pool;
        this.connection = connection_1.default;
        this.connection = connectin;
    }
    // A funcção getAll retorna uma Promise, porém dentro dela existe um array de IUsers, ou seja, um array com objetos que têm o mesmo formato do IUsers.
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM Users');
            const [rows] = result;
            // console.log(rows);
            return rows;
        });
    }
    /*  const getAll = async () => {
         const [result] = await connectio.execute(
             'SELECT * FROM Users'
         );
         return result;
     } */
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM Users WHERE id = ?', [id]);
            const [rows] = result;
            const [book] = rows;
            return book;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const result = yield this.connection.execute('INSERT INTO Users (name, email, password ) VALUES (?, ?, ?)', [name, email, password]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, user);
        });
    }
}
exports.default = UserModel;
/*
Antes era tudo mato:

const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM Users',
  );
  return result;
};

module export = { findAll }

Porém desse jeito ainda estamos trabalhando no paradigma funcional, porém podemos usar classe.

*/
/*
Vamos fazer de um jeito mais confiável, com o tipo genérico.
Sendo essa uma forma funcional
const UserModel = async (): Promise<IUsers[]> => {
    const [rows] = await connection.execute<IUsers[] & RowDataPacket[]>('SELECT * FROM Users')

    return rows
}

export default UserModel;
*/ 
