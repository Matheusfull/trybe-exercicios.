import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUsers from '../interfaces/book.interface';
import mysql from './connection';

export default class UserModel {
    // o que é esse Pool ??  - é um macete do mysql para gerar conexão
    // public connection: Pool;
    connection = mysql

    // Pra que esse constructor ?? - para gerar o valor para o atributo
    constructor(connectin: Pool) {
        this.connection = connectin;
    }

    // A funcção getAll retorna uma Promise, porém dentro dela existe um array de IUsers, ou seja, um array com objetos que têm o mesmo formato do IUsers.
    public async getAll(): Promise<IUsers[]> {
        const result = await this.connection
            .execute('SELECT * FROM Users');
        const [rows] = result;
        // console.log(rows);
        return rows as IUsers[];
    }

    public async getById(id: number): Promise<IUsers> {
        const result = await this.connection
            .execute('SELECT * FROM Users WHERE id = ?', [id]);
        const [rows] = result;
        const [book] = rows as IUsers[];
        return book;
    }

    public async create(user: IUsers): Promise<IUsers> {
        const { name, email, password } = user;
        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO Users (name, email, password ) VALUES (?, ?, ?)',
            [name, email, password],
        );
        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id: insertId, ...user };
    }
}

/*
3 -
1)
Antes era tudo mato:

const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM Users',
  );
  return result;
};

module export = { findAll }

2)
Porém desse jeito ainda estamos trabalhando no paradigma funcional, porém podemos usar classe.
Vamos fazer de um jeito mais confiável. O método findAll será com o tipo genérico, porém ele tem que herdar de um dos tipos que vem na lib do mysql que nesse caso é um RowDataPacket. Além disso o seu retorno será uma promise que dentro há um array de alguma interface.

const UserModel = async (): Promise<IUsers[]> => {
    const [rows] = await connection.execute<IUsers[] & RowDataPacket[]>('SELECT * FROM Users')

    return rows
}

export default UserModel;
*/