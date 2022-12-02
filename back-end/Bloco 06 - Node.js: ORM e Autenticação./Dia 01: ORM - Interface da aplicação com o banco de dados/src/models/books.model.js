const UserModel = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });

    return Book;
};

module.exports = UserModel;

/* 
Exercício 2 - 
- Um model é uma abstração que representa uma linha na tabela em seu banco de dados e passa várias informações ao Sequelize sobre essa entidade, como o nome e quais atributos (colunas) ela possui (e seus tipos de dados). Vai representar uma pessoa em nossa aplicação
- Vamos definir a Model com a funcção sequelize que pegará o método define, que obviamente definirá a tabela.
- Depois passamos o nome da tabela começando por maiúsculo e no singular
- Depois só tipar cada coluna no banco.
*/